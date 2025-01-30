// script.js

// Pridedame efektą navigacijos nuorodoms užvedus pelės žymeklį
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.textDecoration = 'underline'; // Užvedus pelės žymeklį - pabrėžimas
    });
    link.addEventListener('mouseout', () => {
        link.style.textDecoration = 'none'; // Išėjus - pašalinamas pabrėžimas
    });
});

// Paprasta slinkimo animacija į puslapio viršų
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
backToTopButton.style.display = 'none'; // Pradžioje mygtukas nematomas
backToTopButton.style.zIndex = '1000';
document.body.appendChild(backToTopButton);

// Rodyti mygtuką, kai slenkama žemyn
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Paspaudus mygtuką slinkti į viršų
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Slenka sklandžiai
    });
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

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock(); // Iškart rodyti laiką puslapiui užsikrovus

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