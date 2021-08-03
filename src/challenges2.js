// Desafio 10
function techList(array, name) {
  // seu código aqui
  if (array.length > 0) {
    let techList = []
    array = array.sort()
    for (let i = 0; i < array.length; i += 1) {
      let obj = {
        tech: array[i],
        name: name,
      }
      techList.push(obj)
    }
    return techList
  } else {
    return 'Vazio!'
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
