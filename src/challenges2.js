// Desafio 10
function techList(tech, name) {
  let techLists = [];
  tech.sort(); //.sort() para ordenar os elementos da lista.
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let itemList of tech) {
    techLists.push({  //.push() para acrescentar os novos objetos na lista.
      tech: itemList,
      name: name, }); 
  }
  return techLists
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código )aqui
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
