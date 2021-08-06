// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 === true && param2 === true){
    return true;
  } else {
    return false;
  }
}
compareTrue(true, true);

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}
calcArea(51, 1);

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}
splitSentence('vamo que vamo');

// Desafio 4
function concatName(array) {
  // seu código aqui
  let first = array[0];
  let last = array[array.length - 1];
  let arr = [last, first];
  return arr.join(', ');
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  wins *= 3;
  ties += 0;
  let total = wins + ties;
  return total;
}
footballPoints(14, 8);

// Desafio 6
function highestCount(array) {
// seu código aqui   
  let maiorNum = array[0];
  let count = 0;

  for (i = 0; i < array.length; i += 1){  
   if(array[i] > maiorNum){
    maiorNum = array[i];
    
    }
   }for (let i = 0; i < array.length; i += 1){
  if (array[i] === maiorNum){
    count += 1;
   }
}
  return count;
}
highestCount([1, 2, 3, -2, 9, 5, 7, 9, 9]);

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
  let c1 = Math.abs(cat1);
  let c2 = Math.abs(cat2);
  let m = Math.abs(mouse);
  let distCat1 = Math.abs((m - c1));
  let distCat2 = Math.abs(m - c2);
  if(distCat1 > distCat2){
    return 'cat2'
  }
  else if (distCat2 > distCat1){
    return 'cat1'
  }
  else{
    return "os gatos trombam e o rato foge"
  }  
}
console.log(catAndMouse(-2, 8, 8));
// Desafio 8
function fizzBuzz(arr) {
  // seu código aqui
  let res = [];
  for (let num of arr) {
    if (num % 5 === 0 && num % 3 === 0) {
      res.push('fizzBuzz');
    } else if (num % 5 === 0) {
      res.push('buzz');
    } else if (num % 3 === 0) {
      res.push('fizz');
    } else {
      res.push('bug');
    }
  }
  return res;
}
fizzBuzz([2, 15, 7, 9, 45]);
// Desafio 9
function encode(string) {
  // seu código aqui
  let codeString = ' ';
  for (let i in string){
    switch(string[i]){
      case "a":
        codeString = codeString.concat("1");
        break;
      case "e":
        codeString = codeString.concat("2");
        break;
      case "i":
          codeString = codeString.concat("3");
          break;
      case "o":
          codeString = codeString.concat("4");
          break;
      case "u":
          codeString = codeString.concat("5");
          break;
      default:
        codeString = codeString.concat(string[i]);
          
    }
  }
  return codeString;
}
console.log(encode("hi there"));

function decode(num) {
  // seu código aqui
  let codeNumber = "";
  for (let i in num){
    switch(num[i]){
      case "1":
        codeNumber = codeNumber.concat("a");
        break;
      case "2":
        codeNumber = codeNumber.concat("e");
        break;
      case "3":
          codeNumber = codeNumber.concat("i");
          break;
      case "4":
          codeNumber = codeNumber.concat("o");
          break;
      case "5":
          codeNumber = codeNumber.concat("u");
          break;
      default:
        codeNumber = codeNumber.concat(num[i]);          
    }
  }
  return codeNumber;
}
  decode('h3 th2r2');

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
