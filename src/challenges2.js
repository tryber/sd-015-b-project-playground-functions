// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }
  tech.sort();
  let arrayTechAndName = [];
  for (let i = 0; i < tech.length; i += 1) {
    arrayTechAndName.push({
      name,
      tech: tech[i],
    });
  }

  return arrayTechAndName;
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
