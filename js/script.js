document.addEventListener('DOMContentLoaded', function() {

    const anoElement = document.getElementById('ano');
    if (anoElement) {
        anoElement.textContent = new Date().getFullYear();
    }

    const printButton = document.getElementById('print-btn');
    if (printButton) {
        printButton.addEventListener('click', () => window.print());
    }

    const filterContainer = document.querySelector('.filter-controls');
    const searchInput = document.getElementById('search-input');
    const recipeGrid = document.getElementById('recipe-grid');
    const noResultsMessage = document.getElementById('no-results');

    if (filterContainer && recipeGrid && searchInput) {
        const recipeCards = recipeGrid.querySelectorAll('.recipe-card');

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

            noResultsMessage.style.display = visibleCount === 0 ? 'block' : 'none';
        };

        filterContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('filter-btn')) {
                document.querySelector('.filter-btn.active').classList.remove('active');
                event.target.classList.add('active');
                filterAndSearchRecipes();
            }
        });

        searchInput.addEventListener('input', filterAndSearchRecipes);
    }
    
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