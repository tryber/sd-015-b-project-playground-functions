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
function generatePhoneNumber(arr) {
  let phoneNumber = ''
  
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.'
  }

  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] < 0 || arr[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }

  for (let index = 0; index < arr.length; index += 1) {
    let count = 0
    for (let comparate = 0; comparate < arr.length; comparate += 1) {
      if (arr[index] === arr[comparate]) {
        count += 1
      }
    }
    if (count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }

  for (let index = 0; index < arr.length; index += 1) {
    switch(index) {
      case 0:
        phoneNumber += `(${arr[index]}`
        break

      case 1:
        phoneNumber += `${arr[index]}) `
        break

      case 6:
        phoneNumber += `${arr[index]}-`
        break

      default:
        phoneNumber += arr[index]
    }
  }

  return phoneNumber
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
