document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('ano').textContent = new Date().getFullYear();
    
    document.getElementById('add-ingredient').addEventListener('click', function() {
        const container = document.getElementById('ingredients-container');
        const count = container.querySelectorAll('.ingredient-group').length + 1;
        
        const newIngredient = document.createElement('div');
        newIngredient.className = 'ingredient-group';
        newIngredient.innerHTML = `
            <div class="form-row">
                <div class="form-group" style="flex: 3;">
                    <label>Ingrediente <span class="required">*</span></label>
                    <input type="text" name="ingredient[]" required placeholder="Ex: Farinha de trigo">
                </div>
                <div class="form-group" style="flex: 1;">
                    <label>Quantidade</label>
                    <input type="text" name="quantity[]" placeholder="Ex: 2 xícaras">
                </div>
                <div class="form-group" style="flex: 0 0 40px; align-self: flex-end;">
                    <button type="button" class="btn btn-remove" onclick="removeIngredient(this)" style="width: 100%;">-</button>
                </div>
            </div>
        `;
        
        container.appendChild(newIngredient);
    });
    
    document.getElementById('add-instruction').addEventListener('click', function() {
        const container = document.getElementById('instructions-container');
        const count = container.querySelectorAll('.instruction-group').length + 1;
        
        const newInstruction = document.createElement('div');
        newInstruction.className = 'instruction-group';
        newInstruction.innerHTML = `
            <div class="form-row">
                <div class="form-group" style="flex: 1;">
                    <label>Passo ${count}</label>
                    <textarea name="instruction[]" required placeholder="Descreva cada passo detalhadamente"></textarea>
                </div>
                <div class="form-group" style="flex: 0 0 40px; align-self: flex-end;">
                    <button type="button" class="btn btn-remove" onclick="removeInstruction(this)" style="width: 100%;">-</button>
                </div>
            </div>
        `;
        
        container.appendChild(newInstruction);
    });
    
    document.getElementById('recipeForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const title = document.getElementById('recipe-title').value;
        const category = document.getElementById('recipe-category').value;
        const description = document.getElementById('recipe-description').value;
        
        if (!title || !category || !description) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        alert('Receita salva com sucesso!');
        window.location.href = 'gerenciar-receitas.html';
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

function removeIngredient(button) {
    const container = document.getElementById('ingredients-container');
    if (container.querySelectorAll('.ingredient-group').length > 1) {
        button.closest('.ingredient-group').remove();
    } else {
        alert('Uma receita deve ter pelo menos um ingrediente.');
    }
}

function removeInstruction(button) {
    const container = document.getElementById('instructions-container');
    if (container.querySelectorAll('.instruction-group').length > 1) {
        button.closest('.instruction-group').remove();
        
        const steps = container.querySelectorAll('.instruction-group');
        steps.forEach((step, index) => {
            step.querySelector('label').textContent = `Passo ${index + 1}`;
        });
    } else {
        alert('Uma receita deve ter pelo menos um passo de preparo.');
    }
}