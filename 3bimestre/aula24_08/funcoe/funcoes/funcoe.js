// funcoes.js

const usuarioCorreto = "admin";
const senhaCorreta = "123456";

// Cria a tela
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial";
document.body.style.background = "#f2f2f2";

const tela = document.createElement("div");

tela.style.width = "300px";
tela.style.margin = "100px auto";
tela.style.padding = "30px";
tela.style.background = "white";
tela.style.borderRadius = "10px";
tela.style.boxShadow = "0 0 10px #aaa";

document.body.appendChild(tela);

// Título
const titulo = document.createElement("h1");
titulo.innerText = "Login";
tela.appendChild(titulo);

// Usuário
const usuario = document.createElement("input");
usuario.placeholder = "Usuário";
usuario.style.width = "100%";
usuario.style.padding = "10px";
usuario.style.marginBottom = "10px";
tela.appendChild(usuario);

// Senha
const senha = document.createElement("input");
senha.type = "password";
senha.placeholder = "Senha";
senha.style.width = "100%";
senha.style.padding = "10px";
senha.style.marginBottom = "10px";
tela.appendChild(senha);

// Botão
const botao = document.createElement("button");
botao.innerText = "Entrar";
botao.style.width = "100%";
botao.style.padding = "10px";
tela.appendChild(botao);

// Mensagem
const mensagem = document.createElement("p");
tela.appendChild(mensagem);

// Função de login
botao.onclick = function () {

    if (
        usuario.value === usuarioCorreto &&
        senha.value === senhaCorreta
    ) {
        mensagem.innerText = "Login realizado com sucesso!";
        mensagem.style.color = "green";
    } else {
        mensagem.innerText = "Usuário ou senha incorretos!";
        mensagem.style.color = "red";
    }
};