// Desafio 1
function compareTrue(argument1, argument2) {
  // seu código aqui
  if (argument1 === true && argument2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  return sentence.split(' ');
}

// Desafio 4
function concatName(stringArray) {
  // seu código aqui
  return stringArray[stringArray.length - 1] + ', ' + stringArray[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(numberList) {
  // seu código aqui
  let highestNumber = numberList[0];
  let sum = 0;

  for (let index = 0; index < numberList.length; index += 1) {
    if (numberList[index] > highestNumber) {
      highestNumber = numberList[index];
    }
  }
  for (let index = 0; index < numberList.length; index += 1) {
    if (numberList[index] === highestNumber) {
      sum += 1;
    }
  }
  return sum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distance1 = Math.abs(cat1 - mouse);
  let distance2 = Math.abs(cat2 - mouse);

  if (distance1 > distance2) {
    return 'cat2';
  } else if (distance2 > distance1) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(number) {
  // seu código aqui
  let valor = [];
  for (let index = 0; index < number.length; index++){
    if (number[index] % 3 === 0){
      valor.push("fizz");
    } else if (number[index] % 5 === 0){
      valor.push("buzz");
    } else if (number[index] % 3 === 0 && number[index] % 5 === 0){
      valor.push("fizzBuzz");
    } else{
      valor.push("bug!");
    }
  }
  return valor;
}

// Desafio 9
function encode(phraseOne) {
  // seu código aqui
  let newPhrase = "";  
  for (let index = 0; index <phraseOne.length; index += 1) {
    if (phraseOne[index] === "a") {
      newPhrase += "1";
    } else if (phraseOne[index] === "e") {
      newPhrase += "2";
    } else if (phraseOne[index] === "i") {
      newPhrase += "3";
    } else if (phraseOne[index] === "o") {
      newPhrase += "4";
    } else if (phraseOne[index] === "u") {
      newPhrase += "5";
    } else {
      newPhrase += phraseOne[index];
    } 
  } return newPhrase;

} 

function decode(phrase2) {
  // seu código aqui
  let newPhrase2 = "";  
  for (let index = 0; index <phrase2.length; index += 1) {
    if (phrase2[index] === "1") {
      newPhrase2 += "a";
    } else if (phrase2[index] === "2") {
      newPhrase2 += "e";
    } else if (phrase2[index] === "3") {
      newPhrase2 += "i";
    } else if (phrase2[index] === "4") {
      newPhrase2 += "o";
    } else if (phrase2[index] === "5") {
      newPhrase2 += "u";
    } else {
      newPhrase2 += phrase2[index];
    } 
  } return newPhrase2;
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
