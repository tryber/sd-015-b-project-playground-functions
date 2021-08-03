// Desafio 1
function compareTrue(param1, param2) {

  if (param1 && param2 === true) {
    return true;
  }

  else {
    return false;
  }

}

// Desafio 2
function calcArea(base, height) {

  area = (base * height) / 2
  
  return area;
}

// Desafio 3
function splitSentence(phrase) {

  let word = "";
  let words = [];

  for (let index = 0; index < phrase.length; index += 1) {

    if (phrase[index] !== " ") {

      word = word + phrase[index]

    }

    else if (phrase[index] === " ") {

      words.push(word);

      word = "";

    }
  }
  return words;
} //VOLTAR

// Desafio 4
function concatName(names) {

  let firstName = ""

  let lastName = ""

  for (let index = 0; index < names.length; index += 1) {
  
    if (index === 0) {
      firstName = names[index]
    }

    else if (index === (names.length - 1)) {
      lastName = names[index]
    }

    let concatenation = firstName.concat(lastName)
    return concatenation

  }

  
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {

  let winPoints = 0 

  let tiePoints = 0

  if (wins > 0) {
    winPoints = wins * 3
  }

  if (ties > 0) {
    tiePoints = ties * 1
  }

  let totalPoints = tiePoints + winPoints
  return totalPoints;
  // seu código aqui
}

// Desafio 6
function highestCount(numbers) {

  for (let compare of numbers) {

    let max = 0;

    let min = 0;

    let repeat = 0;

    if (compare > max) {
      max = compare;

      for (let counter = 0; counter < numbers.length; counter += 1) {
            
        if (max === numbers[counter]) {

          min += 1;

        }

        if (min > repeat) {

          repeat = min;
        }
      }
    }
    else if (compare === 0) {
      for (let counter = 0; counter < numbers.length; counter += 1) {
            
        if (compare === numbers[counter]) {

          min += 1;

        }

        if (min > repeat) {

          repeat = min;
        }
      }
    }
    return repeat;
  }
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))
// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
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
