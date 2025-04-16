<footer class="nexum-footer">
    <div class="footer-container">
        <div class="footer-top">
            <div class="footer-logo">
                <img src="assets/img/logo.svg" alt="Nexum Clube">
                <p>Profissionalizando empresas<br>para alcançar resultados excepcionais</p>
            </div>
            <div class="footer-contact">
                <h4>Entre em contato</h4>
                <p><i class="fas fa-envelope"></i> contato@nexumclube.com.br</p>
                <a href="https://api.whatsapp.com/send?phone=5511939472579&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!" target="_blank" class="footer-contact-link"><i class="fab fa-whatsapp"></i> (11) 93947-2579</a>
                <p><i class="fas fa-map-marker-alt"></i> São Paulo, SP</p>
            </div>
        </div>
        
        <div class="footer-middle">
            <div class="social-networks">
                <h4>Fique por dentro das redes sociais</h4>
                <div class="social-icons">
                    <a href="https://www.instagram.com/felipe_thalacker/" target="_blank" class="social-icon instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://linkedin.com/in/felipethalacker" target="_blank" class="social-icon linkedin">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.youtube.com/@felipethalacker6980" target="_blank" class="social-icon youtube">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p class="copyright">©️ 2024 COPYRIGHT – FELIPE THALACKER – TODOS OS DIREITOS RESERVADOS.</p>
            <p class="privacy-policy">Ao clicar em qualquer botão você concorda que os dados pessoais fornecidos serão utilizados para envio de conteúdo informativo, analítico e publicitário sobre produtos, serviços e assuntos gerais, nos termos da Lei Geral de Proteção de Dados.</p>
        </div>
    </div>
    
    <a href="https://api.whatsapp.com/send?phone=5511939472579&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!" target="_blank" id="whatsapp-float" class="whatsapp-float">
        <i class="fab fa-whatsapp"></i>
        <span class="whatsapp-tooltip">Fale com um especialista</span>
    </a>
    
    <a href="#" id="scroll-to-top" class="scroll-to-top">
        <i class="fas fa-chevron-up"></i>
    </a>
</footer>

<style>
.footer-contact-link {
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    margin-bottom: 10px;
    transition: color 0.3s ease;
}

.footer-contact-link:hover {
    color: #8a2be2;
}

.footer-contact-link i {
    margin-right: 10px;
    color: #8a2be2;
    font-size: 16px;
}

.scroll-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: #8a2be2;
    color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
}

.scroll-to-top.active {
    opacity: 1;
    visibility: visible;
}

.scroll-to-top:hover {
    background-color: #6a1ea5;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.scroll-to-top i {
    font-size: 18px;
}

.whatsapp-float {
    position: fixed;
    bottom: 100px;
    right: 30px;
    width: 60px;
    height: 60px;
    background-color: #25D366;
    color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    box-shadow: 0 5px 15px rgba(37, 211, 102, 0.3);
    z-index: 1000;
    transition: all 0.3s ease;
}

.whatsapp-float i {
    font-size: 30px;
}

.whatsapp-float:hover {
    transform: scale(1.05) translateY(-3px);
    box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
}

.whatsapp-float::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #25D366;
    z-index: -1;
    animation: pulse-whatsapp 2s infinite;
}

.whatsapp-tooltip {
    position: absolute;
    right: 75px;
    background-color: #333;
    color: #fff;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 14px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

.whatsapp-tooltip::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -5px;
    transform: translateY(-50%);
    border-width: 5px 0 5px 5px;
    border-style: solid;
    border-color: transparent transparent transparent #333;
}

.whatsapp-float:hover .whatsapp-tooltip {
    opacity: 1;
    visibility: visible;
    right: 70px;
}

@keyframes pulse-whatsapp {
    0% {
        transform: scale(1);
        opacity: 0.7;
    }
    70% {
        transform: scale(1.15);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 0;
    }
}

@media (max-width: 768px) {
    .scroll-to-top {
        width: 40px;
        height: 40px;
        bottom: 20px;
        right: 20px;
    }
    
    .scroll-to-top i {
        font-size: 16px;
    }
    
    .whatsapp-float {
        width: 50px;
        height: 50px;
        bottom: 80px;
        right: 20px;
    }
    
    .whatsapp-float i {
        font-size: 24px;
    }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('scroll-to-top');
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const body = document.body;
    
    // Funcionalidade de scroll to top
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopButton.classList.add('active');
        } else {
            scrollToTopButton.classList.remove('active');
        }
    });
    
    scrollToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Funcionalidade do menu hambúrguer
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            navToggle.classList.toggle('active');
            body.classList.toggle('menu-open');
        });
        
        // Fechar o menu ao clicar em um link
        const navLinks = document.querySelectorAll('.main-nav a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                mainNav.classList.remove('active');
                navToggle.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });
        
        // Fechar o menu ao clicar fora dele
        document.addEventListener('click', function(event) {
            const isClickInsideNav = mainNav.contains(event.target);
            const isClickOnToggle = navToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                navToggle.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
    }
});
</script> 