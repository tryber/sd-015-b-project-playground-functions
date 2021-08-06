// Desafio 10
function techList(array, nome) {
  let arrayObj = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let key in array) {
    arrayObj[key] = { tech: array[key], name: nome };
  }
  return arrayObj;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
