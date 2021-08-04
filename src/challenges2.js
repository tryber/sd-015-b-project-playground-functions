// Desafio 10
function techList(tecnologias, name) {
  // seu código aqui
  if (tecnologias.length === 0){
    return 'Vazio!'
  } else {
    tecnologias.sort();
  }

  let nameTecnologias = [];

  for (let index = 0; index < tecnologias.length; index += 1){
    let objNemaTecnologias = {
      tech: tecnologias[index],
      name: name
    }
    nameTecnologias.push(objNemaTecnologias);
  }
  return nameTecnologias
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

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Wander'))