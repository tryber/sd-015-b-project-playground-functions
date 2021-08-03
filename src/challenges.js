// Desafio 1
function compareTrue(v1, v2) {
  if (v1 && v2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
  // Função .split foi encontrada buscando "how to split sentences in js?"
// e dentro da função '.split()' se coloca a condição para a separação, no caso, o espaço.
  }

// Desafio 4
function concatName(arrayStr) {
  lastItem = arrayStr[arrayStr.length - 1];
  firstItem = arrayStr[0];
  return (lastItem + ", " + firstItem);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins*3) + (ties*1));
}


// Desafio 6
function highestCount(arrayNum) {
  let highestNumber = arrayNum[0];
  let counter = [];
  //definindo maior numero
  for (let i = 0; i < arrayNum.length; i++){
    let number = arrayNum[i];
    
    if (number >= highestNumber) {
      highestNumber = number; 
    }
  }
  //contando maior numero
  for (let j = 0; j < arrayNum.length; j++){
    if ( highestNumber === arrayNum[j]){
      counter.push(highestNumber);
    }
  }
  return counter.length;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return("cat1");
  } else if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return("cat2");
  } else if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)){
    return("os gatos trombam e o rato foge");
  }
} 

// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  let newArrayFizzBuzz = [];
  for (i = 0; i < arrayFizzBuzz.length; i++){
    if (arrayFizzBuzz[i] % 3 === 0 && arrayFizzBuzz[i] % 5 != 0) {
      newArrayFizzBuzz.push("fizz");
    } else if (arrayFizzBuzz[i] % 5 === 0 && arrayFizzBuzz[i] % 3 != 0) {
      newArrayFizzBuzz.push("buzz");
    } else if (arrayFizzBuzz[i] % 3 === 0 && arrayFizzBuzz[i] % 5 === 0) {
      newArrayFizzBuzz.push("fizzBuzz");
    } else {
      newArrayFizzBuzz.push("bug!");
    }
  } return newArrayFizzBuzz;
}

// Desafio 9
function encode(string) {
  // converter a string em array
  let arrayString = string.split('');
  let enCode = [];
  let enCoded = "";
  for (i = 0; i < arrayString.length; i++){
    
    if (arrayString[i] === 'a') {
      enCode.push("1");
    } else if (arrayString[i] === 'e') {
      enCode.push("2");
    } else if (arrayString[i] === 'i') {
     enCode.push("3"); 
    } else if (arrayString[i] === 'o') {
      enCode.push("4");
    } else if (arrayString[i] === 'u') {
      enCode.push("5");
    } else {
      enCode.push(arrayString[i]);
    }
  }
  // pegar a array e joga-la como string
  for (j = 0; j < enCode.length; j ++) {
    enCoded = enCoded + enCode[j];
  } return enCoded;

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
