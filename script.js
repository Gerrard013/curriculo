// MENU MOBILE
document.addEventListener('DOMContentLoaded', function() {
    // Criar overlay para o menu
    const menuOverlay = document.createElement('div');
    menuOverlay.className = 'menu-overlay';
    document.body.appendChild(menuOverlay);
    
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('header nav ul');
    
    // Função para abrir/fechar menu
    function toggleMenu() {
        const isActive = navMenu.classList.contains('active');
        
        if (isActive) {
            // Fechar menu
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        } else {
            // Abrir menu
            navMenu.classList.add('active');
            menuToggle.classList.add('active');
            menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    // Event listeners para o menu
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', toggleMenu);
        menuOverlay.addEventListener('click', toggleMenu);
        
        // Fechar menu ao clicar em um link
        const navLinks = document.querySelectorAll('header nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    toggleMenu();
                }
            });
        });
        
        // Fechar menu ao redimensionar para desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                menuOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
});

// ROLAGEM SUAVE NO MENU
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute("href"));
        if (destino) {
            destino.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ANIMAÇÃO DE ENTRADA AO ROLAR (Scroll Reveal)
const sections = document.querySelectorAll("section");

function checarAnimacao() {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(sec => {
        const boxTop = sec.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            sec.classList.add("mostrar");
        }
    });
}

window.addEventListener("scroll", checarAnimacao);
checarAnimacao();

// LÓGICA DO DARK MODE
const themeBtn = document.getElementById('toggle-theme-btn');

function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    
    // Atualiza o ícone do botão
    const icon = themeBtn.querySelector('i');
    if (isDarkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

// Carrega a preferência do usuário ao carregar a página
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        const icon = themeBtn.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }
}

// Adiciona o listener ao botão
if (themeBtn) {
    themeBtn.addEventListener('click', toggleDarkMode);
}

// Carrega o tema quando o script inicia
loadTheme();
