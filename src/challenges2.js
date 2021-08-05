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
function generatePhoneNumber(array) {
  // seu código aqui
  let cont = 0
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.'
  }

  for (let index of array) {
    if (index < 0 || index > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }
  for (let index in array) {
    cont = 0
    for (let index2 in array) {
      if (array[index] === array[index2]){
        cont += 1
        if (cont >= 3) {
          return 'não é possível gerar um número de telefone com esses valores'
        }
      }   
    }
  }
  
  return '(' + array[0] + array[1] + ')' + ' ' + array[2] + array[3] + array [4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10]
}  


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true
  } else if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    return true
  } else if (lineC < (lineB + lineA) && lineC > Math.abs(lineA - lineB)) {
    return true
  } else {
    return false
  }
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let numstr = string.match(/\d+/g)
  let numbers = []
  let soma = 0

  for (let index of numstr) {
    numbers.push(parseInt(index))
  }
  
  for (let cont in numbers) {
    soma += numbers[cont]
  }

  if (soma === 1) {
  return soma + ' copo de água'
  } else {
    return soma + ' copos de água'

  }
  
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
