// Desafio 1
function compareTrue(a, b) {
  if (a && b === true) {
    return true;
  } 
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let AreaTri;
  AreaTri = (base * height) / 2;
  return AreaTri;
}

// Desafio 3
function splitSentence(a) {
  let string = a;
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let ultimo = array[array.length - 1];
  let primeiro = array[0];
  let arr = [];
  let space = ' ';
  arr.unshift(ultimo);
  arr.push(space.concat(primeiro));
  return arr + '';
}

// Desafio 5
function footballPoints(wins, ties) {
  let NumVit = 3;
  let NumEmp = 1;
  let QtdPontos;
  QtdPontos = wins * NumVit + ties * NumEmp;
  return QtdPontos;
}

// Desafio 6
function highestCount(array) {
  let contRept = 0;
  array.sort(function (a, b) {return a - b;})
  for (let index in array) {
    if (array[index] === array[array.length - 1]) {
      contRept+=1;
    }
  }
  return contRept;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result; 
  let posiRato = mouse;
  let posiGato1 = cat1 - posiRato;
  let posiGato2 = cat2 - posiRato;
  resuAbs1 = Math.abs(posiGato1)
  resuAbs2 = Math.abs(posiGato2)
  if(resuAbs1 === resuAbs2) {
    result = "os gatos trombam e o rato foge";
  } else if (resuAbs1 > resuAbs2) {
    result = "cat2";
  } else {
    result = "cat1";
  }
  return result; 
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
