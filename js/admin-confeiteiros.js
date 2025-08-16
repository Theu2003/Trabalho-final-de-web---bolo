document.addEventListener('DOMContentLoaded', function() {
    // Atualiza o ano no rodapé
    const anoElement = document.getElementById('ano');
    if (anoElement) anoElement.textContent = new Date().getFullYear();

    // --- BANCO DE DADOS SIMULADO (localStorage) ---
    let confeiteirosDB = JSON.parse(localStorage.getItem('confeiteirosDB')) || [];

    const saveToDB = () => {
        localStorage.setItem('confeiteirosDB', JSON.stringify(confeiteirosDB));
    };

    // --- LÓGICA DE CADA PÁGINA ---
    const pagePath = window.location.pathname;

    if (pagePath.includes('listar.html')) {
        renderBakersTable();
    } else if (pagePath.includes('adicionar.html') || pagePath.includes('editar.html')) {
        setupForm();
    }

    // --- FUNÇÕES DA PÁGINA DE LISTAGEM ---
    function renderBakersTable() {
        const tableBody = document.getElementById('bakers-table-body');
        if (!tableBody) return;
        
        tableBody.innerHTML = ''; 

        if (confeiteirosDB.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="5" style="text-align:center;">Nenhum confeiteiro cadastrado. <a href="adicionar.html">Adicionar o primeiro?</a></td></tr>';
            return;
        }

        confeiteirosDB.forEach(baker => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${baker.businessName}</td>
                <td>${baker.name}</td>
                <td><span class="status ${baker.status}">${baker.status === 'active' ? 'Ativo' : 'Inativo'}</span></td>
                <td>
                    <a href="editar.html?id=${baker.id}" class="btn btn-edit">Editar</a>
                    <button class="btn btn-delete" data-id="${baker.id}">Excluir</button>
                </td>
            `;
            tableBody.appendChild(row);
        });

        document.querySelectorAll('.btn-delete').forEach(button => {
            button.addEventListener('click', (e) => {
                const bakerId = e.target.dataset.id;
                if (confirm('Tem certeza que deseja excluir este confeiteiro?')) {
                    confeiteirosDB = confeiteirosDB.filter(b => b.id != bakerId);
                    saveToDB();
                    renderBakersTable();
                }
            });
        });
    }

    // --- FUNÇÕES DAS PÁGINAS DE ADICIONAR/EDITAR ---
    function setupForm() {
        const form = document.getElementById('baker-form');
        if (!form) return;

        const params = new URLSearchParams(window.location.search);
        const bakerId = params.get('id');
        const isEditing = !!bakerId;

        if (isEditing) {
            const baker = confeiteirosDB.find(b => b.id == bakerId);
            if (baker) {
                // Preenche o formulário com dados existentes
                document.getElementById('businessName').value = baker.businessName;
                document.getElementById('name').value = baker.name;
                document.getElementById('phone').value = baker.phone;
                document.getElementById('instagram').value = baker.instagram || '';
                document.getElementById('bio').value = baker.bio;
                document.getElementById('status').value = baker.status;
                document.getElementById('featured').value = baker.featured;
            }
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const bakerData = {
                id: isEditing ? bakerId : Date.now().toString(),
                businessName: document.getElementById('businessName').value,
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                instagram: document.getElementById('instagram').value,
                bio: document.getElementById('bio').value,
                status: document.getElementById('status').value,
                featured: document.getElementById('featured').value === 'true',
                photo: '../../images/default-avatar.jpg' // Simulação de foto
            };

            if (isEditing) {
                const index = confeiteirosDB.findIndex(b => b.id == bakerId);
                confeiteirosDB[index] = bakerData;
            } else {
                confeiteirosDB.push(bakerData);
            }

            saveToDB();
            alert('Confeiteiro salvo com sucesso!');
            window.location.href = 'listar.html';
        });
    }
});