/* eslint-disable max-lines-per-function */
// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let techAux = tech.sort();
  let recebe = [];

  if (techAux.length === 0) {
    return 'Vazio!';
  }

  for (let i = 0; i < techAux.length; i += 1) {
    let listObject = {
      tech: techAux[i],
      name: name
    };
    recebe.push(listObject);
  }
  return recebe;
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
