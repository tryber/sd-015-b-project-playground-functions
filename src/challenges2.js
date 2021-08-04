// Desafio 10
function techList(techs, name) {
  if (techs.length === 0) {
    return "Vazio!"
  } else {
    techs.sort();

    let techObjects = [];

    for (index = 0; index < techs.length; index += 1) {
      let techObject = {
        "tech": techs[index],
        "name": name
      }

      techObjects.push(techObject);
    }

    return techObjects;
  }
}

// Desafio 11
function generatePhoneNumber(numbers) {
  if (checkArrayContents(numbers) && checkArrayLength(numbers) && checkRepeatedDigits(numbers)) {
    return "(" + numbers[0] + numbers[1] + ") " + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + "-" + numbers[7] + numbers[8] + numbers[9] + numbers[10]; 
  }
  
  if (checkArrayLength(numbers) === false) {
    return "Array com tamanho incorreto."
  }
  
  if (checkArrayContents(numbers) === false || checkRepeatedDigits(numbers) === false) {
    return "não é possível gerar um número de telefone com esses valores";
  }
}

function checkArrayLength(array) {
  return (array.length === 11);
}

function checkArrayContents(array) {
  let isAValidDigit = true;

  for (index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      isAValidDigit = false;
    }
  }
  return isAValidDigit;
}

function checkRepeatedDigits(array) {
  let isAValidNumber = true;
  let numberCount = {}

  for (index = 0; index < array.length; index += 1) {
    if (numberCount[array[index]]) {
      numberCount[array[index]] += 1;
    } else {
      numberCount[array[index]] = 1;
    }
  }

  let countingArray = Object.values(numberCount);

  for (index = 0; index < countingArray.length; index += 1) {
    if (countingArray[index] >= 3) {
      isAValidNumber = false;
    }
  }

  return isAValidNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return lineCheck(lineA, lineB, lineC) && lineCheck(lineB, lineA, lineC) && lineCheck(lineC, lineA, lineB);
}

function lineCheck(line1, line2, line3) {
  return line1 < line2 + line3 && line1 > Math.abs(line2 - line3);
}

// Desafio 13
function hydrate(string) {
  let drinksQuantities = string.match(/\d+/g);
  let waterCupsQuantity = 0;
  for (index = 0; index < drinksQuantities.length; index += 1) {
    waterCupsQuantity += parseInt(drinksQuantities[index]);
  }
  if (waterCupsQuantity > 1) {
    return waterCupsQuantity + " copos de água";
  } else {
    return waterCupsQuantity + " copo de água";
  }
  
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
