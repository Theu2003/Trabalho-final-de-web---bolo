// JS/script.js

document.addEventListener('DOMContentLoaded', function() {

    // --- Funcionalidade Comum (Ano e Impressão) ---
    const anoElement = document.getElementById('ano');
    if (anoElement) {
        anoElement.textContent = new Date().getFullYear();
    }

    const printButton = document.getElementById('print-btn');
    if (printButton) {
        printButton.addEventListener('click', () => window.print());
    }

    // --- Lógica de Filtro e Busca (Apenas na página de receitas) ---
    const filterContainer = document.querySelector('.filter-controls');
    const searchInput = document.getElementById('search-input');
    const recipeGrid = document.getElementById('recipe-grid');
    const noResultsMessage = document.getElementById('no-results');

    if (filterContainer && recipeGrid && searchInput) {
        const recipeCards = recipeGrid.querySelectorAll('.recipe-card');

        // Função principal para atualizar a visualização das receitas
        const filterAndSearchRecipes = () => {
            const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
            const searchTerm = searchInput.value.toLowerCase();
            let visibleCount = 0;

            recipeCards.forEach(card => {
                const categories = card.dataset.category;
                const title = card.querySelector('h3').textContent.toLowerCase();
                
                const matchesFilter = activeFilter === 'all' || categories.includes(activeFilter);
                const matchesSearch = title.includes(searchTerm);

                if (matchesFilter && matchesSearch) {
                    card.style.display = 'flex';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            // Mostra ou esconde a mensagem de "nenhum resultado"
            noResultsMessage.style.display = visibleCount === 0 ? 'block' : 'none';
        };

        // Adiciona evento de clique aos botões de filtro
        filterContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('filter-btn')) {
                document.querySelector('.filter-btn.active').classList.remove('active');
                event.target.classList.add('active');
                filterAndSearchRecipes();
            }
        });

        // Adiciona evento de digitação ao campo de busca
        searchInput.addEventListener('input', filterAndSearchRecipes);
    }
    
    // --- Lógica do Botão "Voltar ao Topo" ---
    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});