// Desafio 1
function compareTrue(valorA, valorB) {
  if (valorA===true && valorB === true) {
    return true
    } else {
    return false
    }
}
//console.log(compareTrue( 1===1, 2===2))


// Desafio 2
function calcArea(base , height) {
  
    let area = ((base * height)/2);
    return area; 
}
//console.log(calcArea(10, 50));


// Desafio 3
function splitSentence(frase) {
  let palavras = frase;
  return palavras.split(' ');
}
//console.log(splitSentence("vamo que vamo"));
// Desafio 4
function concatName() {
  // seu código aqui
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
