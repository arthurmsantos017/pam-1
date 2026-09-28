import { criarTelaLogin } from "./screen.js";

const tela = criarTelaLogin();

tela.botao.addEventListener("click", function () {

    const usuario = tela.inputUsuario.value;
    const senha = tela.inputSenha.value;

    if (usuario === "" || senha === "") {

        tela.mensagem.textContent =
            "Preencha usuário e senha!";

        return;
    }

    if (usuario === "admin" && senha === "1234") {

        tela.mensagem.textContent =
            "Login realizado com sucesso! ✅";

    } else {

        tela.mensagem.textContent =
            "Usuário ou senha incorretos! ❌";
    }
});
