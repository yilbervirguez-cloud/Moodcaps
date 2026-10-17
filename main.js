// Esperar a que el documento cargue completamente
document.addEventListener('DOMContentLoaded', () => {

    // Menú de navegación responsive
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace (móvil)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        // Simulación de envío
        alert(`¡Gracias ${nombre}! Hemos recibido tu mensaje. Nos pondremos en contacto contigo al correo ${email}.`);

        // Limpiar el formulario
        contactForm.reset();
    });
});

// Función interactiva para realizar pedidos de productos por WhatsApp
function mostrarAlerta(nombreProducto) {
    const telefonoWhatsApp = "570000000000"; // Reemplazar con el número real de WhatsApp
    const mensaje = encodeURIComponent(`Hola MoodCaps, estoy interesado en el producto: ${nombreProducto}`);
    const urlWhatsApp = `https://wa.me/${telefonoWhatsApp}?text=${mensaje}`;
    
    window.open(urlWhatsApp, '_blank');
}
