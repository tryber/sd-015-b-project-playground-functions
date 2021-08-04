// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let resultSentence;
  resultSentence = sentence.split(' ');
  return resultSentence;
}

// Desafio 4
function concatName(names) {
  return names[names.length - 1] + ', ' + names[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(number) {
  let highestNumber = number[0];
  let count = 0;
  for (let key in number) {
    if (highestNumber < number[key]) {
      highestNumber = number[key]
      count = 0;
    }
    if (highestNumber === number[key]) count++;     
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((Math.abs(mouse - cat1)) < (Math.abs(mouse - cat2))) return 'cat1';
  else if ((Math.abs(mouse - cat1)) === (Math.abs(mouse - cat2))) return 'os gatos trombam e o rato foge';
  return 'cat2';
}

// Desafio 8
function fizzBuzz(number) {
  let array = [];
  for(let key in number){
    if (((number[key] % 3) === 0) && ((number[key] % 5) === 0)) array[key] = 'fizzBuzz'
    else if ((number[key] % 3) === 0) array[key] = 'fizz';
    else if ((number[key] % 5) === 0) array[key] = 'buzz';
    else array[key] = 'bug!';
  }
  return array;  
}

// Desafio 9
function encode(str) {
  let encodeStr = str;
  encodeStr = encodeStr.replace(/a/g, 1);
  encodeStr = encodeStr.replace(/e/g, 2);
  encodeStr = encodeStr.replace(/i/g, 3);
  encodeStr = encodeStr.replace(/o/g, 4);
  encodeStr = encodeStr.replace(/u/g, 5);
  return encodeStr;
}

function decode(str) {
  let decodeStr = str;
  decodeStr = decodeStr.replace(/1/g, 'a');
  decodeStr = decodeStr.replace(/2/g, 'e');
  decodeStr = decodeStr.replace(/3/g, 'i');
  decodeStr = decodeStr.replace(/4/g, 'o');
  decodeStr = decodeStr.replace(/5/g, 'u');
  return decodeStr;
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
