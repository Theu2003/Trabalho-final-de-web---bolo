// Simula um banco de dados usando localStorage e fornece dados de exemplo
function initDatabase() {
    if (!localStorage.getItem('boloNaHoraDB')) {
        console.log('Inicializando o banco de dados com dados de exemplo...');
        const sampleData = {
            confeiteiros: [
                { id: "1", businessName: "Bolos da Maria", name: "Maria da Silva", phone: "38999998888", instagram: "@bolosdamaria", bio: "Especialista em bolos de festa e casamentos.", status: "active", featured: true, photo: "../../images/confeiteiro1.jpg" },
                { id: "2", businessName: "João Confeitaria", name: "João Souza", phone: "38988887777", instagram: "@joaobolos", bio: "Os melhores bolos caseiros e de pote da região.", status: "active", featured: true, photo: "../../images/confeiteiro2.jpg" }
            ],
            receitas: [] // Você pode adicionar receitas de exemplo aqui também
        };
        localStorage.setItem('boloNaHoraDB', JSON.stringify(sampleData));
    }
}
initDatabase();