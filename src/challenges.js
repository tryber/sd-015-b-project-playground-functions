// Desafio 1
function compareTrue(x, y) {
  return x && y;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  wordArray = frase.split(' ');
  return wordArray;
}

// Desafio 4
function concatName(nomes) {
  if (nomes.length > 2){ 
  return nomes[3] + ',' + ' ' + nomes[0];
} else {
  return nomes[2] + ',' + ' ' + nomes[0];
}
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(cat1 - mouse > cat2 - mouse){
    return 'cat2';
  } else if(mouse - cat1 < cat2 - mouse){
    return 'cat1';
  } else if(cat1 + mouse === cat2 - mouse){
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  const fizzBuzz = [];
  for (let index of array) {
    if (index % 5 === 0 && index % 3 === 0){
      fizzBuzz.push('fizzBuzz');
    } else if (index % 3 === 0){
      fizzBuzz.push('fizz');
    } else if (index % 5 === 0){
      fizzBuzz.push('buzz')
    } else {
      fizzBuzz.push('bug!');
    }
  }
  return fizzBuzz;
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
  splitSentence,}
