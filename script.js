const correto = new Audio('correto.mp3')
const errado = new Audio('errado.mp3')

function certo() {
  correto.currentTime = 0;
  correto.play();
}
function incorreto() {
  errado.currentTime = 0;
  errado.play();
}