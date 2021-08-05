// Desafio 10
function createObjectsArray(array, name) {
  let newList = [];
  for (let index = 0; index < array.length; index += 1) {
    let technology = {
      tech: array[index],
      name,
    };
    newList.push(technology);
  }
  return newList;
}

function sortArray(technology) {
  return technology.sort(function (a, b) {
    if (a.tech > b.tech) {
      return 1;
    }
    if (a.tech < b.tech) {
      return -1;
    }
    return 0;
  });
}

function techList(techArray, name) {
  if (techArray.length < 1) {
    return 'Vazio!';
  }
  let technology = createObjectsArray(techArray, name);
  let sortedTechs = sortArray(technology);
  return sortedTechs;
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
