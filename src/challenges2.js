// Desafio 10
function techList(techsToLearn, name) {
  // seu código aqui
  let newArray = [];
  techsToLearn.sort();

  if (techsToLearn.length === 0) {
    return 'Vazio!';
  } else {
    for (let techName of techsToLearn) {
      let techsObject = {
        tech: techName,
        name,
      };
      newArray.push(techsObject);
    } return newArray;
  }
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
