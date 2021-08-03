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
    return 'não é possível gerar um número de telefone com esses valores';
  }
  for (let index = 0; index < 11; index += 1) {
    if (array[index] < 0 || array[index] > 10) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
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
