
const API_URL = 'https://countries.dev';

export async function buscarPais(nome) {
    if (!nome || !nome.trim()) {
        throw new Error('Digite o nome de um país!');
    }

    try {
        const resposta = await fetch(
            `${API_URL}/search?name=${encodeURIComponent(nome.trim())}`
        );

        if (!resposta.ok) {
            throw new Error('Não foi possível encontrar o país.');
        }

        const dados = await resposta.json();

        if (!dados || (Array.isArray(dados) && dados.length === 0)) {
            throw new Error('País não encontrado!');
        }

        return Array.isArray(dados) ? dados[0] : dados;

    } catch (erro) {
        console.error(erro);
        throw erro;
    }
}
