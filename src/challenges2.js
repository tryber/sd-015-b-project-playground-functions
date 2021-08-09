// Desafio 10
function techList(technologies, name) {
  // seu código aqui
  let newList = [];
  technologies.sort();
  for (let tech in technologies) {
    let object = {
      tech: '',
      name: '',
    };
    object.tech = technologies[tech];
    object.name = name;
    newList.push(object);
  }
  if (newList.length < 1) {
    return 'Vazio!';
  } return newList;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  // seu código aqui
  let verifiedNumbers = [];
  let counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.'
  } else {
    for (let number in numbers) {
      if (numbers[number] > 9 || numbers[number] < 0) {
        return 'não é possível gerar um número de telefone com esses valores';
      } else {
        counter[numbers[number]] += 1;
        if (counter[numbers[number]] >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        } else {
        verifiedNumbers.push(numbers[number]);
        }
      }
    }
    let phoneModel = ['(', '_', '_', ')', ' ', '_', '_', '_', '_', '_', '-', '_', '_', '_', '_'];
    for (let character in phoneModel) {
      if (phoneModel[character] === '_') {
        let nextNumber = verifiedNumbers.shift();
        phoneModel[character] = nextNumber;
      }
    }
    return phoneModel.join('');
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
