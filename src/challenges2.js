// Desafio 10
function techList(techs, name) {
  if (techs.length === 0) {
    return "Vazio!"
  } else {
    techs.sort();

    let techObjects = [];

    for (index = 0; index < techs.length; index += 1) {
      let techObject = {
        "tech": techs[index],
        "name": name
      }

      techObjects.push(techObject);
    }

    return techObjects;
  }
}

console.log(techList([], "Lucas"));

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
