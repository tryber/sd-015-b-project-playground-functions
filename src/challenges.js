// Desafio 1
function compareTrue(a,b) {
  if (a && b === true){
    return true;
  }else{
    return false
  }
}
// Desafio 2
function calcArea(base,heigh) {
  areaTriangulo = (base * heigh) / 2;

  return areaTriangulo
}

// Desafio 3
function splitSentence(string) {
  let stringDividida = string.split(' ');

return stringDividida;
}



// Desafio 4
function concatName(array) {
  let primeiroValor = array[0]
  let ultimoValor = array[array.length-1]
  let stringConcatenada = ultimoValor + ", " + primeiroValor;

return stringConcatenada;
}

// Desafio 5
function footballPoints(wins,ties) {
  let winPoints = wins * 3;
  let tiePoints = ties * 1;
  let totalPoints = winPoints + tiePoints;

return totalPoints;
}


// Desafio 6
function highestCount(array) {
  let maiorValor = 0;
  let contador = 0;
  
  for (let i = 0; i < array.length  ; i+=1){
    if(array[i] > maiorValor){
      maiorValor = array[i];
    }
  }

  for (let j = 0; j < array.length  ; j+=1){
      if(array[j] === maiorValor){
        contador += 1;
      }
  }

 return contador;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

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
