// Desafio 10
function techList(par1, name) {
  let array = [];

  if (par1.length === 0) {
    return 'Vazio!';
  }
  for (let tech of par1.sort()) {
    array.push({ tech, name });
  }
  return array;
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
