// Desafio 1
function compareTrue(param1, param2) {
  if(param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura)/2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  let strArray = str.split(' ');
  return strArray;
}

// Desafio 4
function concatName(array) {
  let firstItem = array[0];
  let lastItem = array[array.length -1];
  return lastItem + ', ' + firstItem;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins*3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = Math.max.apply(null, numbers);
  let repeat = [];
  let numberRepeat = [0, 0, 0];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === highestNumber) {
      repeat += numbers[i];
    }
    for(let i = 0; i < numbers.length; i += 1) {
      if(numbers[i] === numberRepeat) {
        return numberRepeat.length
      }
    }
  }
  return repeat.length
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  let distanceCat1 = Math.abs(cat1 - mouse)
  let distanceCat2 = Math.abs(cat2 - mouse)

  if(distanceCat1 > distanceCat2) {
    return "cat2";
  } else if(distanceCat1 < distanceCat2) {
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = []
  for(let i = 0; i < numbers.length; i += 1) {
    if(numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      result.push('fizzBuzz');
    } else if(numbers[i] % 3 === 0) {
      result.push('fizz');
    } else if(numbers[i] % 5 === 0) {
      result.push('buzz')
    } else {
      result.push('bug!')
    }
  }
  return result;
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
