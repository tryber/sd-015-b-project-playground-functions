// Início das funções auxiliares para o desafio 11
function lessZeroOrGreaterNine(value) {
  for (let item of value) {
    if (item < 0 || item > 9) return false;
  }
}

function repeatThree(value) {
  let sorted = [...value].sort();

  for (let index = 0; index < value.length; index += 1) {
    let current = sorted[index];
    let next = sorted[index + 1];
    let previous = sorted[index - 1];

    if (current === previous && current === next) {
      return false;
    }
  }
}

function verificationStatus(value) {
  let status = true;
  let statusOptions = [lessZeroOrGreaterNine(value), repeatThree(value)];
  let stopMsg = 'não é possível gerar um número de telefone com esses valores';

  for (let index = 0; index < statusOptions.length; index += 1) {
    if (statusOptions[index] === false) status = stopMsg;
  }

  return status;
}

function phoneNumber(value) {
  let strPhoneNumber = value.join('').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  return strPhoneNumber;
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
  if (arr.length !== 11) return 'Array com tamanho incorreto.';

  return (verificationStatus(arr) !== true) ? verificationStatus(arr) : phoneNumber(arr);
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
