// Desafio 1
function compareTrue(boolean1, boolean2) {
  if((boolean1 && boolean2) === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(phrase) {
  splitPhrase = phrase.split(" ");
  return splitPhrase;
}

// Desafio 4
function concatName(nameArray) {
  returnString = nameArray[nameArray.length - 1].concat(", ", nameArray[0]);
  return returnString;
}

// Desafio 5
function footballPoints(wins, ties) {
  totalPoints = (wins * 3) + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(numbersArray) {
  let highestNumber = Number.NEGATIVE_INFINITY;
  let counter = 0;
  for(let number of numbersArray) {
    if(number > highestNumber) {
      highestNumber = number;
    }
  }
  for (let number of numbersArray) {
    if(number === highestNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dCat1 = Math.abs(cat1 - mouse);
  let dCat2 = Math.abs(cat2 - mouse);
  if (dCat1 < dCat2) {
    return "cat1";
  } else if (dCat2 < dCat1) {
    return "cat2";
  } else if (dCat2 === dCat1) {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(numbersArray) {
  let returnArray = [];
  for(let number of numbersArray) {
    if(((number % 3) === 0) && ((number % 5) === 0)) {
      returnArray.push("fizzBuzz");
    } else if((number % 3) === 0) {
      returnArray.push("fizz");
    } else if ((number % 5) === 0) {
      returnArray.push("buzz");
    } else {
      returnArray.push("bug!");
    }
  }
  return returnArray;
}

// Desafio 9

let encoder = {
  "a" : "1",
  "e" : "2",
  "i" : "3",
  "o" : "4",
  "u" : "5",
}

function encode(phrase) {
  phrase = phrase.split("")
  for (let letter in encoder) {
    for(let index = 0; index < phrase.length; ++index) {
      if(phrase[index] === letter) {
        phrase[index] = encoder[letter]
      }
    }
  }
  return phrase.join("")
}  
console.log(decode(encode("hi there!")))

function decode(phrase) {
  phrase = phrase.split("")
  for (let letter in encoder) { 
    for(let index = 0; index < phrase.length; ++index) {
      if(phrase[index] === encoder[letter]) {
        phrase[index] = letter;
      }
    }
  }
  return phrase.join("")
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
