// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } return false;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
} calcArea(51, 1);

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
} splitSentence('go Trybe');

// Desafio 4
function concatName(array) {
  let combo = array[array.length - 1] + ', ' + array[0];
  return combo;
} concatName('Lucas', 'Cassiano', 'Ferraz', 'Paolillo');

// Desafio 5
function footballPoints(wins, ties) {
  let newWins = 3 * wins;
  let totalPoints = newWins + ties;
  return totalPoints;
} console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(numbersArray) {
  let highestNumber = numbersArray[0];
  let count = 0;
  for (let i of numbersArray) {
    if (i > highestNumber) {
      highestNumber = i;
    }
  }
  for (let j of numbersArray) {
    if (j === highestNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse > cat1) {
    cat1 = mouse - cat1;
  } else {
    cat1 = cat1 - mouse;
  }
  if (mouse > cat2) {
    cat2 = mouse - cat2;
  } else {
    cat2 = cat2 - mouse;
  }
  if (cat1 === cat2) {
     return 'os gatos trombam e o rato foge';
    } if (cat1 > cat2) {
     return 'cat2';
    } if (cat2 > cat1) {
  return 'cat1';
  } 
}

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzz = [];
  for (let index of array) {
    if ((index % 3) === 0 && (index % 5) === 0) {
      fizzBuzz.push('fizzBuzz');
  } else if ((index % 3) === 0) {
    fizzBuzz.push("fizz");
    } else if ((index % 5) === 0) {
      fizzBuzz.push('buzz');
  } else {
      fizzBuzz.push('bug!');
    }
    }
    return fizzBuzz;
}

// Desafio 9
  function encode(string1) {
    let array = [];
    let string2 = "";
    array = splitSentence = string1.split("")  
    for(let i = 0, j = array.length; i<j; i +=1 ){
         switch (array[i]) {
            case "a":
                array[i] = "1";
                break;
            case "e":
                array[i] ="2";
                break;
            case "i":
                array[i] ="3";
                break;
            case "o":
                array[i] ="4";
                break;
            case "u":
                array[i] ="5";
                break;
             default:
                 break;
         }
     }
     for(let i = 0, j = array.length; i<j; i +=1 ){
      string2 += array[i]}
      return string2
}

function decode() {
  let array = [];
  let string2 = "";
  array = splitSentence = string1.split("");
  for(let i = 0, j = array.length; i<j; i +=1 ) {
    switch (array[i]) {
      case "1":
        array[i] = "a"
      break;
      case "2":
        array[i] ="e"
      break;
      case "3":
        array[i] ="i"
      break;
      case "4":
        array[i] ="o"
      break;
      case "5":
        array[i] ="u"
      break;
      default:
      break;
       }
   }
   for  (let i = 0, j = array.length; i<j; i +=1) {
    string2 += array[i]}
   return string2
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
