// Gerenciamento de confeiteiros
document.addEventListener('DOMContentLoaded', function() {
    // Preview da foto do confeiteiro
    document.getElementById('bakerPhoto')?.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                document.getElementById('photoPreview').src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Adicionar rede social
    document.getElementById('addSocial')?.addEventListener('click', function() {
        const container = document.querySelector('.social-inputs');
        const newRow = document.createElement('div');
        newRow.className = 'social-row';
        newRow.innerHTML = `
            <select name="socialType[]">
                <option value="instagram">Instagram</option>
                <option value="facebook">Facebook</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="website">Website</option>
            </select>
            <input type="text" name="socialUrl[]" placeholder="URL ou @">
            <button type="button" class="btn btn-remove-social">-</button>
        `;
        container.appendChild(newRow);
    });

    // Remover rede social
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-remove-social')) {
            e.target.parentElement.remove();
        }
    });

    // Validação do formulário de confeiteiro
    const bakerForm = document.getElementById('addBakerForm') || document.getElementById('editBakerForm');
    bakerForm?.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validação básica - em um sistema real seria mais completo
        const specialties = document.getElementById('bakerSpecialties');
        if (specialties.selectedOptions.length === 0) {
            alert('Selecione pelo menos uma especialidade!');
            return;
        }
        
        // Simulação de sucesso - em um sistema real seria uma chamada AJAX
        alert('Confeiteiro salvo com sucesso!');
        window.location.href = 'listar.html';
    });

    // Exclusão de confeiteiro
    document.getElementById('deleteBaker')?.addEventListener('click', function() {
        if (confirm('Tem certeza que deseja excluir este confeiteiro?')) {
            // Simulação de exclusão - em um sistema real seria uma chamada AJAX
            alert('Confeiteiro excluído com sucesso!');
            window.location.href = 'listar.html';
        }
    });
});