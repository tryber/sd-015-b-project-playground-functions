// Desafio 1
function compareTrue(bool, bool2) {
  // seu código aqui
  if(bool && bool2 === true){
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(100));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let result = (base * height) / 2;
  return result;
}

console.log(calcArea(5, 2))

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let result = [];
  let splitedWords = "";
  for(letters = 0; letters < string.length; letters += 1){
    if(string[letters] === " "){
      result.push(splitedWords);
      splitedWords = "";
    }
    splitedWords += string[letters];
    if(string[letters] === " "){
      splitedWords = ""
    }
  }
  result.push(splitedWords);
  return result;
}

console.log(splitSentence("foguete"));

// Desafio 4
function concatName(array) {
  // seu código aqui
  let result = array[array.length - 1] + ", " + array[0];
  return result;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let result = wins * 3 + ties;
  return result;
}

console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let higherNumber = array[0];
  let repetitionCount = 0;
  for(let arrayLoop = 0; arrayLoop < array.length; arrayLoop += 1){
    if(array[arrayLoop] > higherNumber){
      higherNumber = array[arrayLoop];
  }
  }
  for(let numberRepeat = 0; numberRepeat < array.length; numberRepeat += 1){
    if (higherNumber === array[numberRepeat]){
        repetitionCount += 1;
    }
}
  console.log(higherNumber);
  console.log(repetitionCount);
  return repetitionCount
}

highestCount([0, 0, 0]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1Distance = (Math.abs(mouse) - Math.abs(cat1));
  let cat2Distance = (Math.abs(mouse) - Math.abs(cat2));
  if(Math.abs(cat1Distance) < Math.abs(cat2Distance)){
    return "cat1"
  } else if (Math.abs(cat2Distance) < Math.abs(cat1Distance)){
    return "cat2"
  }else {
    return "os gatos trombam e o rato foge"
  }
}

console.log(catAndMouse(10, 12, 8));

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let result = [];
  for(arrayLoop = 0; arrayLoop < array.length; arrayLoop += 1){
    if(array[arrayLoop] % 3 === 0 && array[arrayLoop] % 5 === 0){
      result.push("fizzBuzz");
    } else if(array[arrayLoop] % 5 === 0){
      result.push("buzz");
    } else if(array[arrayLoop] % 3 === 0){
      result.push("fizz");
    } else {
      result.push("bug!");
    }
  }
  return result;
}

console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(string) {
  // seu código aqui
  let encoded = "";
  for(let letterLoop = 0; letterLoop < string.length; letterLoop += 1){
    if(string[letterLoop] === "a"){
      encoded += "1";
    } else if(string[letterLoop] === "e"){
      encoded += "2";
    } else if(string[letterLoop] === "i"){
      encoded += "3";
    } else if(string[letterLoop] === "o"){
      encoded += "4";
    } else if(string[letterLoop] === "u"){
      encoded += "5";
    } else {
      encoded += string[letterLoop]
    }
  }
  return encoded;
}

console.log(encode("hi there!"));

function decode(string) {
  // seu código aqui
  let decoded = "";
  for(let letterLoop = 0; letterLoop < string.length; letterLoop += 1){
    if(string[letterLoop] === "1"){
      decoded += "a";
    } else if(string[letterLoop] === "2"){
      decoded += "e";
    } else if(string[letterLoop] === "3"){
      decoded += "i";
    } else if(string[letterLoop] === "4"){
      decoded += "o";
    } else if(string[letterLoop] === "5"){
      decoded += "u";
    } else {
      decoded += string[letterLoop]
    }
  }
  return decoded;
}

console.log(decode("h3 th2r2!"));

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
