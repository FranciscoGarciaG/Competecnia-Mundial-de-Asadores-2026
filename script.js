// script.js

// 1. Lógica principal: Cambiar de pestaña
function mostrarSeccion(idSeccion) {
    // A) Ocultamos todas las secciones
    const secciones = document.querySelectorAll('.seccion-pagina');
    secciones.forEach(seccion => {
        seccion.classList.remove('activa');
    });

    // B) Mostramos solo la sección solicitada
    const seccionMostrar = document.getElementById(idSeccion);
    if (seccionMostrar) {
        seccionMostrar.classList.add('activa');
    }

    // C) Si estamos en un celular, cerramos el menú después de hacer clic
    document.getElementById('navLinks').classList.remove('active');

    // D) Regresamos la vista al principio de la página
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 2. Inicialización: Mostrar "Inicio" cuando la página carga por primera vez
document.addEventListener('DOMContentLoaded', () => {
    mostrarSeccion('inicio');
});

// 3. Menú responsivo (Hamburguesa para celulares)
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

// 4. Parallax para el video de fondo en el Inicio
window.addEventListener('scroll', () => {
    const video = document.getElementById('parallaxVideo');
    // Solo aplica el efecto si la sección de inicio está visible
    if(video && document.getElementById('inicio').classList.contains('activa')) {
        let offset = window.pageYOffset;
        video.style.transform = `translateY(${offset * 0.4}px)`;
    }
});

// 5. Pestañas internas de la sección de Videos (TikTok, Reels, etc.)
function showTab(tabId) {
    // Ocultar todos los contenedores
    document.querySelectorAll('.video-container').forEach(c => c.classList.remove('active'));
    // Quitar clase active de los botones
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    
    // Mostrar el seleccionado
    document.getElementById(tabId).classList.add('active');
    // Iluminar el botón clickeado
    event.currentTarget.classList.add('active');
}

// 6. Reproducir videos de muestra al pasar el mouse (o tocar en móvil)
document.addEventListener('DOMContentLoaded', () => {
    const hoverVideos = document.querySelectorAll('.hover-video');
    hoverVideos.forEach(video => {
        video.addEventListener('mouseenter', () => video.play());
        video.addEventListener('mouseleave', () => video.pause());
        video.addEventListener('touchstart', (e) => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    });
});