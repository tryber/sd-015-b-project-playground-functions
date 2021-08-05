// Desafio 1
function compareTrue(valor1, valor2) {
  let resultado = valor1 === true && valor2 === true;
  return resultado
}

// Desafio 2
function calcArea(base, height) {
  let area = (base*height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}

// Desafio 4
function concatName(arrayNomes) {
  let primeiroNome = arrayNomes[0];
  let ultimoNome = arrayNomes[arrayNomes.length - 1];
  return ultimoNome + ', ' + primeiroNome;
}

// Desafio 5
function footballPoints(wins, ties) {
  let Points = (wins * 3) + (ties * 1);
  return Points;
}

// Desafio 6
function highestCount(arrayNum) {
  let maiorNum = Math.max.apply(null, arrayNum);
  let count = 0;

  for (let index=0; index < arrayNum.length; index +=1) {
    if (arrayNum[index] === maiorNum) {
      count++
    }
  }
  return count
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1position = Math.abs(mouse - cat1);
  let cat2position = Math.abs(mouse - cat2);
  
  if(cat1position < cat2position) {
    return 'cat1';
  } else if (cat2position < cat1position) {
    return 'cat2'
  } else {
    return 'os gatos trombam e o rato foge'
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
