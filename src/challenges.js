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

  let words = phrase.split(' ')

  return words
}

// Desafio 4
function concatName(names) {

  let firstName = names[0]

  let lastName = [names[names.length - 1]]

  let firstAndLastName = lastName.concat(firstName)

  return firstAndLastName;
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

  let max = Number.NEGATIVE_INFINITY;

  let min = 0;

  for (let compare of numbers) {
    if (compare > max) {
      max = compare;
    }
  }

  for (let counter = 0; counter < numbers.length; counter += 1) {
    if (max === numbers[counter]) {
      min +=1
    }
  }
  return min;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }

  else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }

  else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbers) {

  let convertion = []

  for (let counter = 0; counter < numbers.length; counter += 1){

    if (numbers[counter] % 5 === 0 && numbers[counter] % 3 === 0) {
      convertion.push('fizzBuzz')
    }

    else if (numbers[counter] % 3 === 0) {
      convertion.push('fizz')
    }

    else if (numbers[counter] % 5 === 0) {
      convertion.push('buzz')
    }

    else {
      convertion.push('bug!')
    }
  }

  return convertion;
}

// Desafio 9
function encode(phrase) {
  
  let code = phrase.replace(/a/gi, "1");
  code = code.replace(/e/gi, "2");
  code = code.replace(/i/gi, "3");
  code = code.replace(/o/gi, "4");
  code = code.replace(/u/gi, "5");

  return code;
}

function decode(codedPhrase) {
  let code = codedPhrase.replace(/1/gi, "a");
  code = code.replace(/2/gi, "e");
  code = code.replace(/3/gi, "i");
  code = code.replace(/4/gi, "o");
  code = code.replace(/5/gi, "u");

  return code;
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
