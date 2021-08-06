// Início das funções auxiliares para o desafio 11
function lessThanZero(value) {
  for (let item of value) {
    if (item < 0) return false;
  }
}

function greaterThanNine(value) {
  for (let item of value) {
    if (item > 9) return false;
  }
}
// Fim das funções auxiliares para o desafio 11

// Desafio 10
function techList(arr, name) {
  if (arr.length < 1) {
    return 'Vazio!';
  }

  arr.sort();
  let techsAndNames = [];

  for (let index = 0; index < arr.length; index += 1) {
    let info = {
      tech: arr[index],
      name,
    };

    techsAndNames.push(info);
  }

  return techsAndNames;
}

// Desafio 11
function generatePhoneNumber(arr) {
  let phoneNumber = '';

  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < arr.length; index += 1) {
    let count = 0;
    for (let comparate = 0; comparate < arr.length; comparate += 1) {
      if (arr[index] === arr[comparate]) {
        count += 1;
      }
    }
    if (arr[index] < 0 || arr[index] > 9 || count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  for (let index = 0; index < arr.length; index += 1) {
    switch (index) {
    case 0:
      phoneNumber += `(${arr[index]}`;
      break;
    case 1:
      phoneNumber += `${arr[index]}) `;
      break;
    case 6:
      phoneNumber += `${arr[index]}-`;
      break;
    default:
      phoneNumber += arr[index];
    }
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineB < (lineA + lineC)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(str) {
  let onlyNumbers = str.replace(/\D/g, '');
  let count = 0;

  for (let index = 0; index < onlyNumbers.length; index += 1) {
    count += parseInt(onlyNumbers[index], 10);
  }

  if (count <= 1) {
    return `${count} copo de água`;
  }
  return `${count} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
