// Desafio 1
function compareTrue(a, b) {
  return a === true && b === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(50, 10));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
console.log(splitSentence('Vamos que vamos!'));

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}
let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(array));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}
console.log(footballPoints(10, 3));

// Desafio 6
function highestCount(arrayNumbers) {
 /*  let orderArray = arrayNumbers.sort();
  console.log(orderArray);
  let highestNumber = orderArray[orderArray.length - 1];
  let contador = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === highestNumber){
      contador += 1;
    } 
  }
  return contador; */
  let maiorNumero = Number.NEGATIVE_INFINITY;
  for(let i = 0; i < arrayNumbers.length; i += 1) {
    if(maiorNumero < arrayNumbers[i]){
      maiorNumero = arrayNumbers[i];
    }
  }
  let contador = 0;
  for(let i = 0; i <arrayNumbers.length; i += 1) {
    if (maiorNumero == arrayNumbers[i]){
      contador += 1;
    }
  }
  return contador;
}
console.log(highestCount([-2, -1, -2]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2,) {
  let distancia1 = Math.abs(cat1 - mouse);
  let distancia2 = Math.abs(cat2 - mouse);
  if (distancia1 > distancia2){
    return 'cat2';
  }
  else if (distancia1 < distancia2){
    return 'cat1' ;
  } 
  else{
    return 'os gatos trombam e o rato foge' ;
  }}
  console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(numbersArray) {
  let resposta = "'[";
  for (let index = 0; index < numbersArray.length; index += 1) {
    if ((numbersArray[index] % 3) === 0 && (numbersArray[index] % 5) != 0) {
      resposta = resposta + '"fizz", ';
    }
    else if ((numbersArray[index] % 5) === 0 && (numbersArray[index] % 3) != 0) {
      resposta = resposta + '"buzz", ';
    }
    else if ((numbersArray[index] % 5) === 0 && (numbersArray[index] % 3) === 0) {
      resposta = resposta + '"fizzBuzz", ';
    }
    else {
      resposta = resposta + '"bug!", ';
    }
  }
  resposta = resposta + "]'"
  resposta = resposta.replace(", ]'", "]'")
  return resposta
}
console.log(fizzBuzz([45, 15, 5, 2]));

// Desafio 9
function encode(texto) {
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
}

