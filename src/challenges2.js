// Desafio 10
function techList(array, name) {
  let output = [];

  for (let index = 0; index < array.length; index++) {
    output.push({
      name: name,
      tech: array[index],
    });
  }

  if (output.length === 0) {
    return 'Vazio!';
  }

  output.sort(function (x, y) {
    x = x.tech.toUpperCase();
    y = y.tech.toUpperCase();

    if (x > y) {
      return 1;
    }
    if (x < y) {
      return -1;
    }
    return 0;
  });

  return output;
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
