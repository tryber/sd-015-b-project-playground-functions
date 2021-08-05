// Desafio 10
function techList(array, name) {
  // seu código aqui
  let objeto = [];
  if (array.length <= 0) {
    return 'Vazio!';
  }
  for (let key = 0; key < array.length; key += 1) {
    objeto.push({
      tech: array[key],
      name,
    });
  }

  return objeto.sort(function (a, b) {
    return a.tech > b.tech;
  });
}

// Desafio 11
function comparacao(tamanho) {
  if (tamanho <= 0 || tamanho > 9) {
    return tamanho;
  }
}
function repete(array) {
  let objeto = {};
  for (let key of array) {
    if (!objeto[key]) {
      objeto[key] = 1;
    } else {
      objeto[key] += 1;
    }
    if (objeto[key] >= 3) {
      return true;
    }
  }
}
function generatePhoneNumber(numberPhone) {
  // seu código aqui
  if (numberPhone.length === 11) {
    let resultadoComparacao = numberPhone.filter(comparacao);
    if (resultadoComparacao.length >= 1) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let resultadoRepete = repete(numberPhone);
    // console.log(resultadoRepete);
    if (resultadoRepete === true) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let numberSpace = numberPhone.join('');
    let resultado = numberSpace.replace(/(\d{0})(\d{2})(\d{5})/, '$1($2) $3-');
    return resultado;
  }
  return 'Array com tamanho incorreto.';
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
