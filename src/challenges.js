// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a && b) { return true; }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let word = '';
  let result = [];

  for (let i = 0; i <= string.length; i += 1) {
    if (string[i] === ' ' || i === string.length) {
      result.push(word);
      word = '';
    } else {
      word += string[i];
    }
  }

  return result;
}

// Desafio 4
function concatName(stringArray) {
  // seu código aqui
  // Vou precisar criar uma variável que adiciona o último item da string e o primeiro item da string, não preciso de for para isso
  let string = `${stringArray[stringArray.length - 1]}, ${stringArray[0]}`;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  // Preciso criar as variáveis winPoints para traduzir a quantidade de vitórias em vezes 3. Depois, só somar winPoints com ties e retornar o resultado.
  let winPoints = wins * 3;
  return winPoints + ties;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  // Criar um for que recebe o maior valor em uma variável, e no final do for com um if ele abre outro for que calcula a quantidade de vezes que foi repetido.
  let highestNumber = Math.max(...array);
  let repeat = 0;

  for (let number of array) {
    if (number === highestNumber) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result = [];
  result.push(Math.abs(cat1 - mouse)); result.push(Math.abs(cat2 - mouse));
  if (result[0] > result[1]) { return 'cat2'; }
  if (result[0] < result[1]) { return 'cat1'; }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];

  for (let i = 0; i < array.length; i += 1) {
    if (Number.isInteger(array[i] / 3) && Number.isInteger(array[i] / 5)) {
      result.push('fizzBuzz');
    } else if (Number.isInteger(array[i] / 3)) {
      result.push('fizz');
    } else if (Number.isInteger(array[i] / 5)) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }

  return result;
}

// Desafio 9
function encode(string) {
  let result = '';
  let code = { a: 1, e: 2, i: 3, o: 4, u: 5 };

  for (let i = 0; i < string.length; i += 1) {
    for (let key in code) {
      if (Object.prototype.hasOwnProperty.call(code, string[i])) {
        if (key === string[i]) {
          result += code[key];
        }
      } else {
        result += string[i];
        break;
      }
    }
  }

  return result;
}

function decode(string) {
  let result = '';
  let code = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };

  for (let i = 0; i < string.length; i += 1) {
    for (let key in code) {
      if (Object.prototype.hasOwnProperty.call(code, string[i])) {
        if (key === string[i]) {
          result += code[key];
        }
      } else {
        result += string[i];
        break;
      }
    }
  }

  return result;
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
