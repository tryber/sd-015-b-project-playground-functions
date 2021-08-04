// Desafio 10
function techList(arrayDeNomes, name) {
  let array = [];
  let arrayNomes = arrayDeNomes.sort();
  if (arrayNomes.length === 0) {
    return 'Vazio!';
  } else {
    for (let index = 0; index < arrayNomes.length; index += 1) {
      array.push(
        (objeto = {
          tech: arrayNomes[index],
          name: name,
        }),
      );
    }
  }
  return array;
  // seu código aqui
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
