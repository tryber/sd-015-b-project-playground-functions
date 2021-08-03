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
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.'
  } else if (verificationOfPhoneNumber(numbers) === true && verificationOfNumberRepetition(numbers)) {
    let phoneNumber = []
    for (let i = 0; i < numbers.length; i += 1) {
      if (i === 0) phoneNumber.push('(')
      else if (i === 2) phoneNumber.push(') ')
      else if (i === 7) phoneNumber.push('-')
      phoneNumber.push(numbers[i])
    }
    return phoneNumber.join('')
  } else {
    return 'não é possível gerar um número de telefone com esses valores'
  }
}

function verificationOfPhoneNumber(numbers) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < 0 || numbers[i] > 9) {
      return false
    }
  }
  return true
}
function verificationOfNumberRepetition(numbers) {
  let validNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  for (let i = 0; i < numbers.length; i += 1) {
    let cont = 0

    for (let j = 0; j < numbers.length; j += 1) {
      if (validNumbers[i] === numbers[j]){
        cont += 1
      }
      if(cont >= 3){
        return false
      }
    }
  }
  return true
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if(Math.abs(lineB - lineC) < lineA && lineA < (lineB + lineC) && Math.abs(lineA - lineC) < lineB && lineB < (lineA + lineC) && Math.abs(lineA - lineB) < lineC && lineC < (lineA + lineB)) return true
  else return false
}

// Desafio 13
function hydrate(string) {
  // seu código aqui

  // Peguei essa parte do stack overflow link: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
  let regex = /\d+/g
  let matches = string.match(regex)
  // --------------------------------------------------------------
  let sum = 0
  let finalString = ''

  for(number of matches){
    sum += parseInt(number)
  }
  
  if(sum > 1){
    finalString = `${sum} copos de água`
  }else {
    finalString = `${sum} copo de água`
  }
  return finalString
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
