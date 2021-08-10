// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    array = "Vazio!";
  } else {
    array = array.sort();
    for (let i in array) {
      if (array[i]) {
        array[i] = {
          tech: array[i],
          name: name,
        }
      }
    }
  }
  return array
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
