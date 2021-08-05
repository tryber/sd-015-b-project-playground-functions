// Desafio 1
function compareTrue(a, b) {
  if (a && b === true) {
    return true;
  } 
  return false;
}

console.log(compateTrue(3,4))

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

  let array = [0, 4, 4, 4, 9, 2, 1]
  console.log(highestCount(array))

// Desafio 7
function catAndMouse() {
  
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
