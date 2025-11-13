// Rolagem suave ao clicar nos links do menu (apenas para links internos na mesma página)
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Verifica se o link começa com # e não é um link para uma página externa (como projetos.html)
        if (this.getAttribute('href').length > 1) { 
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Lógica para o Tema Claro/Escuro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verifica a preferência do usuário ou o tema salvo ao carregar a página
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Ícone do sol para modo claro
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Altera o ícone e salva a preferência
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
});