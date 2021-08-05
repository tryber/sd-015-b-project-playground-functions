// Desafio 10
function techList(arrayTech, name) {
  let arr = arrayTech.sort();
  let arrayTechList = [];

  if (arr.length === 0) {
    return 'Vazio!';
  } { for (let index = 0; index < arr.length; index += 1) {
    arrayTechList.push({
      tech: arr[index],
      name: name,
    });
  }
  }
  return arrayTechList;
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
