document.addEventListener("DOMContentLoaded", function() {
    // Pridedame efektą navigacijos nuorodoms užvedus pelės žymeklį
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.textDecoration = 'underline';
        });
        link.addEventListener('mouseout', () => {
            link.style.textDecoration = 'none';
        });
    });

    // Laikrodžio funkcija (tik jei yra `clock`)
    function updateClock() {
        const clockElement = document.getElementById('clock');
        if (!clockElement) return; // Jei nėra laikrodžio, išeinam

        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Paleisti laikrodį, jei `clock` yra puslapyje
    if (document.getElementById('clock')) {
        setInterval(updateClock, 1000);
        updateClock();
    }


    // Mygtukas "Į viršų"
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = 'Į viršų';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.padding = '10px 20px';
    backToTopButton.style.backgroundColor = '#333';
    backToTopButton.style.color = '#fff';
    backToTopButton.style.border = 'none';
    backToTopButton.style.borderRadius = '5px';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.display = 'none';
    backToTopButton.style.zIndex = '1000';
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        backToTopButton.style.display = window.scrollY > 200 ? 'block' : 'none';
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Socialinių tinklų ikonų dinamika
    const socialIcons = document.querySelectorAll('.social-icons img');

    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'scale(1.2)';
            icon.style.transition = 'transform 0.3s';
        });
        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'scale(1)';
        });
    });

    // MathJax perbraižymas po puslapio įkėlimo
    if (window.MathJax) {
        setTimeout(() => {
            MathJax.typesetPromise();
        }, 500); // 0.5 sekundės uždelsimas
    }
});

document.getElementById("submit-btn").addEventListener("click", function () {
    // Gauti formos reikšmes
    const vardas = document.getElementById("vardas").value;
    const pavarde = document.getElementById("pavarde").value;
    const elpastas = document.getElementById("elpastas").value;
    const telefonas = document.getElementById("telefonas").value;
    const adresas = document.getElementById("adresas").value;

    // Požymių reikšmės (skaičiai)
    const pozymiai = [];
    for (let i = 1; i <= 5; i++) {
        pozymiai.push(Number(document.getElementById(`pozymis${i}`).value));
    }

    // Apskaičiuoti požymių vidurkį
    const vidurkis = pozymiai.reduce((a, b) => a + b, 0) / pozymiai.length;

    // Sukurti objektą
    const kontaktas = {
        vardas,
        pavarde,
        elpastas,
        telefonas,
        adresas,
        pozymiai,
        vidurkis
    };

    // Išvesti objektą į konsolę
    console.log("Išsaugoti duomenys:", kontaktas);

    // Išvesti rezultatus puslapyje
    const rezultatuLaukas = document.getElementById("rezultatai");
    rezultatuLaukas.innerHTML = `
        <p><strong>Vardas:</strong> ${vardas}</p>
        <p><strong>Pavardė:</strong> ${pavarde}</p>
        <p><strong>El. paštas:</strong> ${elpastas}</p>
        <p><strong>Telefonas:</strong> ${telefonas}</p>
        <p><strong>Adresas:</strong> ${adresas}</p>
        <p><strong>Požymiai:</strong></p>
        <ul>
            ${pozymiai.map(p => `<li>${p}</li>`).join("")}
        </ul>
        <p><strong>Vidurkis:</strong> <span id="vidurkio-spalva">${vidurkis.toFixed(2)}</span></p>
    `;

    // Pritaikyti vidurkio spalvą
    const vidurkioElementas = document.getElementById("vidurkio-spalva");
    if (vidurkis < 3) {
        vidurkioElementas.style.color = "red";
    } else if (vidurkis < 7) {
        vidurkioElementas.style.color = "orange";
    } else {
        vidurkioElementas.style.color = "green";
    }
});
