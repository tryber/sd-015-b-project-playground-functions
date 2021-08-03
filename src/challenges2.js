// Desafio 10
function techList() {

}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
// Sub-função do desafio 12
function checaCondicao(a, b, c) {
  let soma;
  let diferenca;
  let resultado;

  soma = b + c;
  diferenca = Math.abs(b - c);

  if ((a < soma) && (a > diferenca)) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}
function triangleCheck(lineA, lineB, lineC) {
  // A<B+C e A > abs(B-C)
  // B<A+C e B > abs(A-C)
  // C<A+B e C > abs(A-B)
  let checaCadaLado = [];
  let eTriangulo = false;

  checaCadaLado[0] = checaCondicao(lineA, lineB, lineC);
  checaCadaLado[1] = checaCondicao(lineB, lineA, lineC);
  checaCadaLado[2] = checaCondicao(lineC, lineA, lineB);

  if ((checaCadaLado[0] === true) && (checaCadaLado[1] === true) && (checaCadaLado[2] === true)) {
    eTriangulo = true;
  }
  return eTriangulo;
}

console.log(triangleCheck(10, 14, 8));
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
