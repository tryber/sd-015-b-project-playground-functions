// Desafio 10
function techList(arrayTech, name) {
  let orderedArray = arrayTech.sort();
  let techObject = {};
  let arrayObjects = [];

  if (arrayTech.length > 0) {
    for (let tech of orderedArray) {
      techObject.tech = tech;
      techObject.name = name;
      arrayObjects.push(techObject);
      techObject = {};
    }
    return arrayObjects;
  }
  return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  if (arrayNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
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
