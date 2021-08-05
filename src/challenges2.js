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
console.log(triangleCheck(16, 9, 2))
console.log(triangleCheck(10, 3, 4))
console.log(triangleCheck(6, 2, 2))
console.log("\n"); 
console.log(triangleCheck(10, 14, 8))
console.log(triangleCheck(2, 3, 4))
console.log(triangleCheck(16, 20, 30))

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
