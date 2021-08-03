// Desafio 10
function techList() {

}

// Desafio 11
function generatePhoneNumber(numeros) {
  let resultado;
  if (numeros.length !== 11) {
    resultado = 'Array com tamanho incorreto';
  } else {
    resultado = 'Array com tamanho incorreto';
  }
  return resultado;
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

// Desafio 13
// Sub-funções do desafio 13
function mensagem(coposDeAgua) {
  let msg;
  if (coposDeAgua === 0) {
    msg = 'Nenhum copo de água';
  } else if (coposDeAgua === 1) {
    msg = '1 copo de água';
  } else {
    msg = `${coposDeAgua} copos de água`;
  }
  return msg;
}
function hydrate(drinks) {
  // Para se extrair o número de uma string,
  // foi utilizada técnica observada em https://www.codegrepper.com/code-examples/javascript/find+integer+in+string+javascript
  let coposDeBebida = drinks.match(/\d+/g);
  let copoDeAgua = [];
  let coposDeAgua = 0;

  if (coposDeBebida !== []) {
    for (let i = 0; i < coposDeBebida.length; i += 1) {
      copoDeAgua[i] = parseInt(coposDeBebida[i], 10);
      coposDeAgua += copoDeAgua[i];
    }
  }
  return mensagem(coposDeAgua);
}

console.log(hydrate('100 cerveja, porfavor'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
