//Imagens e sons do jogo

//variáveis das imagens
let imagemEstrada;
let imagemPersonagem;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

//sons do jogo
let trilhaSonora;
let colidiu;
let ponto;

function preload(){
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemPersonagem = loadImage("imagens/ator-1.png");
  imagemCarro1 = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
  
  trilhaSonora = loadSound("sons/trilha.mp3");
  colidiu = loadSound("sons/colidiu.mp3");
  ponto = loadSound("sons/pontos.wav");
}


