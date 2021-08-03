// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  return sentence.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return array[(array.length) - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maior = array[0];
  let contador = 0;
  for (let key in array) {
    if (maior < array[key]) {
      maior = array[key];
    }
  }
  for (let key in array) {
    if (maior === array[key]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distMouseCat1 = mouse - cat1;
  let distMouseCat2 = mouse - cat2;
	if (distMouseCat1 < 0) {
		distMouseCat1 *= (-1);
	}
	if (distMouseCat2 < 0) {
		distMouseCat2 *= (-1);
	}
  if (distMouseCat1 === distMouseCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (distMouseCat1 < distMouseCat2) {
    return 'cat1';
  } else {
    return 'cat2';
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
