// Desafio 10
function techList(tech, name) {
  let techLists = [];
  tech.sort(); //.sort() para ordenar os elementos da lista.
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let itemList of tech) {
    techLists.push({  //.push() para acrescentar os novos objetos na lista.
      tech: itemList,
      name: name,
    });
  }
  return techLists;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let phoneNumberConcat = '(' + numbers[0] + numbers[1] + ') ' + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + '-' + numbers[7] + numbers[8] + numbers[9] + numbers[10];
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (num of numbers) {
    let count = 0;
    for (let second = 0; second < numbers.length; second += 1) {
      if (num === numbers[second]) {
        count += 1;
      }
      if (count >= 3 || num < 0 || num > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return phoneNumberConcat;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumAB = (lineA + lineB);
  let sumBC = (lineB + lineC);
  let sumAC = (lineA + lineC);
  let subAB = Math.abs(lineA - lineB);
  let subBC = Math.abs(lineB - lineC);
  let subAC = Math.abs(lineA - lineC);
  let result;
  if ((lineA < sumBC && lineA > subBC) || (lineB < sumAC && lineB > subAC) || (lineC < sumAB && lineC > subAB)){
    result = true;
  } else {
    result = false;
  }
  return result;
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
