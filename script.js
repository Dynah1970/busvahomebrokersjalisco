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
});document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeIcon = document.getElementById("close-icon");

    // Abrir el menú hamburguesa
    menuIcon.addEventListener("click", () => {
        mobileMenu.classList.add("active");
    });

    // Cerrar el menú hamburguesa
    closeIcon.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});

const video = document.getElementById("interactive-video");

video.addEventListener("timeupdate", () => {
    // Detectar si el video está cerca del final
    if (video.currentTime >= (video.duration - 1.2)) {
        freezeAndResumeVideo();
    }
});

function freezeAndResumeVideo() {
    // Pausar el video y mantener el cuadro actual
    video.pause();

    // Reanudar el video inmediatamente sin dejar la pantalla sin imagen
    setTimeout(() => {
        video.style.transition = "opacity 0.5s ease-in-out"; // Transición opcional
        video.style.opacity = "1"; // Mantener la opacidad

        video.play(); // Reanudar inmediatamente

        // Reproducir el video por 1 segundo y volver a pausar
        setTimeout(() => {
            freezeAndResumeVideo(); // Pausar nuevamente después de 1 segundo
        }, 1000); // Ajusta este tiempo si necesitas más o menos tiempo de reproducción
    }, 0); // Sin tiempo de espera antes de reanudar
}



    
