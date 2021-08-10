// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let retornaObjetoModelo = [];
  tech.sort();
  if (tech.length <= 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < tech.length; index += 1) {
    let objetoModelo = {
      tech: '',
      name: '',
    };
    objetoModelo.name = name;
    objetoModelo.tech = tech[index];
    retornaObjetoModelo[index] = (objetoModelo);
  }
  return retornaObjetoModelo;
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
