// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(numbers) {
  // seu código aqui
  let contador = 0;
  let mensagemAlerta = 0;
  let tamanhoIncorreto = 0;
  let transformarArrayEmString = numbers.join('');
  let ddd = transformarArrayEmString.substr(0,2);
  let primeiraParteNumero = transformarArrayEmString.substr(2,5);
  let segundaParteNumero = transformarArrayEmString.substr(7,4);
  if (numbers.length !== 11) {
    return tamanhoIncorreto = 'array com tamanho incorreto.';
  }
  for (let index = 0; index < numbers.length; index += 1) {
    for(let i = index + 1; i <= numbers.length; i += 1) {
      if (numbers[index] === numbers[i]) {
        contador += 1;
      }
      if (numbers[index] < 0 || numbers[index] > 9 || contador >= 3) {
      return mensagemAlerta = 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return `(${ddd}) ${primeiraParteNumero}-${segundaParteNumero}`
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let somaLineALineB = (lineA + lineB);
  let subtracaoLineALineB = Math.abs(lineA - lineB);
  let somaLineALineC = (lineA + lineC);
  let subtracaoLineALineC = Math.abs(lineA - lineC);
  let somalineBLineC = (lineB + lineC);
  let subtracaoLineBLineC = Math.abs(lineB - lineC);
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
