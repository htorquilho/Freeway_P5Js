function setup() {
  createCanvas(680, 400);
  trilhaSonora.loop();
}

function draw() {
  background(imagemEstrada);
  mostraCarro();
  movimentoCarro();
  voltaCarro();
  mostraPersonagem();
  movimentaPersonagem();
  verificaColisao();
  mostraPontos();
  marcaPonto();
}