// ROLAGEM SUAVE NO MENU
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute("href"));
    destino.scrollIntoView({
      behavior: "smooth"
    });
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
      localStorage.setItem('theme', 'dark'); // Salva a preferência
  } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
      localStorage.setItem('theme', 'light'); // Salva a preferência
  }
}

// Carrega a preferência do usuário ao carregar a página
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      // Atualiza o ícone ao carregar
      const icon = themeBtn.querySelector('i');
      // Garante que o ícone de Sol (fa-sun) apareça
      if (icon) {
          icon.classList.remove('fa-moon');
          icon.classList.add('fa-sun');
      }
  }
}

// Adiciona o listener ao botão
themeBtn.addEventListener('click', toggleDarkMode);

// Carrega o tema quando o script inicia
loadTheme();