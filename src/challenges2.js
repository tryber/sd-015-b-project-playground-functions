// Desafio 10
function techList(array, name) {
  let newArray = [];
  array.sort();
  for (const technologyName of array) {
    const techObject = {
      tech: technologyName,
      name: `${name}`,
    };
    newArray.push(techObject);
  }
  if (newArray.length === 0) {
    return 'Vazio!';
  }
  return newArray;
}
techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas");

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
