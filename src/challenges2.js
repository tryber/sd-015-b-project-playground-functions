// Desafio 10
function techList(tech, name) {
  let object = [];
  let techOrder = tech.sort();

  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < tech.length; index += 1) {
    object[index] = { tech: techOrder[index], name };
  }
  return object;
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let teste = [];
  let resultado = '';
  for (let index = 0; index < 11; index += 1) {
    teste.push(array[index]);
  }
  teste.sort();

  for (let index = 0; index < array.length; index += 1) {
    if (teste[index] === teste[index + 2]) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (teste[index] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (teste[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  resultado = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;

  return resultado;
}

// Desafio 12
function triangleCheck(a, b, c) {
  if (((a > b + c) || (a < Math.abs(b - c))) || ((b > a + c) && (b < Math.abs(a - c))) || ((c > a + b) || (c < Math.abs(a - b)))) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  let total = 0;
  let resultado = string.match(/\d+/g).map(Number);
  for (let index = 0; index < resultado.length; index += 1) {
    total += resultado[index];
  }
  if (total === 1) {
    return `${total} copo de água`;
  } return `${total} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
