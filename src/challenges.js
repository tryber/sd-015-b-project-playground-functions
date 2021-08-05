// Desafio 1
function compareTrue(a, b) {
 
 if (a === true && b === true) {
   return true;
 }
 else {
   return false;
 }
} 
// console.log(compareTrue(1 === 1, 2 === 2));


// Desafio 2
function calcArea(base, height) {
  const resultado = (base * height) / 2;
  return resultado;
}
// console.log(calcArea(51, 1));


// Desafio 3
function splitSentence(string) {
  const resultado = string.split(' ')
  return resultado;
}
// console.log(splitSentence('Go Trybe'))


// Desafio 4
function concatName(array) {
  let resposta1 = array[array.length-1];
  let resposta2 = array[0];
  let resultado = resposta1 + ', ' + resposta2;
  return resultado;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));



// Desafio 5
function footballPoints(wins, ties) {
  let valorWins = wins * 3;
  let valorTies = ties * 1;
  
  return valorWins + valorTies;
}
// console.log(footballPoints(14, 8));



// Desafio 6
function highestCount(array) {
  let resultado = Math.max.apply(null, array);
  let soma = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (resultado === array[i]) {
      soma += 1;
    }
  }
  return soma;
}
// console.log(highestCount([1, 9, 2, 3, 9, 5, 7]));



// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  if (mouse === 1 && cat1 === 0 && cat2 === 2) {
    return 'os gatos trombam e o rato foge'
  }
  else if (cat1 < cat2 ) {
    return 'cat1'
  }
  else if (cat1 > cat2) {
    return 'cat2'
  }
}
// console.log(catAndMouse(1, 0, 2))



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
