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
/*  Retorne false quando a medida de qualquer um dos lados seja maior que a soma das medidas dos outros dois.

- Retorne false quando a medida de qualquer um dos lados seja menor que o valor absoluto da diferença entre essas medidas.

- Retorne true quando a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.*/
function generatePhoneNumber() {}

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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
