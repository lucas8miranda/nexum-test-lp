<header class="nexum-header">
    <div class="header-container">
        <div class="logo">
            <a href="/">
                <img src="assets/img/logo.svg" alt="Nexum Clube">
            </a>
        </div>
        <nav class="main-nav">
            <ul>
                <li><a href="#" class="nav-link">Home</a></li>
                <li><a href="#benefits" class="nav-link">Benefícios</a></li>
                <li><a href="#palestrante" class="nav-link">Mentor</a></li>
                <li><a href="#metodologia" class="nav-link">Metodologia</a></li>
                <li><a href="#credenciais" class="nav-link">Credenciais</a></li>
                <li><a href="#depoimentos" class="nav-link">Depoimentos</a></li>
                <li><a href="#potencial" class="nav-link">Resultados</a></li>
                <li><a href="#contato" class="nav-link">Contato</a></li>
            </ul>
        </nav>
        <div class="nav-toggle" id="navToggle">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</header>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Controle do menu mobile
        const navToggle = document.getElementById('navToggle');
        const mainNav = document.querySelector('.main-nav');
        
        if (navToggle && mainNav) {
            navToggle.addEventListener('click', function() {
                mainNav.classList.toggle('active');
                navToggle.classList.toggle('active');
                document.body.classList.toggle('menu-open');
            });
            
            // Fechar menu ao clicar em links
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mainNav.classList.remove('active');
                    navToggle.classList.remove('active');
                    document.body.classList.remove('menu-open');
                });
            });
        }
    });
</script> 