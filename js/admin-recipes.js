document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('ano').textContent = new Date().getFullYear();
    
    const searchInput = document.getElementById('recipe-search');
    const categoryFilter = document.getElementById('category-filter');
    const sortBy = document.getElementById('sort-by');
    
    [searchInput, categoryFilter, sortBy].forEach(element => {
        element.addEventListener('change', filterRecipes);
    });
    
    document.querySelectorAll('.btn-delete').forEach(button => {
        button.addEventListener('click', function() {
            const recipeId = this.getAttribute('data-id');
            deleteRecipe(recipeId);
        });
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

function filterRecipes() {
    console.log('Filtrando receitas...');
}

function deleteRecipe(id) {
    if (confirm(`Tem certeza que deseja excluir a receita #${id}? Esta ação não pode ser desfeita.`)) {
        console.log(`Excluindo receita #${id}...`);
        alert(`Receita #${id} excluída com sucesso!`);
    }
}