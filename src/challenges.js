// Desafio 1
let value = false;
function compareTrue(n1, n2) {
  if (n1 && n2 === true) {
    value = true;
    return value;
  } else if (n1 && n2 !== true) {
    return value;
  }
  else 
 {
    value = false;
    return value;
  }
}
console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  let valor = base * height / 2;
  return valor;
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(frase) {
  frase = frase.split(' ');
  return frase;
}
console.log(splitSentence('sempre é assim'));

// Desafio 4
function concatName(palavras) {
  for (let index = 0; index <= palavras.length; index += 1) {
    for (let contador = palavras.length - 1; contador >= 0; contador -= 1) {
      let firstStringLetter = palavras[index];
      let lastStringLetter = palavras[contador];
      return lastStringLetter + ', ' + firstStringLetter;
    }
  }  
}
console.log(concatName(['Axe', 'is', 'more', 'rules']));

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3;
  let empate = ties * 1;
  return vitoria + empate;
}
console.log(footballPoints(14, 8))

// Desafio 6

function highestCount(arrayNumbers) {

  let res = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
   let maior = Math.max.apply(null, arrayNumbers ); 
   if (arrayNumbers[index] === maior )
   res++ ;  
  }
  return res;
}
  console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 - mouse === cat2 - mouse || cat2 - mouse === (cat1 - mouse) * -1){
    return 'os gatos trombam e o rato foge';
  } if (cat1 - mouse < cat2 - mouse){
    return 'cat1';
  } return 'cat2';
}
console.log(catAndMouse(2, 1, 3))

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayString = [];
  for (var index = 0; index < arrayNumbers.length; index += 1)
   {
     if (arrayNumbers[index] % 15 === 0){
        arrayString.push('fizzBuzz');
      }
      if (arrayNumbers[index] / 3 === 1 || arrayNumbers[index] / 3 === 3 ){
        arrayString.push('fizz');
        }
      if (arrayNumbers[index] / 5 === 1 || arrayNumbers[index] / 5 === 5 ){
        arrayString.push('buzz');
        }
      if (arrayNumbers[index] % 3 !== 0 && arrayNumbers[index] % 5 !== 0){
        arrayString.push('bug!');
        }
    }
  return arrayString;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))

// Desafio 9
function encode(string) {
  let res = 0;
  lyricsArray = ["a","e","i","o","u"]
  numberArray = [1,2,3,4,5]
  for (let index = 0; index < string.length; index += 1){
  if ( string[index] = lyricsArray[0]){
    res = string.replace(/a/g, numberArray[0]);
    }
  else if (string[index] = lyricsArray[1]){
    res = string.replace(/e/g, numberArray[1]);
    }
  else if ( string[index] === lyricsArray[2]){
    res = string.replace(/i/g, numberArray[2]);
    }
  else if ( string[index] === lyricsArray[3]){
    res = string.replace(/o/g, numberArray[3]);
    }
  else if ( string[index] === lyricsArray[4]){
      res = string.replace(/u/g, numberArray[4]);
      }
  }
  return res;
  }
function decode(palavra) {
  let res = palavra.replace(/2/g, "e");
  return res;
}
console.log(encode("abacate mexirica urubu ovo"));
console.log(decode("h3 th2r2!"))

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
