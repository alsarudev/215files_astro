/**
 * Contact Form Handler
 * Maneja la lógica del formulario de contacto
 */

class ContactFormHandler {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.submitBtn = document.getElementById('submitBtn');
        this.successModal = document.getElementById('successModal');
        this.errorModal = document.getElementById('errorModal');
        this.errorMessage = document.getElementById('errorMessage');
        this.closeSuccessModal = document.getElementById('closeSuccessModal');
        this.closeErrorModal = document.getElementById('closeErrorModal');
        
        this.init();
    }

    init() {
        if (this.form && this.submitBtn) {
            this.form.addEventListener('submit', this.handleSubmit.bind(this));
        }
        
        this.setupModalListeners();
        this.setupKeyboardListeners();
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        const originalText = this.submitBtn.textContent;
        this.setButtonState('Enviando...', true);
        
        try {
            const formData = new FormData(this.form);
            const params = new URLSearchParams();
            
            // Agregar campos al URLSearchParams
            params.append('name', formData.get('name'));
            params.append('email', formData.get('email'));
            params.append('message', formData.get('message'));
            
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: params
            });
            
            const result = await response.json();
            
            if (result.success) {
                this.showSuccessModal();
                this.form.reset();
            } else {
                this.showErrorModal(result.message || 'Error al enviar el mensaje');
            }
        } catch (error) {
            this.showErrorModal('Error de conexión. Verifica tu internet.');
            console.error('Error:', error);
        } finally {
            this.setButtonState(originalText, false);
        }
    }

    setButtonState(text, disabled) {
        this.submitBtn.textContent = text;
        this.submitBtn.disabled = disabled;
    }

    showSuccessModal() {
        this.successModal.classList.remove('hidden');
        this.successModal.classList.add('flex');
    }

    showErrorModal(message) {
        this.errorMessage.textContent = message;
        this.errorModal.classList.remove('hidden');
        this.errorModal.classList.add('flex');
    }

    closeModals() {
        this.successModal.classList.add('hidden');
        this.successModal.classList.remove('flex');
        this.errorModal.classList.add('hidden');
        this.errorModal.classList.remove('flex');
    }

    setupModalListeners() {
        // Cerrar con botones
        if (this.closeSuccessModal) {
            this.closeSuccessModal.addEventListener('click', this.closeModals.bind(this));
        }
        
        if (this.closeErrorModal) {
            this.closeErrorModal.addEventListener('click', this.closeModals.bind(this));
        }
        
        // Cerrar haciendo clic fuera del modal
        if (this.successModal) {
            this.successModal.addEventListener('click', (e) => {
                if (e.target === this.successModal) {
                    this.closeModals();
                }
            });
        }
        
        if (this.errorModal) {
            this.errorModal.addEventListener('click', (e) => {
                if (e.target === this.errorModal) {
                    this.closeModals();
                }
            });
        }
    }

    setupKeyboardListeners() {
        // Cerrar con Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModals();
            }
        });
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new ContactFormHandler();
}); 