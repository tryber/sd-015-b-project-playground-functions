// Desafio 10
function techList(array, name) {
  // seu código aqui
  let objeto = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  array.sort();
  for (let key = 0; key < array.length; key += 1) {
    objeto.push({
      tech: array[key],
      name,
    });
  }
  return objeto;
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
function trianguloA(lineA, lineB, lineC) {
  return lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC);
}
function trianguloB(lineA, lineB, lineC) {
  return lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC);
}
function trianguloC(lineA, lineB, lineC) {
  return lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB);
}
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (trianguloA(lineA, lineB, lineC)) {
    if (trianguloB(lineA, lineB, lineC)) {
      if (trianguloC(lineA, lineB, lineC)) {
        return true;
      }
    }
  }
  return false;
}
triangleCheck(6, 2, 2);
// Desafio 13
function arraySoma(array) {
  let resultado = 0;
  for (let key = 0; key < array.length; key += 1) {
    resultado += Number(array[key]);
  }
  return resultado;
}
function hydrate(string) {
  // seu código aqui
  let filter = /[0-9]/g;
  let numbers = string.match(filter);
  let resultado = arraySoma(numbers);
  if (resultado === 1) {
    return `${resultado} copo de água`;
  }
  return `${resultado} copos de água`;
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
