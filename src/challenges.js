// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  }
  return false;
} compareTrue(true, true);

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
} calcArea(51, 1);

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {

} 

// Desafio 5
function footballPoints(wins, ties) { 
 let newWins = 3 * wins;  
 let totalPoints = newWins + ties;
 return totalPoints;
} console.log(footballPoints(14, 8));

// Desafio 6
function highestCount() {
  // seu código aqui
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
    fizzBuzz.push("fizzBuzz");
  } else if ((index % 3) === 0) {
    fizzBuzz.push("fizz");
  } else if ((index % 5) === 0) {
    fizzBuzz.push("buzz");
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
