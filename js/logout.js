document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('ano');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    initiateLogout();
});

function initiateLogout() {
    console.log('Iniciando processo de logout...');
    
    simulateServerLogout()
        .then(() => {
            clearLocalData();
            
            setTimeout(() => {
                window.location.href = "../index.html";
            }, 1500);
        })
        .catch(error => {
            console.error('Erro durante logout:', error);
            alert('Você foi desconectado, mas ocorreu um problema ao encerrar a sessão no servidor.');
            window.location.href = "../index.html";
        });
}

function simulateServerLogout() {
    return new Promise((resolve) => {
        const delay = 500 + Math.random() * 500;
        
        setTimeout(() => {
            console.log('Sessão invalidada no servidor');
            resolve();
        }, delay);
    });
}

function clearLocalData() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    localStorage.removeItem('lastActiveTime');
    
    sessionStorage.clear();
    
    document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    console.log('Dados locais de autenticação removidos');
}