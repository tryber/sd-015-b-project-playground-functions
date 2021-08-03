// Desafio 1
function compareTrue(x, y) {
  // seu código aqui
  return x && y;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let splittedSentence = sentence.split(' ');
  return splittedSentence;
}

// Desafio 4
function concatName(names) {
  // seu código aqui
  let firstName = names[0];
  let lastName = names[names.length - 1];
  return lastName + ', ' + firstName;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function findHighestNumber(numbers) {
  let highestNumber = numbers[0];

  for (const num of numbers) {
    if (num > highestNumber) {
      highestNumber = num;
    }
  }

  return highestNumber;
}

function highestCount(numbers) {
  // seu código aqui
  let highestNumber = findHighestNumber(numbers);
  let count = 0;

  for (const num of numbers) {
    if (num === highestNumber) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = mouse - cat1;
  distanceCat1 *= Math.sign(distanceCat1);
  let distanceCat2 = mouse - cat2;
  distanceCat2 *= Math.sign(distanceCat2);

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat1 > distanceCat2) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let answer = [];

  for (const num of numbers) {
    let isDivisibleBy3 = num % 3 === 0;
    let isDivisibleBy5 = num % 5 === 0;

    if (isDivisibleBy3 && isDivisibleBy5) {
      answer.push('fizzBuzz');
    } else if (isDivisibleBy3) {
      answer.push('fizz');
    } else if (isDivisibleBy5) {
      answer.push('buzz');
    } else {
      answer.push('bug!');
    }
  }

  return answer;
}

// Desafio 9
function encode(sentence) {
  // seu código aqui
  let sentenceChars = sentence.split('');
  let encodedChars = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };

  for (let i = 0; i < sentenceChars.length; i += 1) {
    let char = sentenceChars[i];

    if (char in encodedChars) {
      sentenceChars[i] = encodedChars[char];
    }
  }

  return sentenceChars.join('');
}

function decode(sentence) {
  // seu código aqui
  let sentenceChars = sentence.split('');
  let decodedChars = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  for (let i = 0; i < sentenceChars.length; i += 1) {
    let char = sentenceChars[i];

    if (char in decodedChars) {
      sentenceChars[i] = decodedChars[char];
    }
  }

  return sentenceChars.join('');
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
