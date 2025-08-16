document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('ano').textContent = new Date().getFullYear();
    
    const loginForm = document.getElementById('loginForm');
    const loginFeedback = document.getElementById('loginFeedback');
    
    const savedEmail = localStorage.getItem('savedEmail');
    const rememberMe = document.getElementById('remember');
    
    if (savedEmail) {
        document.getElementById('email').value = savedEmail;
        rememberMe.checked = true;
    }
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (validateLogin(email, password)) {
            if (rememberMe.checked) {
                localStorage.setItem('savedEmail', email);
            } else {
                localStorage.removeItem('savedEmail');
            }
            
            showFeedback('Login realizado com sucesso! Redirecionando...', 'success');
            
            setTimeout(() => {
                window.location.href = 'adm.html';
            }, 1500);
        } else {
            showFeedback('E-mail ou senha incorretos. Tente novamente.', 'error');
        }
    });
    
    function validateLogin(email, password) {
        const validCredentials = [
            { email: 'admin@receitasdebolo.com', password: 'bolo123' },
            { email: 'chef@receitasdebolo.com', password: 'sweetcake' }
        ];
        
        return validCredentials.some(cred => 
            cred.email === email && cred.password === password
        );
    }
    
    function showFeedback(message, type) {
        loginFeedback.textContent = message;
        loginFeedback.className = 'login-feedback ' + type;
        
        setTimeout(() => {
            loginFeedback.textContent = '';
            loginFeedback.className = 'login-feedback';
        }, 5000);
    }
    
    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top-btn';
    backToTopButton.innerHTML = '↑';
    backToTopButton.setAttribute('aria-label', 'Voltar ao topo');
    document.body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});