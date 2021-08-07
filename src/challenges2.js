// Desafio 10
function techList(tech, name) {
  if (tech.length > 0) {
    let techAndName = [];
    tech.sort();
    for (let index = 0; index < tech.length; index += 1) {
      let store = {};
      store.name = name;
      store.tech = tech[index];
      techAndName.push(store);
    }
    return techAndName;
  }
  return 'Vazio!';
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
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
