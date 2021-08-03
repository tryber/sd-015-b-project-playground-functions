// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
}
 // Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ", " + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  let highestNumber = 0;
  let numberCount = {};

  for (index = 0; index < array.length; index += 1) {
    if (array[index] > highestNumber) {
      highestNumber = array[index];
    }

    if (numberCount[array[index]]) {
      numberCount[array[index]] += 1;
    } else {
      numberCount[array[index]] = 1;
    }
  }

  return [numberCount[highestNumber]];
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return "cat1";
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return "cat2";
  } else {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzzArray = [];

  for (index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 || array[index] % 5 === 0) {
      if (array[index] % 3 === 0 && array[index] % 5 === 0) {
        fizzBuzzArray.push("fizzBuzz");
      } else if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
        fizzBuzzArray.push("fizz");
      } else if (array[index] % 3 !== 0 && array[index] % 5 === 0) {
        fizzBuzzArray.push("buzz");
      }
    } else {
      fizzBuzzArray.push("bug!");
    }
  }

  return fizzBuzzArray;
}

// Desafio 9
function encode(string) {
  let code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  };

  let stringArray = string.split("");

  for (index = 0; index < stringArray.length; index += 1) {
    for (letter in code) {
      if (stringArray[index] === letter) {
        stringArray[index] = code[letter];
      }
    }
  }

  return stringArray.join("");
}

function decode(string) {
  let code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  };

  let stringArray = string.split("");

  for (index = 0; index < stringArray.length; index += 1) {
    for (letter in code) {
      if (stringArray[index] === code[letter].toString()) {
        stringArray[index] = letter;
      }
    }
  }

  return stringArray.join("");
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
