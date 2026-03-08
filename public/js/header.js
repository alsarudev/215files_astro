/**
 * Header Handler
 * Maneja la lógica del header y navegación
 */

class HeaderHandler {
    constructor() {
        this.header = document.getElementById('main-header');
        this.navContainer = document.getElementById('nav-container');
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
        if (this.navContainer) {
            if (show) {
                // Estado Scrolled (Burbuja flotante de cristal)
                this.navContainer.classList.add('bg-zinc-950/70', 'backdrop-blur-2xl', 'border-white/10', 'shadow-[0_20px_40px_rgba(0,0,0,0.8)]');
                this.navContainer.classList.remove('border-transparent');
            } else {
                // Estado en Hero (Transparente total)
                this.navContainer.classList.remove('bg-zinc-950/70', 'backdrop-blur-2xl', 'border-white/10', 'shadow-[0_20px_40px_rgba(0,0,0,0.8)]');
                this.navContainer.classList.add('border-transparent');
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