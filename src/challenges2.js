// Desafio 10
function techList(array, name) {
  let d10 = [];
  if (array.length === 0) {
    d10 = 'Vazio!';
  }
  for (let tech of array.sort()) {
    d10.push({ tech, name });
  }
  return d10;
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
