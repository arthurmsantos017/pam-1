export function criarTelaLogin() {

    const app = document.getElementById("app");

    const login = document.createElement("div");
    login.className = "login";

    const titulo = document.createElement("h1");
    titulo.textContent = "Bem-vindo!";

    const texto = document.createElement("p");
    texto.textContent = "Entre na sua conta";

    const inputUsuario = document.createElement("input");
    inputUsuario.type = "text";
    inputUsuario.placeholder = "Usuário";

    const inputSenha = document.createElement("input");
    inputSenha.type = "password";
    inputSenha.placeholder = "Senha";

    const botao = document.createElement("button");
    botao.textContent = "Entrar";

    const mensagem = document.createElement("p");
    mensagem.className = "mensagem";

    login.appendChild(titulo);
    login.appendChild(texto);
    login.appendChild(inputUsuario);
    login.appendChild(inputSenha);
    login.appendChild(botao);
    login.appendChild(mensagem);

    app.appendChild(login);

    return {
        inputUsuario,
        inputSenha,
        botao,
        mensagem
    };
}
