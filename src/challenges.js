// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(arr) {
  // seu código aqui
  let array = arr;
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3 + ties);
}

// Desafio 6
function highestCount(arr) {
  // seu código aqui
  let biggest = arr[0];
  let repeat = 0;
  for (let element of arr) {
    if (element > biggest) {
      biggest = element;
      repeat = 0;
    }
    if (biggest === element) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distancia1 = Math.abs(cat1 - mouse);
  let distancia2 = Math.abs(cat2 - mouse);

  if (distancia1 === distancia2) {
    return 'os gatos trombam e o rato foge';
  } else if (distancia1 < distancia2) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(arr1) {
  // seu código aqui
  let newArray = [];
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] % 5 === 0 && arr1[i] % 3 === 0) {
      newArray.push('fizzBuzz');
    } else if (arr1[i] % 5 === 0) {
      newArray.push('buzz');
    } else if (arr1[i] % 3 === 0) {
      newArray.push('fizz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(str) {
  // seu código aqui
  let noVowels = str.split('');
  let res = [];
  for (let index = 0; index < noVowels.length; index += 1) {
    switch (noVowels[index]) {
      case ('a'):
        res.push(noVowels[index].replace('a', '1'));
        break;
      case ('e'):
        res.push(noVowels[index].replace('e', '2'));
        break;
      case ('i'):
        res.push(noVowels[index].replace('i', '3'));
        break;
      case ('o'):
        res.push(noVowels[index].replace('o', '4'));
        break;
      case ('u'):
        res.push(noVowels[index].replace('u', '5'));
        break;
      default:
        res.push(noVowels[index]);
    }
  }
  return res.join('');
}
function decode(str) {
  // seu código aqui
  let noNumbers = str.split('');
  let res = [];
  for (let index = 0; index < noNumbers.length; index += 1) {
    switch (noNumbers[index]) {
      case ('1'):
        res.push(noNumbers[index].replace('1', 'a'));
        break;
      case ('2'):
        res.push(noNumbers[index].replace('2', 'e'));
        break;
      case ('3'):
        res.push(noNumbers[index].replace('3', 'i'));
        break;
      case ('4'):
        res.push(noNumbers[index].replace('4', '0'));
        break;
      case ('5'):
        res.push(noNumbers[index].replace('5', 'u'));
        break;
      default:
        res.push(noNumbers[index]);
    }
  }
  return res.join('');
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
