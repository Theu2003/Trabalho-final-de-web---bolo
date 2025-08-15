// Adicionar dinamicamente ingredientes e passos
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar novo ingrediente
    document.getElementById('addIngredient')?.addEventListener('click', function() {
        const container = document.getElementById('ingredientsContainer');
        const newRow = document.createElement('div');
        newRow.className = 'ingredient-row';
        newRow.innerHTML = `
            <input type="text" name="ingredient[]" placeholder="Ex: 2 xícaras de farinha de trigo" required>
            <button type="button" class="btn btn-remove-ingredient">-</button>
        `;
        container.appendChild(newRow);
    });

    // Adicionar novo passo
    document.getElementById('addStep')?.addEventListener('click', function() {
        const container = document.getElementById('stepsContainer');
        const newRow = document.createElement('div');
        newRow.className = 'step-row';
        newRow.innerHTML = `
            <textarea name="step[]" placeholder="Descreva o passo a passo" required></textarea>
            <button type="button" class="btn btn-remove-step">-</button>
        `;
        container.appendChild(newRow);
    });

    // Remover ingrediente ou passo
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-remove-ingredient')) {
            e.target.parentElement.remove();
        }
        
        if (e.target.classList.contains('btn-remove-step')) {
            e.target.parentElement.remove();
        }
    });

    // Preview da imagem da receita
    document.getElementById('recipeImage')?.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                document.getElementById('recipePreview').src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Validação do formulário de receita
    const recipeForm = document.getElementById('addRecipeForm') || document.getElementById('editRecipeForm');
    recipeForm?.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validação básica - em um sistema real seria mais completo
        const ingredients = document.querySelectorAll('input[name="ingredient[]"]');
        const steps = document.querySelectorAll('textarea[name="step[]"]');
        
        if (ingredients.length === 0 || steps.length === 0) {
            alert('Adicione pelo menos um ingrediente e um passo de preparo!');
            return;
        }
        
        // Simulação de sucesso - em um sistema real seria uma chamada AJAX
        alert('Receita salva com sucesso!');
        window.location.href = 'listar.html';
    });

    // Exclusão de receita
    document.getElementById('deleteRecipe')?.addEventListener('click', function() {
        if (confirm('Tem certeza que deseja excluir esta receita?')) {
            // Simulação de exclusão - em um sistema real seria uma chamada AJAX
            alert('Receita excluída com sucesso!');
            window.location.href = 'listar.html';
        }
    });
});