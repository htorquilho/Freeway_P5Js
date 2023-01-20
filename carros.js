 //variáveis dos carros
// 'v' é a velocidade, 'c' é o comprimento e 'a' é a altura

let xCarros = [460, 460, 460, 460, 460, 460];
let yCarros = [45, 100, 154, 214, 274, 322];
let vCarros = [4, 2.5, 3.5, 5, 3.5, 4];
let cCarros = 32;
let aCarros = 32;

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], cCarros, aCarros);
  } 
}

function movimentoCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= vCarros[i];
  }
}

function voltaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    if(fimDaTela(xCarros[i])){
      xCarros[i] = 680;
    }
  }  
}

function fimDaTela(xCarros){
  return xCarros < - 50;
}