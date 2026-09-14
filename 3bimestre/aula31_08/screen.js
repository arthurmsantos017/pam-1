export function criarTelaLogin() {

    const app = document.getElementById("app");

    // Caixa principal
    const login = document.createElement("div");
    login.className = "login";

    // Título
    const titulo = document.createElement("h1");
    titulo.textContent = "Bem-vindo!";

    // Texto
    const texto = document.createElement("p");
    texto.textContent = "Entre na sua conta";

    // INPUT DO USUÁRIO
    const inputUsuario = document.createElement("input");
    inputUsuario.type = "text";
    inputUsuario.placeholder = "Usuário";

    // INPUT DA SENHA
    const inputSenha = document.createElement("input");
    inputSenha.type = "password";
    inputSenha.placeholder = "Senha";

    // Botão
    const botao = document.createElement("button");
    botao.textContent = "Entrar";

    // Mensagem
    const mensagem = document.createElement("p");
    mensagem.className = "mensagem";

    // Montando a tela
    login.appendChild(titulo);
    login.appendChild(texto);
    login.appendChild(inputUsuario);
    login.appendChild(inputSenha);
    login.appendChild(botao);
    login.appendChild(mensagem);

    app.appendChild(login);

    // Retornamos os elementos para o app.js
    return {
        inputUsuario,
        inputSenha,
        botao,
        mensagem
    };
}