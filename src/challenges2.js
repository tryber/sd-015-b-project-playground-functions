// Desafio 10
function techList(tech, name) {
  let techList = [];
  if (tech.length === 0) {
    techList = 'Vazio!';
  } else {
    for (let indice in tech.sort()) {
      let skill ={
        tech: tech[indice],
        name: name,
      }
      techList.push(skill);
    }
  }
  return techList;

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
