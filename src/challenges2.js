const { compareTrue } = require('./challenges');

// Desafio 10
function techList(par1, name) {
  let array = [];

  if (par1.length === 0) {
    return 'Vazio!';
  }
  for (let tech of par1.sort()) {
    array.push({ tech, name });
  }
  return array;
}

// Desafio 11
function generatePhoneNumber(arrNumber) {
  if (arrNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < arrNumber.length; index += 1) {
    let addNum = 0;
    for (let index2 = 0; index2 < arrNumber.length; index2 += 1) {
      if (arrNumber[index] === arrNumber[index2]) {
        addNum += 1;
      }
    }
    if (arrNumber[index] < 0 || arrNumber[index] > 9 || addNum >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let numeroPronto =
    '(' +
    arrNumber[0] +
    arrNumber[1] +
    ')' +
    ' ' +
    arrNumber[2] +
    arrNumber[3] +
    arrNumber[4] +
    arrNumber[5] +
    arrNumber[6] +
    '-' +
    arrNumber[7] +
    arrNumber[8] +
    arrNumber[9] +
    arrNumber[10];
  return numeroPronto;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  } else if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(drink) {
  let numeroDrink = drink.match(/\d+/g);
  let numeroAgua = 0;
  for (index = 0; index < numeroDrink.length; index += 1) {
    numeroAgua += parseInt(numeroDrink[index]);
  }
  if (numeroAgua > 1) {
    return numeroAgua + ' copos de água';
  } else {
    return numeroAgua + ' copo de água';
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
