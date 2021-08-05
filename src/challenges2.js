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

function checkRepeatingNumbers(phoneNumber) {
  for (let i in phoneNumber) {
    let repeatedNumbersCount = 0;
    for (let j = 0; j < phoneNumber.length; j += 1) {
      if (phoneNumber[i] === phoneNumber[j]) {
        repeatedNumbersCount += 1;
      }
    }
    if (repeatedNumbersCount >= 3) { 
      return false;
    };
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
  if (!checkRepeatingNumbers(phoneNumber) || !validateArrayValue(phoneNumber)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
}

function isValidNumber(phoneNumber) {
  return validateArraySize(phoneNumber) && validateArrayValue(phoneNumber) && checkRepeatingNumbers(phoneNumber);
}

function getDDD(phoneNumber) {
  let ddd = []
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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function getIntegers(string) {
  let regex = /\d+/g;
  let arrOfNumbers = string.match(regex);
  let arrOfIntegers = [];

  for (let i in arrOfNumbers) {
    arrOfIntegers[i] = parseInt(arrOfNumbers[i]);
  }
  return arrOfIntegers;
}

function hydrate(string) {
  let sumOfDrinks = 0;
  let arrOfIntegers = getIntegers(string);

  for (let i in arrOfIntegers) {
    sumOfDrinks += arrOfIntegers[i];
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
