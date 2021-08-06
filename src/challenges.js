// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(str) {
  let array = str.split(' ');
  return array;
}

// Desafio 4
function concatName(arr) {
  let concat = arr[arr.length - 1] + ', ' + arr[0];
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = wins * 3 + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(arr) {
  let maior = arr[0];
  let count = 0;

  for (let num of arr) {
    if (num > maior) {
      maior = num;
    }
  }
  for (let num of arr) {
    if (num === maior) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse (mouse, cat1, cat2) {

  let distanceCat1 = Math.abs(cat1 - mouse);
    let distanceCat2 = Math.abs(cat2 - mouse);
    if (distanceCat1 < distanceCat2) {
      return 'cat1';
    }
    else if (distanceCat2 < distanceCat1) {
      return 'cat2';
    }
    else if (distanceCat1 === distanceCat2){
      return 'os gatos trombam e o rato foge';
    }
  }


// Desafio 8
function fizzBuzz(arr){ 

  let newArr = [];

  for(let num of arr){
  
  if (num % 3 === 0 && num % 5 === 0) newArr.push ('fizzBuzz');
  else if(num % 3 === 0) newArr.push('fizz');
  else if (num % 5 === 0) newArr.push ('buzz');
  else newArr.push('bug!'); 
 
}
  return newArr;
}
// Desafio 9
function encode(str){

  let arr = str.split("");

  for (let i = 0; i < arr.length; i += 1){
    if (arr[i] === 'a') arr[i] = 1;
    else if (arr[i] === 'e') arr[i] = 2;
    else if (arr[i] === 'i') arr[i] = 3;
    else if (arr[i] === 'o') arr[i] = 4;
    else if (arr[i] === 'u') arr[i] = 5;
  }
  let arrCod = arr.join([""]);
  return arrCod
}

function decode(str){

  let arr = str.split("");

  for (let i = 0; i < arr.length; i += 1){
    if (arr[i] === '1') arr[i] = 'a';
    else if (arr[i] === '2') arr[i] = 'e';
    else if (arr[i] === '3') arr[i] = 'i';
    else if (arr[i] === '4') arr[i] = 'o';
    else if (arr[i] === '5') arr[i] = 'u';
  }
  let arrDecode = arr.join([""]);
return arrDecode
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
