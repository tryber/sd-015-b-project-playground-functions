// Desafio 10
function techList(arrOfTechs, name) {
  if (arrOfTechs.length === 0) {
    return 'Vazio!';
  }

  let list = [];

  arrOfTechs.sort();
  for (let tech of arrOfTechs) {
    list.push({ tech, name });
  }

  return list;
}

// Desafio 11
function validateArraySize(phoneNumber) {
  if (phoneNumber.length !== 11) {
    return false;
  }

  return true;
}

function checkRepeatingNumbers(phoneNumber, i) {
  let repeatedNumbersCount = 0;

  for (let j = 0; j < phoneNumber.length; j += 1) {
    if (phoneNumber[i] === phoneNumber[j]) {
      repeatedNumbersCount += 1;
    }
  }

  return repeatedNumbersCount;
}
function isRepeatedNumbers(phoneNumber) {
  for (let i = 0; i < phoneNumber.length; i += 1) {
    let repeatedNumbersCount = checkRepeatingNumbers(phoneNumber, i);

    if (repeatedNumbersCount >= 3) {
      return false;
    }
  }

  return true;
}

function validateArrayValue(phoneNumber) {
  for (let i of phoneNumber) {
    if (i < 0 || i > 9) {
      return false;
    }
  }

  return true;
}

function getErrorMessage(phoneNumber) {
  if (!validateArraySize(phoneNumber)) return 'Array com tamanho incorreto.';
  if (!isRepeatedNumbers(phoneNumber) || !validateArrayValue(phoneNumber)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
}

function isValidNumber(phoneNumber) {
  let isValid = validateArraySize(phoneNumber) && validateArrayValue(phoneNumber);
  return isValid && isRepeatedNumbers(phoneNumber);
}

function getDDD(phoneNumber) {
  let ddd = [];
  for (let i = 0; i < 2; i += 1) {
    ddd.push(phoneNumber[i]);
  }

  return ddd.join('');
}

function getFirstPart(phoneNumber) {
  let firstPart = [];
  for (let i = 2; i < 7; i += 1) {
    firstPart.push(phoneNumber[i]);
  }

  return firstPart.join('');
}

function getSecondPart(phoneNumber) {
  let secondPart = [];
  for (let i = 7; i < phoneNumber.length; i += 1) {
    secondPart.push(phoneNumber[i]);
  }

  return secondPart.join('');
}

function generatePhoneNumber(phoneNumber) {
  if (!isValidNumber(phoneNumber)) return getErrorMessage(phoneNumber);

  return `(${getDDD(phoneNumber)}) ${getFirstPart(phoneNumber)}-${getSecondPart(phoneNumber)}`;
}

// Desafio 12
function isLineAValid(lineA, lineB, lineC) {
  let isValid = true;

  if (lineA > lineB + lineC || lineA < Math.abs(lineB - lineC)) isValid = false;

  return isValid;
}

function isLineBValid(lineA, lineB, lineC) {
  let isValid = true;

  if (lineB > lineA + lineC || lineA < Math.abs(lineA - lineC)) isValid = false;

  return isValid;
}

function isLineCValid(lineA, lineB, lineC) {
  let isValid = true;

  if (lineC > lineA + lineB || lineA < Math.abs(lineA - lineB)) isValid = false;

  return isValid;
}

function triangleCheck(lineA, lineB, lineC) {
  let isTriangle = isLineAValid(lineA, lineB, lineC) && isLineBValid(lineA, lineB, lineC);
  return isTriangle && isLineCValid(lineA, lineB, lineC);
}

// Desafio 13
function getIntegers(string) {
  let regex = /\d+/g;
  let arrOfNumbers = string.match(regex);
  let arrOfIntegers = [];

  for (let i = 0; i < arrOfNumbers.length; i += 1) {
    arrOfIntegers[i] = parseInt(arrOfNumbers[i], 10);
  }
  return arrOfIntegers;
}

function hydrate(string) {
  let sumOfDrinks = 0;
  let arrOfIntegers = getIntegers(string);

  for (let i of arrOfIntegers) {
    sumOfDrinks += i;
  }

  if (sumOfDrinks === 1) return `${sumOfDrinks} copo de água`;

  return `${sumOfDrinks} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
