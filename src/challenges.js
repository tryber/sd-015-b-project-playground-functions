// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2)
}

// Desafio 3
function splitSentence(array) {
  return array.split(" ")
}

// Desafio 4
function concatName(array) {
  let index = array.length
  let list = array[index - 1] + ", " + array[0]
  return list
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3
  let empates = ties
  return (vitorias + empates)
}

// Desafio 6
function highestCount(numeros) {
  let maiorNumero = numeros[0];
  let contar = 0;

  for (indice in numeros) {
    if (maiorNumero < numeros[indice]) {
      maiorNumero = numeros[indice];
    }
  }
  for (indice in numeros) {
    if (maiorNumero == numeros[indice]) {
      contar += 1;
    }
  }
  return contar;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posicionCat1 = (mouse - cat1);
  let posicionCat2 = (mouse - cat2);
  let cat1Recalc = (posicionCat1**2)**(1/2)
  let cat2Recalc = (posicionCat2**2)**(1/2)

  if (cat1Recalc < cat2Recalc) {
    return "cat1";
  } else if (cat1Recalc > cat2Recalc) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let rulesFB = [];
  let numbers = array;
  for (let index in array) {
    if ((numbers[index] % 5 === 0) && (numbers[index] % 3 === 0)) {
      rulesFB.push('fizzBuzz');
    } else if (numbers[index] % 5 === 0) {
      rulesFB.push('buzz');
    } else if (numbers[index] % 3 === 0) {
      rulesFB.push('fizz');
    } else {
      rulesFB.push('bug!');
    }
  }
  return rulesFB
}

// Desafio 9
function encode(entrada) {
  const vogais = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let encode = "";
  let frase = "";
  frase = entrada;
  for (let indice in frase) {
    if (vogais[frase[indice]] === undefined) {
      encode += frase[indice];
    } else {
      encode += vogais[frase[indice]];
    }
  }
  return encode;
}

function decode(entrada) {
  const vogais = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u",
  };
  let encode = "";
  let frase = "";
  frase = entrada;
  for (let indice in frase) {
    if (vogais[frase[indice]] === undefined) {
      encode += frase[indice];
    } else {
      encode += vogais[frase[indice]];
    }
  }
  return encode;
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
