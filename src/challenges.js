// Desafio 1
function compareTrue(vl1, vl2) {
  if (vl1 && vl2){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return 0.5*base*height;
}

// Desafio 3
function splitSentence(str) {
  let charConv = [];
  charConv = str.split(' ');
  return charConv;
}

var sentense = ['David', 'Alexandre', 'Souza'];
console.log(sentense.length)
// Desafio 4
function concatName(sentense) {
  let arr = sentense;
  let strConc;
  let position = arr.length - 1;
  strConc = sentense[position] + ', ' + sentense[0];
  return strConc;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins*3 + ties*1;
}

// Desafio 6
function highestCount(numbers) {
  let arrNumbers = numbers;
  let maxNumber = arrNumbers[0];
  let cont=0;
  for (let i = 1; i < arrNumbers.length; i +=1) {
    if (arrNumbers[i] > maxNumber){
      maxNumber = arrNumbers[i];
    }
  }
  for (let i=0; i < arrNumbers.length; i += 1){
    if (arrNumbers[i] == maxNumber) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posCat1 = Math.abs(cat1 - mouse);
  let posCat2 = Math.abs(cat2 - mouse);

  if (posCat1 > posCat2){
    return "cat2";
  } else if (posCat1 < posCat2){
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge";
  }
  }


// Desafio 8
function fizzBuzz(number) {
  let arrNumbers = number;
  let arrResult = [];

  for (let i = 0; i < arrNumbers.length; i += 1){
    if (arrNumbers[i]%3 == 0 && arrNumbers[i]%5 != 0){
      arrResult.push("fizz");
    } else if ((arrNumbers[i]%3 != 0) && (arrNumbers[i]%5 == 0)) {
      arrResult.push("buzz");
    } else if(arrNumbers[i]%3 == 0 && arrNumbers[i]%5 == 0) {
      arrResult.push("fizzBuzz");
    } else {
      arrResult.push("bug!");
    }
  }
  return arrResult;
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
