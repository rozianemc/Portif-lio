console.log("Olá! Roziane, O JavaScript está fucionando");

const nome = "Roziane";
let hora = new Date().getHours();
console.log(hora);

let saudacao;
if (hora < 12) {
    saudacao = "Bom Dia";
} else if (hora < 18) {
    saudacao = "Boa Tarde";
} else {
    saudacao = "Boa Noite";
}
console.log(saudacao);

const titulo = document.querySelector("h1");
titulo.textContent = saudacao + ", eu sou a " + nome;

const botao = document.querySelector("#tema");
botao.addEventListener("click", function () {
    document.body.classList.toggle("escuro");
    if(document.body.classList.contains("escuro")){
        botao.textContent = "Modo claro";
    } else{
        botao.textContent = "Modo escuro";
    }
});