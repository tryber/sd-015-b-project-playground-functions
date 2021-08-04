// Desafio 10
function techList(array, name) {
  // seu código aqui
  let list = []
  array.sort()

  if (array.length === 0) {
    return 'Vazio!'
  } else {
  for (let index = 0; index < array.length; index += 1) {
    list.push({
    tech: array[index],
    name: name
    })
  }
  return list
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
