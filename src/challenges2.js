// Desafio 10
function techList(tech, name) {
  let sortTechnologies = tech.sort();
  let result = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }

  for (let index = 0; index < sortTechnologies.length; index += 1) {
    let technologiesByName = {
      tech: sortTechnologies[index],
      name: name
    }
    result.push(technologiesByName);
  }
  return result;
}

// Desafio 11
function generatePhoneNumber(arrayOfNumber) {
  // digite seu codigo aqui
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB)) {
    return true;
  } else {
    return false;
  }
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
