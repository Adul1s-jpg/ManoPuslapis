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

    // Laikrodžio funkcija
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    }
    setInterval(updateClock, 1000);
    updateClock();

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

    // Kontaktų formos apdorojimas
    const submitBtn = document.getElementById("submitBtn");
    if (submitBtn) {
        submitBtn.addEventListener("click", function() {
            // Gauti įvesties duomenis
            const name = document.getElementById("name").value.trim();
            const surname = document.getElementById("surname").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const address = document.getElementById("address").value.trim();
            const param1 = parseFloat(document.getElementById("param1").value);
            const param2 = parseFloat(document.getElementById("param2").value);
            const param3 = parseFloat(document.getElementById("param3").value);
            const param4 = parseFloat(document.getElementById("param4").value);
            const param5 = parseFloat(document.getElementById("param5").value);

            // Patikrinti, ar visi laukai užpildyti
            if (!name || !surname || !email || !phone || !address || isNaN(param1) || isNaN(param2) || isNaN(param3) || isNaN(param4) || isNaN(param5)) {
                alert("Prašome užpildyti visus laukus teisingai!");
                return;
            }

            // Tikrinti el. pašto formatą
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Įveskite teisingą el. pašto adresą!");
                return;
            }

            // Tikrinti telefono numerį
            const phonePattern = /^\+?\d{7,15}$/;
            if (!phonePattern.test(phone)) {
                alert("Įveskite teisingą telefono numerį!");
                return;
            }

            // Sukurti objektą
            const userData = {
                vardas: name,
                pavarde: surname,
                el_pastas: email,
                telefonas: phone,
                adresas: address,
                pozymiai: [param1, param2, param3, param4, param5]
            };

            // Apskaičiuoti požymių vidurkį
            const average = (param1 + param2 + param3 + param4 + param5) / 5;
            let color = "green";
            if (average < 3) {
                color = "red";
            } else if (average >= 3 && average < 7) {
                color = "orange";
            }

            // Išvesti rezultatą naršyklės konsolėje
            console.log("Įvesti duomenys:", userData);

            // Atvaizduoti duomenis puslapyje
            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = `
                <p><strong>Vardas:</strong> ${name}</p>
                <p><strong>Pavardė:</strong> ${surname}</p>
                <p><strong>El. paštas:</strong> ${email}</p>
                <p><strong>Telefonas:</strong> ${phone}</p>
                <p><strong>Adresas:</strong> ${address}</p>
                <p><strong>Požymiai:</strong> ${param1}, ${param2}, ${param3}, ${param4}, ${param5}</p>
                <p style="color: ${color};"><strong>${name} ${surname} (${email}):</strong> ${average.toFixed(2)}</p>
            `;
        });
    }
});
