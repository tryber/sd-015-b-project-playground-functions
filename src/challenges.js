// Desafio 1
function compareTrue(a, b) {
  if (a && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
/** Sourse: https://stackoverflow.com/questions/18473326/javascript-break-sentence-by-words */
function splitSentence(sentense) {
  return sentense.split(" ");
}

// Desafio 4
function concatName(fullName) {
  return fullName[fullName.length - 1] + ", " + fullName[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
/** Source: https://stackoverflow.com/questions/46640420/how-to-find-number-of-occurrence-of-highest-element-in-an-javascript-array/46640571 */
function highestCount(arr) {
  let max = Math.max(...arr);
  let count = arr.filter(x => x === max).length;
  return count;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((Math.abs(cat1 - mouse)) === (Math.abs(cat2 - mouse))) {
    return "os gatos trombam e o rato foge";
  } else if ((Math.abs(cat1 - mouse)) < (Math.abs(cat2 - mouse))) {
    return "cat1";
  } else {
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz(arr) {
  let fizzBuzz = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 15 === 0) {
      fizzBuzz.push("fizzBuzz");
    } else if (arr[i] % 5 === 0) {
      fizzBuzz.push("buzz");
    } else if (arr[i] % 3 === 0) {
      fizzBuzz.push("fizz");
    } else {
      fizzBuzz.push("bug!");
    }
  }
  return fizzBuzz;
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
