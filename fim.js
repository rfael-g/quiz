//dando nome a eles
let fimAc = localStorage.getItem("totalA");
let fimEr = localStorage.getItem("totalE");

//transferindo a página 
document.getElementById('acertos').textContent = fimAc;
document.getElementById('erros').textContent = fimEr;
function tocar_p() {
  const parabens = new Audio("parabens.mp3");
  parabens.currentTime = 0;
  parabens.play();
}
tocar_p();