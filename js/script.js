document.addEventListener('DOMContentLoaded', function() {

    // --- Funcionalidade Comum (Ano no Rodapé) ---
    const anoElement = document.getElementById('ano');
    if (anoElement) {
        anoElement.textContent = new Date().getFullYear();
    }
    
    // Tenta carregar o banco de dados do localStorage
    let boloNaHoraDB = null;
    try {
        boloNaHoraDB = JSON.parse(localStorage.getItem('boloNaHoraDB'));
    } catch (e) {
        console.error("Erro ao carregar o banco de dados local:", e);
    }

    // --- Lógica de Filtro e Busca (Página de Receitas) ---
    const filterContainer = document.querySelector('.filter-controls');
    const searchInput = document.getElementById('search-input');
    const recipeGrid = document.getElementById('recipe-grid');
    const noResultsMessageRecipes = document.getElementById('no-results');

    if (filterContainer && searchInput && recipeGrid) {
        const recipeCards = recipeGrid.querySelectorAll('.recipe-card');

        const filterAndSearchRecipes = () => {
            const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
            const searchTerm = searchInput.value.toLowerCase();
            let visibleCount = 0;

            recipeCards.forEach(card => {
                const categories = card.dataset.category || '';
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

            if (noResultsMessageRecipes) {
                noResultsMessageRecipes.style.display = visibleCount === 0 ? 'block' : 'none';
            }
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

    // --- Lógica para Carregar Confeiteiros na Página de Confeiteiros ---
    const confeiteirosGrid = document.getElementById('confeiteiros-grid');
    if (confeiteirosGrid) {
        const noBakersMessage = document.getElementById('no-bakers-message');

        if (boloNaHoraDB && boloNaHoraDB.confeiteiros && boloNaHoraDB.confeiteiros.length > 0) {
            const activeBakers = boloNaHoraDB.confeiteiros.filter(baker => baker.status === 'active');

            if (activeBakers.length > 0) {
                confeiteirosGrid.innerHTML = ''; // Limpa o container
                activeBakers.forEach(baker => {
                    const imagePath = baker.photo ? baker.photo.replace('../../', './') : 'images/default-avatar.jpg';
                    let socialLinks = '';

                    if (baker.social && baker.social.length > 0) {
                        const whatsapp = baker.social.find(s => s.type === 'whatsapp');
                        const instagram = baker.social.find(s => s.type === 'instagram');

                        if (whatsapp && whatsapp.url) {
                            const phone = whatsapp.url.replace(/\D/g, '');
                            socialLinks += `<a href="https://wa.me/55${phone}" target="_blank">💬 WhatsApp</a>`;
                        }
                        if (instagram && instagram.url) {
                            const user = instagram.url.replace('@', '');
                            socialLinks += `<a href="https://instagram.com/${user}" target="_blank">📸 Instagram</a>`;
                        }
                    }

                    const cardHTML = `
                        <article class="confeiteiro-card">
                            <img src="${imagePath}" alt="Foto de ${baker.name}">
                            <div class="card-content">
                                <h3>${baker.businessName || baker.name}</h3>
                                <p>${baker.bio || 'Confeiteiro(a) especialista em bolos deliciosos.'}</p>
                                <div class="confeiteiro-contato">
                                    ${socialLinks || '<p>Contato não disponível</p>'}
                                </div>
                            </div>
                        </article>
                    `;
                    confeiteirosGrid.innerHTML += cardHTML;
                });
            } else {
                noBakersMessage.style.display = 'block';
            }
        } else {
            noBakersMessage.style.display = 'block';
        }
    }

    // --- Lógica para Carregar Confeiteiros em Destaque na Homepage ---
    const confeiteirosDestaque = document.getElementById('confeiteiros-destaque');
    if (confeiteirosDestaque) {
        if (boloNaHoraDB && boloNaHoraDB.confeiteiros) {
            const featured = boloNaHoraDB.confeiteiros.filter(c => c.featured && c.status === 'active').slice(0, 2);
            confeiteirosDestaque.innerHTML = '';
            
            featured.forEach(baker => {
                 const imagePath = baker.photo ? baker.photo.replace('../../', './') : 'images/default-avatar.jpg';
                 const cardHTML = `
                    <article class="confeiteiro-card">
                        <img src="${imagePath}" alt="${baker.name}">
                        <div class="card-content">
                            <h3>${baker.businessName || baker.name}</h3>
                            <p>${(baker.bio || '').substring(0, 70)}...</p>
                        </div>
                    </article>
                `;
                confeiteirosDestaque.innerHTML += cardHTML;
            });
        }
    }
});