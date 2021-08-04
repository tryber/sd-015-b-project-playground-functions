// Desafio 10
function techList(array, name) {
  array.sort();
  let result = [];

  for (let i of array) {
    result.push({
      tech: i, 
      name: name
    });
  }
  if (array.length === 0) {
    return 'Vazio!';
  } else {
    return result;
  }
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
