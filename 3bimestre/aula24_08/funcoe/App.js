import { criarTelaLogin } from "./screen.js";

const tela = criarTelaLogin();

tela.botao.addEventListener("click", function() {

    // PEGANDO O QUE FOI DIGITADO NOS INPUTS
    const usuario = tela.inputUsuario.value;
    const senha = tela.inputSenha.value;

    // Verificando os campos
    if (usuario === "" || senha === "") {

        tela.mensagem.textContent =
            "Preencha usuário e senha!";

        return;
    }

    // Login de exemplo
    if (usuario === "admin" && senha === "1234") {

        tela.mensagem.textContent =
            "Login realizado com sucesso! ✅";

    } else {

        tela.mensagem.textContent =
            "Usuário ou senha incorretos! ❌";
    }
});
