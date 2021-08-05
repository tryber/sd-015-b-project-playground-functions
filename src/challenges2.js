// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let somaLineALineB = (lineA + lineB);
  let subtracaoLineALineB = Math.abs(lineA - lineB);
  let somaLineALineC = (lineA + lineC);
  let subtracaoLineALineC = Math.abs(lineA - lineC);
  let somalineBLineC = (lineB + lineC);
  let subtracaoLineBLineC = Math.abs(lineB-lineC);
  let resultado = 0;
  if ((lineA < somalineBLineC && lineA > subtracaoLineBLineC) && (lineB < somaLineALineC && lineB > subtracaoLineALineC) && (lineC < somaLineALineB && lineC > subtracaoLineALineB)){
    resultado = true;
  }
  else {
    resultado = false;
  }
  return resultado;
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
