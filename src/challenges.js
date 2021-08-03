// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2)
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(array) {
  let index = array.length
  let list = array[index - 1] + ", " + array[0]
  return list
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3
  let empates = ties
  return (vitorias + empates)
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posicionCat1 = (mouse - cat1);
  let posicionCat2 = (mouse - cat2);
  let cat1Recalc = (posicionCat1**2)**(1/2)
  let cat2Recalc = (posicionCat2**2)**(1/2)

  if (cat1Recalc < cat2Recalc) {
    return "cat1";
  } else if (cat1Recalc > cat2Recalc){
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge"
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
