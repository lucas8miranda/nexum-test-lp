// Particles.js Configuration
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#8a2be2",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Nav toggle
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.querySelector('.main-nav');
    const body = document.body;
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
            body.classList.toggle('menu-open');
        });
        
        // Fechar menu ao clicar em links
        const navLinks = document.querySelectorAll('.main-nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                mainNav.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });
        
        // Fechar menu ao clicar fora dele
        document.addEventListener('click', (event) => {
            const isClickInsideNav = mainNav.contains(event.target);
            const isClickOnToggle = navToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && mainNav.classList.contains('active')) {
                navToggle.classList.remove('active');
                mainNav.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
    }

    // Counter animation
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.parentElement.dataset.value);
        const duration = 2000; // ms
        const step = Math.ceil(target / (duration / 20));
        
        let current = 0;
        const updateCounter = () => {
            if(current < target) {
                current += step;
                if(current > target) current = target;
                counter.textContent = current;
                setTimeout(updateCounter, 20);
            }
        };
        
        // Start counter animation when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(counter.parentElement);
    });

    // Scroll reveal
    ScrollReveal().reveal('.hero-text', { 
        origin: 'left', 
        distance: '50px', 
        duration: 1000, 
        delay: 200,
        easing: 'ease-in-out'
    });
    
    ScrollReveal().reveal('.hero-image', { 
        origin: 'right', 
        distance: '50px', 
        duration: 1000, 
        delay: 400,
        easing: 'ease-in-out'
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.nexum-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(51, 18, 59, 0.98)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
            header.style.padding = '0.7rem 0';
        } else {
            header.style.background = 'rgba(51, 18, 59, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
            header.style.padding = '1rem 0';
        }
    });

    // Substituir o código de animação dos botões por este
    document.querySelectorAll('.cta-button').forEach(button => {
        // Adicionar efeito de brilho ao mover o mouse
        button.addEventListener('mousemove', function(e) {
            if (!this.classList.contains('primary')) return;
            
            const x = e.pageX - this.offsetLeft;
            const y = e.pageY - this.offsetTop;
            
            this.style.setProperty('--x', x + 'px');
            this.style.setProperty('--y', y + 'px');
        });
        
        // Efeito de clique
        button.addEventListener('mousedown', function() {
            if (this.classList.contains('primary')) {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 5px 15px rgba(138, 43, 226, 0.3)';
            }
        });
        
        button.addEventListener('mouseup', function() {
            if (this.classList.contains('primary')) {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 10px 30px rgba(138, 43, 226, 0.5)';
            }
        });
        
        // Restaurar estado normal quando o mouse sai
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });

    // Animações para a seção de benefícios
    ScrollReveal().reveal('.section-header', { 
        origin: 'top', 
        distance: '30px', 
        duration: 1000, 
        delay: 200 
    });

    ScrollReveal().reveal('.benefit-card', { 
        origin: 'bottom', 
        distance: '30px', 
        duration: 800, 
        interval: 200 
    });

    // Animações para a seção do palestrante
    ScrollReveal().reveal('.speaker-image', { 
        origin: 'left', 
        distance: '50px', 
        duration: 1000, 
        delay: 200,
        easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    });

    ScrollReveal().reveal('.speaker-info', { 
        origin: 'right', 
        distance: '50px', 
        duration: 1000, 
        delay: 400,
        easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    });

    ScrollReveal().reveal('.achievement-item', { 
        origin: 'bottom', 
        distance: '30px', 
        duration: 800, 
        interval: 200 
    });

    // Adicionando efeito de hover para a imagem do palestrante
    const speakerImage = document.querySelector('.speaker-image img');
    if (speakerImage) {
        speakerImage.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) - 0.5;
            const y = ((e.clientY - rect.top) / rect.height) - 0.5;
            
            this.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${y * -10}deg)`;
        });
        
        speakerImage.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateY(-5deg)';
        });
    }

    // Timeline navigation for methodology section
    const timelinePoints = document.querySelectorAll('.timeline-point');
    const methodologySteps = document.querySelectorAll('.methodology-step');

    timelinePoints.forEach(point => {
        point.addEventListener('click', () => {
            // Remove active class from all points and steps
            timelinePoints.forEach(p => p.classList.remove('active'));
            methodologySteps.forEach(step => step.classList.remove('active'));
            
            // Add active class to clicked point and corresponding step
            point.classList.add('active');
            const stepNumber = point.getAttribute('data-step');
            document.getElementById(`step-${stepNumber}`).classList.add('active');
        });
    });

    // Animation for methodology section
    ScrollReveal().reveal('.methodology-section .section-header', { 
        origin: 'top', 
        distance: '30px', 
        duration: 1000, 
        delay: 200 
    });

    ScrollReveal().reveal('.timeline', { 
        origin: 'bottom', 
        distance: '30px', 
        duration: 1000, 
        delay: 400 
    });

    ScrollReveal().reveal('.methodology-steps', { 
        origin: 'bottom', 
        distance: '30px', 
        duration: 1000, 
        delay: 600 
    });

    ScrollReveal().reveal('.methodology-cta', { 
        origin: 'bottom', 
        distance: '30px', 
        duration: 1000, 
        delay: 800 
    });

    // Animações para a seção de credenciais
    ScrollReveal().reveal('.credentials-image', { 
        origin: 'left', 
        distance: '50px', 
        duration: 1000, 
        delay: 200 
    });

    ScrollReveal().reveal('.credentials-info', { 
        origin: 'right', 
        distance: '50px', 
        duration: 1000, 
        delay: 400 
    });

    ScrollReveal().reveal('.credential-item', { 
        origin: 'bottom', 
        distance: '20px', 
        duration: 800, 
        interval: 150 
    });

    // Animações para a seção de patrocinadores
    ScrollReveal().reveal('.sponsors-section .section-header', { 
        origin: 'top', 
        distance: '30px', 
        duration: 1000, 
        delay: 200 
    });

    ScrollReveal().reveal('.sponsors-slider', { 
        origin: 'bottom', 
        distance: '30px', 
        duration: 1000, 
        delay: 400 
    });

    ScrollReveal().reveal('.sponsors-grid', { 
        origin: 'bottom', 
        distance: '30px', 
        duration: 1000, 
        delay: 600 
    });

    ScrollReveal().reveal('.sponsors-cta', { 
        origin: 'bottom', 
        distance: '30px', 
        duration: 1000, 
        delay: 800 
    });

    // Pausa da animação ao passar o mouse
    const sponsorsTrack = document.querySelector('.sponsors-track');
    if (sponsorsTrack) {
        sponsorsTrack.addEventListener('mouseenter', () => {
            sponsorsTrack.style.animationPlayState = 'paused';
        });
        
        sponsorsTrack.addEventListener('mouseleave', () => {
            sponsorsTrack.style.animationPlayState = 'running';
        });
    }

    // Efeito de hover aleatório para os patrocinadores do grid
    const sponsorGridItems = document.querySelectorAll('.sponsor-grid-item');
    if (sponsorGridItems.length > 0) {
        // Função para destacar um patrocinador aleatório
        const highlightRandom = () => {
            // Remover destaque anterior
            sponsorGridItems.forEach(item => {
                item.classList.remove('highlight');
                if (item._hoverTimer) {
                    clearTimeout(item._hoverTimer);
                }
            });
            
            // Selecionar um patrocinador aleatório
            const randomIndex = Math.floor(Math.random() * sponsorGridItems.length);
            const randomSponsor = sponsorGridItems[randomIndex];
            
            // Adicionar classe de destaque
            randomSponsor.classList.add('highlight');
            
            // Simular evento de hover
            const mouseEnter = new MouseEvent('mouseenter');
            randomSponsor.dispatchEvent(mouseEnter);
            
            // Definir um timer para remover o destaque após 2 segundos
            randomSponsor._hoverTimer = setTimeout(() => {
                randomSponsor.classList.remove('highlight');
                const mouseLeave = new MouseEvent('mouseleave');
                randomSponsor.dispatchEvent(mouseLeave);
            }, 2000);
        };
        
        // Iniciar os destaques aleatórios após um atraso inicial
        setTimeout(() => {
            highlightRandom();
            // Repetir a cada 5 segundos
            setInterval(highlightRandom, 5000);
        }, 3000);
    }

    // Animações para a seção de mídia
    ScrollReveal().reveal('.media-section .section-header', { 
        origin: 'top', 
        distance: '30px', 
        duration: 1000, 
        delay: 200 
    });

    ScrollReveal().reveal('.featured-video', { 
        origin: 'left', 
        distance: '50px', 
        duration: 1000, 
        delay: 400 
    });

    ScrollReveal().reveal('.media-item', { 
        origin: 'right', 
        distance: '30px', 
        duration: 800, 
        interval: 200 
    });

    ScrollReveal().reveal('.media-cta', { 
        origin: 'bottom', 
        distance: '30px', 
        duration: 1000, 
        delay: 600 
    });

    // Adicionar comportamento para pausar o vídeo quando fora da visualização
    const videoSection = document.querySelector('.media-section');
    const videoIframe = document.querySelector('.video-wrapper iframe');

    if (videoSection && videoIframe) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Obtenha o src atual
                let videoSrc = videoIframe.getAttribute('src');
                
                if (!entry.isIntersecting) {
                    // Se o vídeo estiver fora da visualização, adicione parâmetro para pausar
                    if (videoSrc.indexOf('?') > -1) {
                        // Já tem parâmetros na URL
                        if (videoSrc.indexOf('autoplay=1') > -1) {
                            videoSrc = videoSrc.replace('autoplay=1', 'autoplay=0');
                        } else {
                            videoSrc += '&autoplay=0';
                        }
                    } else {
                        videoSrc += '?autoplay=0';
                    }
                    videoIframe.setAttribute('src', videoSrc);
                }
            });
        }, { threshold: 0.2 });
        
        videoObserver.observe(videoSection);
    }

    // Animações para a seção de consultor
    ScrollReveal().reveal('.consultant-info', { 
        origin: 'left', 
        distance: '50px', 
        duration: 1000, 
        delay: 200 
    });

    ScrollReveal().reveal('.linkedin-profile', { 
        origin: 'right', 
        distance: '50px', 
        duration: 1000, 
        delay: 400 
    });

    // Efeito de levitação para o cartão do LinkedIn
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        document.addEventListener('mousemove', function(e) {
            if (window.innerWidth > 1200) { // Aplica apenas em telas maiores
                const cardRect = profileCard.getBoundingClientRect();
                const cardCenterX = cardRect.left + cardRect.width / 2;
                const cardCenterY = cardRect.top + cardRect.height / 2;
                
                const mouseX = e.clientX;
                const mouseY = e.clientY;
                
                const offsetX = ((mouseX - cardCenterX) / cardRect.width) * 10;
                const offsetY = ((mouseY - cardCenterY) / cardRect.height) * 10;
                
                // Limita o movimento para evitar rotações extremas
                const maxOffset = 5;
                const limitedOffsetX = Math.max(-maxOffset, Math.min(maxOffset, offsetX));
                const limitedOffsetY = Math.max(-maxOffset, Math.min(maxOffset, offsetY));
                
                profileCard.style.transform = `perspective(1000px) rotateY(${-limitedOffsetX}deg) rotateX(${limitedOffsetY}deg) translateY(-10px)`;
            }
        });
        
        document.addEventListener('mouseleave', function() {
            profileCard.style.transform = 'translateY(-10px)';
        });
    }

    // Testimonials slider functionality
    const track = document.getElementById('testimonialsTrack');
    const items = track.querySelectorAll('.testimonial-item');
    const prevBtn = document.getElementById('testimonialPrev');
    const nextBtn = document.getElementById('testimonialNext');
    const dots = document.querySelectorAll('.testimonials-dots .dot');
    
    let currentIndex = 0;
    const totalItems = items.length;
    
    function goToSlide(index) {
        // Handle index bounds
        if (index < 0) index = totalItems - 1;
        if (index >= totalItems) index = 0;
        
        // Update currentIndex
        currentIndex = index;
        
        // Remove active class from all items and dots
        items.forEach(item => item.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current item and dot
        items[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }
    
    // Event listeners for buttons
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            goToSlide(currentIndex - 1);
        });
        
        nextBtn.addEventListener('click', () => {
            goToSlide(currentIndex + 1);
        });
    }
    
    // Event listeners for dots
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'));
            goToSlide(index);
        });
    });
    
    // Auto rotate testimonials
    let testimonialInterval = setInterval(() => {
        goToSlide(currentIndex + 1);
    }, 8000);
    
    // Pause auto rotation when hovering over testimonials
    track.addEventListener('mouseenter', () => {
        clearInterval(testimonialInterval);
    });
    
    // Resume auto rotation when mouse leaves
    track.addEventListener('mouseleave', () => {
        testimonialInterval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 8000);
    });
    
    // Reveal animations for testimonials section
    ScrollReveal().reveal('.testimonials-title', { 
        origin: 'top', 
        distance: '30px', 
        duration: 800, 
        delay: 200 
    });
    
    ScrollReveal().reveal('.testimonials-slider', { 
        origin: 'bottom', 
        distance: '30px', 
        duration: 1000, 
        delay: 400 
    });

    // FAQ accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('.faq-icon');
            
            // Toggle current item
            answer.classList.toggle('active');
            
            // Update icon
            if (answer.classList.contains('active')) {
                icon.textContent = '−';
            } else {
                icon.textContent = '+';
            }
            
            // Close other items (optional - comment out for multiple open items)
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    const otherAnswer = otherQuestion.nextElementSibling;
                    const otherIcon = otherQuestion.querySelector('.faq-icon');
                    
                    otherAnswer.classList.remove('active');
                    otherIcon.textContent = '+';
                }
            });
        });
    });

    // Reveal animations for FAQ section
    ScrollReveal().reveal('.faq-title, .faq-subtitle', { 
        origin: 'top', 
        distance: '30px', 
        duration: 800, 
        delay: 200 
    });

    ScrollReveal().reveal('.faq-left', { 
        origin: 'left', 
        distance: '50px', 
        duration: 1000, 
        delay: 300 
    });

    ScrollReveal().reveal('.faq-item', { 
        origin: 'right', 
        distance: '30px', 
        duration: 800, 
        interval: 150 
    });

    ScrollReveal().reveal('.saiba-mais', { 
        origin: 'bottom', 
        distance: '30px', 
        duration: 800, 
        delay: 400 
    });

    // Animação para o gráfico de crescimento
    const graphContainer = document.querySelector('.graph-container');
    
    if (graphContainer) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    graphContainer.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(graphContainer);
    }
    
    // Animação para os recursos potenciais
    const potentialFeatures = document.querySelectorAll('.potential-feature');
    
    potentialFeatures.forEach((feature, index) => {
        ScrollReveal().reveal(feature, {
            origin: 'left',
            distance: '50px',
            duration: 1000,
            delay: 200 + (index * 200),
            easing: 'cubic-bezier(0.5, 0, 0, 1)'
        });
    });
    
    // Animações para os elementos da seção de potencial
    ScrollReveal().reveal('.potential-title, .potential-subtitle', {
        origin: 'top',
        distance: '30px',
        duration: 1000,
        delay: 200
    });
    
    ScrollReveal().reveal('.graph-container', {
        origin: 'right',
        distance: '50px',
        duration: 1000,
        delay: 400
    });
    
    ScrollReveal().reveal('.audience-tags', {
        origin: 'right',
        distance: '50px',
        duration: 1000,
        delay: 600
    });
    
    ScrollReveal().reveal('.potential-cta', {
        origin: 'bottom',
        distance: '30px',
        duration: 1000,
        delay: 800
    });
    
    // Contador para o destaque de 90 dias
    const counterElement = document.querySelector('.highlight-counter');
    
    if (counterElement) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = 90;
                    const duration = 1500; // ms
                    let current = 0;
                    const step = Math.ceil(target / (duration / 16));
                    
                    function updateCounter() {
                        if (current < target) {
                            current += step;
                            if (current > target) current = target;
                            counterElement.textContent = current;
                            requestAnimationFrame(updateCounter);
                        }
                    }
                    
                    requestAnimationFrame(updateCounter);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(counterElement);
    }

    // Contact form WhatsApp functionality
    const contactForm = document.getElementById('contactForm');
    const sendToWhatsappButton = document.getElementById('sendToWhatsapp');
    
    if (contactForm && sendToWhatsappButton) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const company = document.getElementById('company').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const segment = document.getElementById('segment').value;
            const employees = document.getElementById('employees').value;
            const message = document.getElementById('message').value;
            
            // Format message for WhatsApp
            const whatsappMessage = 
                `*Contato via Site - Nexum Clube*%0A%0A` +
                `*Nome:* ${name}%0A` +
                `*Empresa:* ${company}%0A` +
                `*E-mail:* ${email}%0A` +
                `*Telefone:* ${phone}%0A` +
                `*Segmento:* ${segment}%0A` +
                `*Funcionários:* ${employees}%0A%0A` +
                `*Desafio atual:*%0A${message}`;
            
            // WhatsApp number - real number from the site
            const whatsappNumber = '5511939472579';
            
            // Create WhatsApp link
            const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;
            
            // Open WhatsApp in a new tab
            window.open(whatsappLink, '_blank');
        });
    }
    
    // Animations for contact section
    ScrollReveal().reveal('.contact-section .section-header', { 
        origin: 'top', 
        distance: '30px', 
        duration: 1000, 
        delay: 200 
    });
    
    ScrollReveal().reveal('.contact-form-container', { 
        origin: 'left', 
        distance: '50px', 
        duration: 1000, 
        delay: 400 
    });
    
    ScrollReveal().reveal('.contact-info', { 
        origin: 'right', 
        distance: '50px', 
        duration: 1000, 
        delay: 600 
    });
    
    // Form inputs highlight effect
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
}); 