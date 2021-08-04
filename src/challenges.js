// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

// Desafio 3
function splitSentence(palavra) {
  // seu código aqui
  let array = palavra.split(" ");
  return array;
}

// Desafio 4
function concatName(arrayDeStrings) {
  // seu código aqui
 return arrayDeStrings[arrayDeStrings.length - 1] + ', ' + arrayDeStrings[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalPoints = (wins * 3) + ties
  return totalPoints;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let resultado = 0;
  let maiorNumero = -100;
  for (let index = 0; index < numbers.length; index += 1) {
    let numeroAtual = numbers[index];
    if (numeroAtual > maiorNumero) {
      maiorNumero = numeroAtual;
    }
  }
  for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    if (numbers[index2] === maiorNumero) {
      resultado += 1;
    }
  }
  return resultado;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let calculo1 = mouse - cat1;
  let distancia1 = Math.abs(calculo1);
  let calculo2 = mouse - cat2;
  let distancia2 = Math.abs(calculo2);
  if (distancia1 < distancia2) {
    return 'cat1';
  } else if (distancia2 < distancia1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  // seu código aqui
  let arrayString = [];
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
      arrayString.push('fizzBuzz'); 
    } else if (arrayNumbers[index] % 3 === 0) {
      arrayString.push('fizz')
    } else if (arrayNumbers[index] % 5 === 0) {
      arrayString.push('buzz')
    } else {
      arrayString.push('bug!')
    }
  }
  return arrayString
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let code = '';
  for (let palavra in string) {
    if (string[palavra] === 'a') {
      code += '1';
    } else if (string[palavra] === 'e') {
      code += '2';
    } else if (string[palavra] === 'i') {
      code += '3';
    } else if (string[palavra] === 'o') {
      code += '4';
    } else if (string[palavra] === 'u') {
      code += '5';
    } else {
      code += string[palavra]
    }

  }
  return code
}
function decode(string2) {
  // seu código aqui
  let theCode = '';
  for (let palavra in string2) {
    if (string2[palavra] === '1') {
      theCode += 'a';
    } else if (string2[palavra] === '2') {
      theCode += 'e';
    } else if (string2[palavra] === '3') {
      theCode += 'i';
    } else if (string2[palavra] === '4') {
      theCode += 'o';
    } else if (string2[palavra] === '5') {
      theCode += 'u';
    } else {
      theCode += string2[palavra]
    }

  }
  return theCode
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
