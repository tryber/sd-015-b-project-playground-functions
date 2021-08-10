// Desafio 10
function techList(array, name) {
  // seu código aqui
  let obj = [];
  if (array.length === 0) {
    return "Vazio!";
  }
  array.sort();
  for (let i = 0; i < array.length; i += 1) {
    obj.push({
      tech: array[i],
      name,
    });
  }
  return obj;
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let format = "(xx) xxxxx-xxxx";
  if (array.length != 11) {
    return "Array com tamanho incorreto.";
  }
  for (let i = 0; i < array.length; i += 1) {
    let count = 0;
    if (array[i] < 0 || array[i] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    for (let i2 = 0; i2 < array.length; i2 += 1) {
      if (array[i] === array[i2]) {
        count += 1;
      }
      if (count > 2) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    format = format.replace("x", array[i]);
  }
  return format;
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
