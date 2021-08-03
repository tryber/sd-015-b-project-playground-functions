// Desafio 1
function compareTrue(par1,par2) {
  if (par1 === true && par2 === true){
    return true
  }
  else{
    return false
  }
}

// Desafio 2
function calcArea(base,height) {
  area = base*height/2
  return area
}

// Desafio 3
function splitSentence(str) {
  separaString =  str.split(" ")
  return separaString
}

// Desafio 4

function concatName(vetor) {
  let resultado = [];
  qun = vetor.length-1;
  for (let index = 0 ; index<=vetor.length-1;index+=1){
    if (index === 0){
      resultado.push(vetor[index])
    }
    else if (index === vetor.length-1 ){
      resultado.push(vetor[index])
    }
  }
  return resultado
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
