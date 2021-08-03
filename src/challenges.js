// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === param2 && param1 === false) {
    return false;
  }
  if (param1 !== param2) {
    return false;
  }
  if (param1 === param2 && param1 === true) {
    return true;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let separate = string.split(' ');
  return separate;
}

// Desafio 4
function concatName(array) {
  let primeiro = array[0];
  let ultimo = array[array.length - 1];
  let concat = ultimo.concat(', ', primeiro);

  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;

  return points;
}

// Desafio 6
function highestCount(array) {
  let maior = Math.max(...array);
  let count = 0;

  for (let i of array) {
    if (i === maior) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = cat1 - mouse;
  let distancia2 = cat2 - mouse;

  if (distancia1 < distancia2) {
    return 'cat1';
  } else if (distancia1 > distancia2) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}


console.log(catAndMouse(1, 7, 7));

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}

// Desafio 10
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
