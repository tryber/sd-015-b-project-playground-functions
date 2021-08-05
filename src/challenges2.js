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
  for (let i in phoneNumber) {
    if (phoneNumber[i] < 0 || phoneNumber[i] > 9) {
      return false;
    }
  }

  return true;
}

function isValidNumber(phoneNumber) {
  return validateArraySize(phoneNumber) && validateArrayValue(phoneNumber) && checkRepeatingNumbers(phoneNumber);
}

function phoneNumberMask() {
  let maskedArr = ['(', 0, 0, ')', 0, 0, 0, 0, 0, '-', 0, 0, 0, 0,];
  return maskedArr;
}

function generatePhoneNumber(phoneNumber) {
  if (!isValidNumber(phoneNumber)) return 'Array inválido';

  for (let i in phoneNumberMask()) {

  }
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function getIntegers(string) {
  
}

function hydrate(string) {
  
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
