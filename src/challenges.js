// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(true, false))

// Desafio 2
function calcArea(base, height) {
  let area = ((base * height) / 2);
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let resultado = frase.split(' ');
  return resultado;
}

// Desafio 4
function concatName(array) {
  let concat = `${array[array.length - 1]}, ${array[0]}`;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = ((wins * 3) + ties);
  return points;
}

// Desafio 6
function highestCount(array) {
  let cont = 0;
  array.sort();
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === array[array.length - 1]) {
      cont += 1;
    }
  }
  return cont;
}

//console.log(highestCount([-2, -2, -1]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1win = 'cat1';
  let cat2win = 'cat2';
  let mousewin = 'os gatos trombam e o rato foge';
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return cat1win;
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return cat2win;
  } else {
    return mousewin;
  }
}

// Desafio 8
function fizzBuzz(a) {
  let resultado = [];
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] % 3 === 0 && a[i] % 5 === 0) {
      resultado.push('fizzBuzz');
    } 
    else if (a[i] % 3 === 0) {
      resultado.push('fizz');
    } 
    else if (a[i] % 5 === 0) {
      resultado.push('buzz')
    } 
    else {
      resultado.push('bug!')
    }
  }
  return resultado;
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
