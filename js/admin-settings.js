document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('ano').textContent = new Date().getFullYear();
    
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Configurações salvas com sucesso!');
        });
    });
    
    document.querySelector('.btn-test')?.addEventListener('click', function() {
        alert('Um e-mail de teste será enviado para o endereço configurado.');
    });
    
    document.querySelector('.btn-backup')?.addEventListener('click', function() {
        alert('Backup iniciado. Você receberá um aviso quando estiver concluído.');
    });
    
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