//lista de perguntas 
const questoes = [
  {
    pergunta: "1 insira a pergunta aqui",
    opcoes: ["opc1","opc2","opc3"],
    certa: 1 //segunda opção 
  },
  {
    pergunta: "2 insira a pergunta aqui",
    opcoes: ["opc4","opc5","opc6"],
    certa: 0 //primeira opção 
  }
];
//variável guardando, o número da questão.
let questao = 0
function perguntar() {
  //pega o elemento pergunta 
  const encontrar_pergunta = document.getElementById("pergunta");
  //troca o texto 
  encontrar_pergunta.innerText = questoes[questao].pergunta;
  //encontra os botões 
  const botoes = document.querySelectorAll(".botao");
  //altera os botões para a sua respectiva opção 
  alterar_botoes(botoes);
}
function alterar_botoes(botoes) {
  botoes[0].innerText = questoes[questao].opcoes[0]
  botoes[1].innerText = questoes[questao].opcoes[1]
  botoes[2].innerText = questoes[questao].opcoes[2]
}
perguntar();