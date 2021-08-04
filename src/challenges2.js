// Desafio 10
function techList(techs, name) {
  if (techs.length === 0) {
    return 'Vazio!';
  }

  techs.sort();

  let techObjects = [];

  for (let index = 0; index < techs.length; index += 1) {
    let techObject = {
      tech: techs[index],
      name,
    };

    techObjects.push(techObject);
  }

  return techObjects;
}

// Desafio 11
function checkArrayLength(array) {
  return (array.length !== 11);
}

function checkArrayContents(array) {
  let isAValidDigit = true;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      isAValidDigit = false;
    }
  }
  return isAValidDigit;
}

function countRepeatedDigits(array) {
  let numberCount = {};

  for (let index = 0; index < array.length; index += 1) {
    if (numberCount[array[index]]) {
      numberCount[array[index]] += 1;
    } else {
      numberCount[array[index]] = 1;
    }
  }

  return numberCount;
}

function checkRepeatedDigits(array) {
  let isAValidNumber = true;
  let countingArray = Object.values(countRepeatedDigits(array));

  for (let index = 0; index < countingArray.length; index += 1) {
    if (countingArray[index] >= 3) {
      isAValidNumber = false;
    }
  }

  return isAValidNumber;
}
function generatePhoneNumber(numbers) {
  if (checkArrayLength(numbers)) {
    return 'Array com tamanho incorreto.';
  }

  if (checkArrayContents(numbers) === false || checkRepeatedDigits(numbers) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return numbers.join('').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}

// Desafio 12
function lineCheck(line1, line2, line3) {
  return line1 < line2 + line3 && line1 > Math.abs(line2 - line3);
}

function triangleCheck(lineA, lineB, lineC) {
  return lineCheck(lineA, lineB, lineC)
  && lineCheck(lineB, lineA, lineC)
  && lineCheck(lineC, lineA, lineB);
}

// Desafio 13
function hydrate(string) {
  let drinksQuantities = string.match(/\d+/g);
  let waterCupsQuantity = 0;
  for (let index = 0; index < drinksQuantities.length; index += 1) {
    waterCupsQuantity += parseInt(drinksQuantities[index], 10);
  }
  if (waterCupsQuantity > 1) {
    return `${waterCupsQuantity} copos de água`;
  }
  return `${waterCupsQuantity} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
