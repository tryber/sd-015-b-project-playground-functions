// Desafio 10
function techList(tech, name) {
  if (tech.length > 0) {
    let techAndName = [];
    tech.sort();
    for (let index of tech) {
      let store = {};
      store.name = name;
      store.tech = tech;
      techAndName.push(store);
    }
    return techAndName;
  } else {
    return 'Vazio!';
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
