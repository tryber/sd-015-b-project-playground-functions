// Desafio 10
function techList(tech, name) {
  let ArrayDeTech = [];
  tech.sort();
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < tech.length; index++) {
    let objetos = {};
    objetos.tech = tech[index];
    objetos.name = name;
    ArrayDeTech.push(objetos);
  }

  return ArrayDeTech;
}

// Desafio 11
function generatePhoneNumber() {

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
