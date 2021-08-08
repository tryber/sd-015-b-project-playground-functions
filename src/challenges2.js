// Desafio 10
function techList(tech, name) {
  let ListTech = [];
  if (tech.length === 0) {
    ListTech = 'Vazio!';
  } else {
    for (let indice in tech.sort()) {
      let skill ={
        tech: tech[indice],
        name: name,
      }
      ListTech.push(skill);
    }
  }
  return ListTech;
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
