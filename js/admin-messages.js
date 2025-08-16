document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('ano').textContent = new Date().getFullYear();
    
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelector('.filter-btn.active').classList.remove('active');
            this.classList.add('active');
            filterMessages(this.getAttribute('data-filter'));
        });
    });
    
    document.querySelectorAll('.btn-mark-read, .btn-mark-unread, .btn-archive, .btn-unarchive, .btn-delete').forEach(button => {
        button.addEventListener('click', function() {
            const messageId = this.getAttribute('data-id');
            const action = this.classList.contains('btn-mark-read') ? 'read' :
                          this.classList.contains('btn-mark-unread') ? 'unread' :
                          this.classList.contains('btn-archive') ? 'archive' :
                          this.classList.contains('btn-unarchive') ? 'unarchive' : 'delete';
            
            handleMessageAction(messageId, action);
        });
    });
    
    document.querySelector('.btn-search').addEventListener('click', function() {
        const searchTerm = document.getElementById('message-search').value;
        searchMessages(searchTerm);
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

function filterMessages(filter) {
    console.log(`Filtrando mensagens por: ${filter}`);
}

function handleMessageAction(id, action) {
    console.log(`Ação ${action} na mensagem #${id}`);
    
    alert(`Mensagem #${id} ${getActionText(action)} com sucesso!`);
    
    const messageCard = document.querySelector(`[data-id="${id}"]`).closest('.message-card');
    
    switch(action) {
        case 'read':
            messageCard.classList.remove('unread');
            messageCard.classList.add('read');
            break;
        case 'unread':
            messageCard.classList.remove('read');
            messageCard.classList.add('unread');
            break;
        case 'archive':
            messageCard.classList.add('archived');
            break;
        case 'unarchive':
            messageCard.classList.remove('archived');
            break;
        case 'delete':
            messageCard.remove();
            break;
    }
}

function getActionText(action) {
    const actions = {
        'read': 'marcada como lida',
        'unread': 'marcada como não lida',
        'archive': 'arquivada',
        'unarchive': 'desarquivada',
        'delete': 'excluída'
    };
    return actions[action] || 'processada';
}

function searchMessages(term) {
    console.log(`Buscando mensagens por: ${term}`);
}