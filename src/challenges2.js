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
