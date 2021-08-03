// Desafio 1
function compareTrue(a,b) {
  if (a && b){
    return true;
  }
  else{
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  return (base * height)/2; 
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(" ");
}

// Desafio 4
function concatName(names) {
  lastElement = names.pop();
  firstElement = names.shift();
  finalString = lastElement + ", " + firstElement;
  return finalString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = numbers[0]
  let repeatingTimes = 0;
  for (let index in numbers){
    if (numbers[index] > highestNumber){
      highestNumber = numbers[index]
    }
  }
  for (let index in numbers){
    if (highestNumber === numbers[index]){
      repeatingTimes += 1;
    }
  } 
  return repeatingTimes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = cat1 - mouse;
  let distance2 = cat2 - mouse;

  if (Math.abs(distance1) > Math.abs(distance2)){
    return "cat2";
  }
  else if (Math.abs(distance1) < Math.abs(distance2)){
    return "cat1";
  }
  else{
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let finalString = [];
  for(let index in numbers){
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0){
      finalString.push("fizzBuzz");
    }
    else if(numbers[index] % 3 === 0){
      finalString.push("fizz");
    }
    else if(numbers[index] % 5 ===0){
      finalString.push("buzz");
    }
    else{
      finalString.push("bug!");
    }

  }
  return finalString;
}

// Desafio 9
function encode(string) {
  let encryptedString = "";
  for (let index in string){
    switch (string[index]){
      case "a":
        encryptedString= encryptedString.concat("1");
        break;
      case "e":
        encryptedString = encryptedString.concat("2");
        break;
      case "i":
        encryptedString = encryptedString.concat("3");
        break;
      case "o":
        encryptedString = encryptedString.concat("4");
        break;
      case "u":
        encryptedString = encryptedString.concat("5");
        break;
      default:
        encryptedString = encryptedString.concat(string[index]);
        break;
    } 
  }
  return encryptedString;
}
  
    
function decode(string) {
  let decryptedString = "";
  for (let index in string){
    switch (string[index]){
      case "1":
        decryptedString= decryptedString.concat("a");
        break;
      case "2":
        decryptedString = decryptedString.concat("e");
        break;
      case "3":
        decryptedString = decryptedString.concat("i");
        break;
      case "4":
        decryptedString = decryptedString.concat("o");
        break;
      case "5":
        decryptedString = decryptedString.concat("u");
        break;
      default:
        decryptedString = decryptedString.concat(string[index]);
        break;
    } 
  }
  return decryptedString;
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
