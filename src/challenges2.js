// Desafio 10
function techList(list, user) {
  let orderedList = list.sort();
  let newObject = [];

  if (list.length === 0) {
    return 'Vazio!';
  } else {
    for (let i = 0; i < list.length; i += 1) {
      newObject.push({
        tech: orderedList[i],
        name: user,
      });
    }
    return newObject;
  }
}

// Desafio 11
function isIncorrectSize(numbers) {
  if (numbers.length !== 11) {
    return true;
  } else {
    return false;
  }
}

function hasInvalidValues(numbers) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < 0 || numbers[i] > 9) {
      return true;
    }
  }

  return false;
}

function hasInvalidRepetition(numbers) {
  let repeat;

  for (let i = 0; i < numbers.length; i += 1) {
    repeat = 0;

    for (let j = i; j < numbers.length; j += 1) {
      if (numbers[i] === numbers[j]) {
        repeat += 1;
      }
    }

    if (repeat >= 3) return true;
  }

  return false;
}

function generatePhoneNumber(numbers) {
  if (isIncorrectSize(numbers)) {
    return 'Array com tamanho incorreto.';
  }

  if (hasInvalidValues(numbers) || hasInvalidRepetition(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  let phoneNumber = '(xx) xxxxx-xxxx';
  for (let i = 0; i < numbers.length; i += 1) {
    phoneNumber = phoneNumber.replace('x', numbers[i]);
  }

  return phoneNumber;
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
