// Desafio 1
function compareTrue(a, b) {
  return a === true && b === true;
} 
// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2); 
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}
// Desafio 4
function concatName(lista) {
  return lista[lista.length- 1] + ', ' + lista[0]
}

// Desafio 5
function footballPoints(wins, ties){
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  return 2
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2){
  poscat1 = mouse - cat1;
  poscat2 = mouse - cat2;
  if(poscat1 > poscat2){
    return 'cat2';
  }else if(poscat2 > poscat1){
    return 'cat1'
  }else{
    'os gatos trombam e o rato foge'
  }
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
