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
    return 'Array com tamanho incorreto.';
  } for (let number in numbers) {
      if (numbers[number] > 9 || numbers[number] < 0) {
        return 'não é possível gerar um número de telefone com esses valores';
      } counter[numbers[number]] += 1;
        if (counter[numbers[number]] >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        } verifiedNumbers.push(numbers[number]);
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

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui6
  if ((lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) && (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC))
  && (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB))) {
    return true;
  } return false;
}

// Desafio 13
function hydrate(listaBebidas) {
  // seu código aqui
  let numeros = [];
  for (let characteres in listaBebidas) {
    if (listaBebidas[characteres] > 0) {
      numeros.push(parseInt(listaBebidas[characteres], 10));
    }
  }
  let soma = 0;
  for (let index = 0; index < numeros.length; index += 1) {
    soma += numeros[index];
  }
  if (soma > 1) {
    return `${soma} copos de água`;
  } return `${soma} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
