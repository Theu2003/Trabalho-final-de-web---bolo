document.addEventListener('DOMContentLoaded', function() {

    // --- Funcionalidade Comum (Ano no Rodapé) ---
    const anoElement = document.getElementById('ano');
    if (anoElement) {
        anoElement.textContent = new Date().getFullYear();
    }

    // --- Lógica de Filtro e Busca (Página de Receitas) ---
    const filterContainer = document.querySelector('.filter-controls');
    if (filterContainer) {
        // (Aqui entra a sua lógica de filtro de receitas, se necessário)
    }

    // --- Lógica para Carregar Confeiteiros na Página de Confeiteiros ---
    const confeiteirosGrid = document.getElementById('confeiteiros-grid');
    if (confeiteirosGrid) {
        const db = JSON.parse(localStorage.getItem('boloNaHoraDB'));
        const noBakersMessage = document.getElementById('no-bakers-message');

        if (db && db.confeiteiros && db.confeiteiros.length > 0) {
            const activeBakers = db.confeiteiros.filter(baker => baker.status === 'active');

            if (activeBakers.length > 0) {
                confeiteirosGrid.innerHTML = ''; // Limpa o container
                activeBakers.forEach(baker => {
                    // Corrige o caminho da imagem para a página pública
                    const imagePath = baker.photo.replace('../../', './');

                    // Prepara os links das redes sociais
                    let whatsappLink = '';
                    let instagramLink = '';

                    const whatsapp = baker.social.find(s => s.type === 'whatsapp');
                    const instagram = baker.social.find(s => s.type === 'instagram');

                    if (whatsapp) {
                        // Formata o número para o link do WhatsApp
                        const phone = whatsapp.url.replace(/\D/g, '');
                        whatsappLink = `<a href="https://wa.me/55${phone}" target="_blank">💬 WhatsApp</a>`;
                    }
                    if (instagram) {
                        // Formata o @ para o link do Instagram
                        const user = instagram.url.replace('@', '');
                        instagramLink = `<a href="https://instagram.com/${user}" target="_blank">📸 Instagram</a>`;
                    }

                    const cardHTML = `
                        <article class="confeiteiro-card">
                            <img src="${imagePath}" alt="Foto de ${baker.name}">
                            <div class="card-content">
                                <h3>${baker.businessName || baker.name}</h3>
                                <p>${baker.bio}</p>
                                <div class="confeiteiro-contato">
                                    ${whatsappLink}
                                    ${instagramLink}
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
        const db = JSON.parse(localStorage.getItem('boloNaHoraDB'));
        if (db && db.confeiteiros) {
            const featured = db.confeiteiros.filter(c => c.featured && c.status === 'active').slice(0, 2);
            confeiteirosDestaque.innerHTML = '';
            
            featured.forEach(baker => {
                 const imagePath = baker.photo.replace('../../', './');
                 const cardHTML = `
                    <article class="confeiteiro-card">
                        <img src="${imagePath}" alt="${baker.name}">
                        <div class="card-content">
                            <h3>${baker.businessName || baker.name}</h3>
                            <p>${baker.bio.substring(0, 70)}...</p>
                        </div>
                    </article>
                `;
                confeiteirosDestaque.innerHTML += cardHTML;
            });
        }
    }
});