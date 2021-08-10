// Desafio 10
function techList(techArray, name) {
  let newTechArray = [];

  if (techArray.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < techArray.length; index += 1) {
    let techObject = {
      tech: techArray.sort()[index],
      name,
    };
    newTechArray.push(techObject);
  }
  return newTechArray;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'],
  'Lucas'));
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
