/**
 * Header Handler
 * Maneja la lógica del header y navegación
 */

class HeaderHandler {
    constructor() {
        this.header = document.getElementById('main-header');
        this.proyectosSection = document.getElementById('proyectos');
        this.heroSection = document.getElementById('hero');
        this.logoLink = document.querySelector('#logo a');
        
        this.init();
    }

    init() {
        this.setupScrollObserver();
        this.setupLogoClick();
    }

    setupScrollObserver() {
        if (this.header && this.proyectosSection && this.heroSection) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    this.setHeaderBg(!entry.isIntersecting);
                },
                { 
                    root: null, 
                    threshold: 0, 
                    rootMargin: '-80px 0px 0px 0px' 
                }
            );
            observer.observe(this.heroSection);
        }
    }

    setHeaderBg(show) {
        if (this.header) {
            if (show) {
                this.header.classList.add('bg-black/80');
            } else {
                this.header.classList.remove('bg-black/80');
            }
        }
    }

    setupLogoClick() {
        if (this.logoLink) {
            this.logoLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.scrollToTop();
            });
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new HeaderHandler();
}); 