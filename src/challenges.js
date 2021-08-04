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
function coder(phrase, codigo) {
  let phraseDivider = phrase.split('');
  for (let index = 0; index < phraseDivider.length; index += 1) {
    if (codigo[phraseDivider[index]] !== undefined) {
      phraseDivider[index] = codigo[phraseDivider[index]];
    }
  }
  return phraseDivider.join('');
}

function encode(phrase) {
  let encoder = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return coder(phrase, encoder);
}
function decode() {
  let decoder = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return coder('phrase', decoder);
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
