//variáveis do personagem
let yPersonagem = 368;
let xPersonagem = 100;
let colisao = false;
let meusPontos = 0;

function mostraPersonagem(){
  image(imagemPersonagem, xPersonagem, yPersonagem, 26, 26);
}

function movimentaPersonagem(){
  if(keyIsDown(UP_ARROW)){
    yPersonagem -= 2;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yPersonagem += 2;
    }
  } 
  if(keyIsDown(LEFT_ARROW)){
    xPersonagem -= 2;
  }
  if(keyIsDown(RIGHT_ARROW)){
    xPersonagem += 2;
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], cCarros, aCarros, xPersonagem, yPersonagem, 13)
    if (colisao){
      voltaPersonagem();
      colidiu.play();
      if (pontosPositivos()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaPersonagem(){
  yPersonagem = 368;
}

function mostraPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 26);
}

function marcaPonto(){
  if (yPersonagem < 15){
    meusPontos += 1;
    ponto.play();
    voltaPersonagem();
  }
}

function pontosPositivos(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yPersonagem < 368;
}