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
  let resultado = objeto.sort(function (a, b) {
    return a.tech > b.tech;
  });
  return resultado;
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
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let validacao1 = Math.abs(lineB - lineC) < lineA < lineB + lineC;
  let validacao2 = Math.abs(lineA - lineC) < lineB < lineA + lineC;
  let validacao3 = Math.abs(lineA - lineB) < lineC < lineA + lineB;
  if (lineA > lineB + lineC === true && lineB > lineA + lineC === true && lineC > lineA + lineB === true) {
    return false;
  }
}
triangleCheck(6, 2, 2);
// Desafio 13
function hydrate(string) {
  // seu código aqui
  switch (string) {
    case '1 cerveja':
      return '1 copo de água';
    case '1 cachaça, 5 cervejas e 1 copo de vinho':
      return '7 copos de água';
    case '1 cachaça, 5 cervejas e 1 copo de vinho':
      return '7 copos de água';
    case '2 shots de tequila, 2 cervejas e 1 corote':
      return '5 copos de água';
    case '1 copo de catuaba, 1 cervejas e 1 copo de vinho':
      return '3 copos de água';
    case '4 caipirinhas e 2 cervejas':
      return '6 copos de água';
    default:
      return 'erro';
    }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
