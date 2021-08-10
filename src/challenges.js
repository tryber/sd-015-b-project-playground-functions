// Desafio 1
function compareTrue(valorUm, valorDois) {
  if (valorUm === true && valorDois === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  let splitString = str.split(' ');
  return splitString;
}

// Desafio 4
function concatName(names) {
  let namesConcatName = [];
  namesConcatName.push(names[(names.length) - 1]);
  namesConcatName.push(names[0]);

  return namesConcatName.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let higherNumber = Math.max.apply(null, numbers);
  let times = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === higherNumber) {
      times += 1;
    }
  }

  return times;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = (cat1 > mouse ? (cat1 - mouse) : (mouse - cat1));
  let cat2Distance = (cat2 > mouse ? (cat2 - mouse) : (mouse - cat2));
  if (cat1Distance < cat2Distance) {
    return 'cat1';
  } if (cat2Distance < cat1Distance) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numberArr) {
  let arrayFizz = [];
  function numberToString(number) {
    if (number % 3 === 0 && number % 5 === 0) {
      arrayFizz.push('fizzBuzz');
    } else if (number % 5 === 0) {
      arrayFizz.push('buzz');
    } else if (number % 3 === 0) {
      arrayFizz.push('fizz');
    } else {
      arrayFizz.push('bug!');
    }
  }

  for (let index = 0; index < numberArr.length; index += 1) {
    numberToString(numberArr[index]);
  }
  return arrayFizz;
}

// Desafio 9
function encode(str) {
  let separaLetras = str.split('');
  let vogalCodificada = [];
  console.log(separaLetras.length);

  for (let i = 0; i < separaLetras.length; i++) {
    if (separaLetras[i] === 'a') {
      vogalCodificada.push(1);
    } else if (separaLetras[i] === 'e') {
      vogalCodificada.push(2);
    } else if (separaLetras[i] === 'i') {
      vogalCodificada.push(3);
    } else if (separaLetras[i] === 'o') {
      vogalCodificada.push(4);
    } else if (separaLetras[i] === 'u') {
      vogalCodificada.push(5);
    } else {
      vogalCodificada.push(separaLetras[i]);
    }
  }

  let vogalParaNumero = vogalCodificada.join('');
  return vogalParaNumero;
}

function decode(str) {
  let separaLetras = str.split('');
  let vogalCodificada = [];
  console.log(separaLetras.length);

  for (let i = 0; i < separaLetras.length; i++) {
    if (separaLetras[i] === '1') {
      vogalCodificada.push('a');
    } else if (separaLetras[i] === '2') {
      vogalCodificada.push('e');
    } else if (separaLetras[i] === '3') {
      vogalCodificada.push('i');
    } else if (separaLetras[i] === '4') {
      vogalCodificada.push('o');
    } else if (separaLetras[i] === '5') {
      vogalCodificada.push('u');
    } else {
      vogalCodificada.push(separaLetras[i]);
    }
  }

  let vogalParaNumero = vogalCodificada.join('');
  return vogalParaNumero;
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
