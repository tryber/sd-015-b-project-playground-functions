// Desafio 10
function techList(arr, name) {
  if (arr.length < 1) {
    return 'Vazio!'
  } else {
  arr.sort()
  let techsAndNames = []

  for (let index = 0; index < arr.length; index += 1) {
    let info = {
      tech: arr[index],
      name: name,
    }

    techsAndNames.push(info)
  }

  return techsAndNames
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
