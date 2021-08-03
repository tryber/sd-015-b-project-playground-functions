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
function generatePhoneNumber(numbers) {
  // seu código aqui
  if(numbers.length !== 11){
    return 'Array com tamanho incorreto.'
  }else{
    let phoneNumber = []
    for(let i = 0; i < numbers.length;i += 1){
      if(i === 0) phoneNumber.push('(')
      else if(i === 2) phoneNumber.push(') ')
      else if(i === 7) phoneNumber.push('-')
      phoneNumber.push(numbers[i])
    }
    return phoneNumber.join('')
  }
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
