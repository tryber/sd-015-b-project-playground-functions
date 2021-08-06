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
function generatePhoneNumber(numbers) {
  let phoneNumber = '(xx) xxxxx-xxxx';
  for (let i = 0; i < numbers.length; i += 1) {
    phoneNumber = phoneNumber.replace('x', numbers[i]);
    if (numbers[i] < 0 || numbers[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto';
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
