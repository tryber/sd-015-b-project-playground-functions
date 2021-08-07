// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(s) {
  return s.split(' ');
}

// Desafio 4
function concatName(nome) {
  let tamanho = nome.length;
  return `${nome[tamanho - 1]}, ${nome[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
function highestCount() {
  // refatorar...
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(Math.abs(mouse) - Math.abs(cat1)) < Math.abs(Math.abs(mouse) - Math.abs(cat2))) {
    return 'cat1';
  }
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(numeros) {
  let ar = [];
  for (let i of numeros) {
    if (i % 3 === 0 && i % 5 === 0) {
      ar.push('fizzBuzz');
    } else if (i % 3 === 0) {
      ar.push('fizz');
    } else if (i % 5 === 0) {
      ar.push('buzz');
    } else {
      ar.push('bug!');
    }
  }
  return ar;
}

// Desafio 9
function encodeMudaBusca(indice) {
  let ar = 'aeiou';
  return ar[indice];
}

function encode(s) {
  let cont = 1;
  let str = s;
  for (let i = 0; i < 6; i += 1) {
    let letra = encodeMudaBusca(i);
    for (let k = 0; k < s.length; k += 1) {
      if (letra === s[k]) {
        str = str.replace(letra, cont);
      }
    }
    cont += 1;
  }
  return str;
}

function decodeMudaBusca(index) {
  let ar = '12345';
  return ar[index];
}

function decode(s) {
  let str = s;
  for (let i = 0; i < 6; i += 1) {
    let numero = decodeMudaBusca(i);
    for (let k = 0; k < s.length; k += 1) {
      if (numero === s[k]) {
        str = str.replace(numero, encodeMudaBusca(i));
      }
    }
  }
  return str;
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
