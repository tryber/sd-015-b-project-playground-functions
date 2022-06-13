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
function checkLength(array, length) {
  return (array.length !== length);
}

function checkOneDigit(numbers) {
  let isValid = true;

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      isValid = false;
    }
  }
  return isValid;
}

function countRepetitions(array) {
  let repetitionCounter = {};

  for (let index = 0; index < array.length; index += 1) {
    if (repetitionCounter[array[index]]) {
      repetitionCounter[array[index]] += 1;
    } else {
      repetitionCounter[array[index]] = 1;
    }
  }

  return repetitionCounter;
}

function checkRepetitions(array) {
  let isValid = true;
  let repetitions = Object.values(countRepetitions(array));

  for (let index = 0; index < repetitions.length; index += 1) {
    if (repetitions[index] >= 3) {
      isValid = false;
    }
  }

  return isValid;
}

function checkDigits(numbers) {
  return !checkOneDigit(numbers) || !checkRepetitions(numbers);
}

function generatePhoneNumber(numbers) {
  if (checkLength(numbers, 11)) {
    return 'Array com tamanho incorreto.';
  }

  if (checkDigits(numbers)) {
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
