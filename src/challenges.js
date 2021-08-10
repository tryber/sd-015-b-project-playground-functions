// Desafio 1
// check
function compareTrue(a, b) {
  return a === true && b === true;
}
console.log(compareTrue(true, true));
// Desafio 2
// check
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(10, 50));

// Desafio 3
// check
function splitSentence(string) {
  return string.split(' ');
} console.log(splitSentence('turma trybecat!'));

// Desafio 4
// check
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}
console.log('last and first: ', concatName(['Lucas', 'cassiano', 'ferraz', 'Paolillo']));

// Desafio 5
// check
function footballPoints(wins, ties) {
  let ganha = 3;
  let resultado = (wins * ganha) + ties;
  return resultado;
}
// Desafio 6
function highestCount(arrayNumeros) {
  let higher = -999999;
  let times2 = 0;
  for (let count = 0; count <= times.length; count += 1) {
    if(times[count] > higher) higher = times[count];
}

// Desafio 7
// check
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 - mouse === cat2 - mouse || cat2 - mouse === (cat1 - mouse) * -1) {
    return 'os gatos trombam e o rato foge';
  } if (cat1 - mouse < cat2 - mouse) {
    return 'cat1';
  } return 'cat2';
}

// Desafio 8
// eslint-disable-next-line complexity
function fizzBuzz(arrayAntigo) {
  let novaArray = [];
  for (let index = 0; index < arrayAntigo.length; index += 1) {
    if (arrayAntigo[index] % 3 === 0 && arrayAntigo[index] % 5 === 0) {
      novaArray.push('fizzBuzz');
    } else if (arrayAntigo[index] % 3 === 0) {
      novaArray.push('fizz');
    } else if (arrayAntigo[index] % 5 === 0) {
      novaArray.push('buzz');
    } else {
      novaArray.push('bug!');
    }
  }
  return novaArray;
}

// Desafio 9
function encode(str) {
  str = str.split("");
  for(let count = 0; count <= str.length; count += 1){
    if(str[count] === 'a'){
      str[count] = '1';
    } else if(str[count] === 'e'){
      str[count] = '2';
    } else if(str[count] === 'i'){
      str[count] = '3';
    } else if(str[count] === 'o'){
      str[count] = '4';
    } else if(str[count] === 'u'){
      str[count] = '5';
    }
  }
  str = str.join('');
  return str;
}
function decode(str) {
  str = str.split("");
  for(let count = 0; count <= str.length; count += 1){
    if(str[count] === '1'){
      str[count] = 'a';
    } else if(str[count] === '2'){
      str[count] = 'e';
    } else if(str[count] === '3'){
      str[count] = 'i';
    } else if(str[count] === '4'){
      str[count] = 'o';
    } else if(str[count] === '5'){
      str[count] = 'u';
    }
  }
  str = str.join('');
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
