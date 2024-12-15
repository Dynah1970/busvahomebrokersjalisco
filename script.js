document.addEventListener("DOMContentLoaded", function () {
    // Habilitar las pestañas de navegación
    const tabs = document.querySelectorAll('nav ul li');
    const tabContent = document.querySelectorAll('.tab-content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            tabContent.forEach(content => content.classList.remove('active'));
            tabContent[index].classList.add('active');
        });
    });

    // Agregar acción al botón de contacto
    const contactoButton = document.querySelector('.contacto');
    contactoButton.addEventListener('click', () => {
        alert("Botón de contacto clickeado!");
    });

    // Agregar acción al botón de más información
    const masInfoButton = document.querySelector('.masInformacion');
    masInfoButton.addEventListener('click', () => {
        alert("Botón de más información clickeado!");
    });

    // Agregar acción al botón de WhatsApp
    const whatsappButton = document.querySelector('.whatsapp');
    whatsappButton.addEventListener('click', () => {
        window.location.href = "https://wa.me/1234567890"; // Reemplazar con tu número
    });
});
