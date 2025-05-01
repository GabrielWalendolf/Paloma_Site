// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');

// Verifica o tema salvo no localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    icon.classList.replace('fa-moon', 'fa-sun');
}

// Alternar tema
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Alternar entre login e cadastro
    const loginTab = document.getElementById('login-tab');
    const signupTab = document.getElementById('signup-tab');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const switchToLogin = document.getElementById('switch-to-login');

    loginTab.addEventListener('click', function(e) {
        e.preventDefault();
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
    });

    signupTab.addEventListener('click', function(e) {
        e.preventDefault();
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
    });

    switchToLogin.addEventListener('click', function(e) {
        e.preventDefault();
        loginTab.click();
    });

    // Validação de formulários
    const forms = document.querySelectorAll('.auth-form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Processando...';
            
            // Simulação de envio
            setTimeout(() => {
                submitBtn.textContent = this.id === 'login-form' ? 'Entrar' : 'Criar Conta';
                submitBtn.disabled = false;
                
                // Mostrar mensagem de sucesso
                alert(this.id === 'login-form' 
                    ? 'Login realizado com sucesso! Redirecionando...' 
                    : 'Cadastro concluído! Verifique seu e-mail.');
                
                // Redirecionar após login
                if (this.id === 'login-form') {
                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 1000);
                }
            }, 1500);
        });
    });

    // Verificar se há parâmetro de cadastro na URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('signup') === 'true') {
        signupTab.click();
    }
});
