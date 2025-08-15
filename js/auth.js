document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simulação de autenticação - em um sistema real, isso seria uma chamada a uma API
    if (username === 'admin' && password === 'admin123') {
        // Salva no localStorage que o usuário está autenticado
        localStorage.setItem('authenticated', 'true');
        
        // Redireciona para o dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Usuário ou senha incorretos!');
    }
});

// Verifica se o usuário está autenticado ao carregar páginas protegidas
function checkAuth() {
    if (window.location.pathname.includes('administrativo') && 
        !window.location.pathname.endsWith('login.html')) {
        
        const isAuthenticated = localStorage.getItem('authenticated') === 'true';
        
        if (!isAuthenticated) {
            window.location.href = 'login.html';
        }
    }
}

// Logout
if (document.getElementById('logout')) {
    document.getElementById('logout').addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('authenticated');
        window.location.href = 'login.html';
    });
}

// Executa a verificação quando a página carrega
window.addEventListener('DOMContentLoaded', checkAuth);