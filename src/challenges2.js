// Desafio 10
function techList(array, name) {
  let newArray = [];
  array.sort();
  for (const technologyName of array) {
    const techObject = {
      tech: technologyName,
      name: `${name}`,
    };
    newArray.push(techObject);
  }
  if (newArray.length === 0) {
    return 'Vazio!';
  }
  return newArray;
}

// Desafio 11
function firstValidation(array) {
  if (array.length !== 11) {
    return false;
  }
  return true;
}

function lessThan3MoreThan9Validation(number) {
  if (number < 0 || number > 9) {
    return false;
  }
  return true;
}

function noRepetitionsValidation(number, array) {
  let repetitions = 0;
  for (const number2 of array) {
    if (number === number2) {
      repetitions += 1;
    }
    if (repetitions >= 3) {
      return false;
    }
  }
  return true;
}

function secondValidation(array) {
  let validity = true;
  for (const number of array) {
    validity = lessThan3MoreThan9Validation(number);
    if (validity === false) {
      return false;
    }
    validity = noRepetitionsValidation(number, array);
    if (validity === false) {
      return false;
    }
  }
  return true;
}

function generatePhonePart(array, sliceStart, sliceEnd) {
  const arrayPart = array.slice(sliceStart, sliceEnd);
  const phonePart = arrayPart.join('');
  return phonePart;
}

function generatePhoneNumber(array) {
  if (!firstValidation(array)) {
    return 'Array com tamanho incorreto.';
  }
  if (!secondValidation(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  const ddd = generatePhonePart(array, 0, 2);
  const part1 = generatePhonePart(array, 2, 7);
  const part2 = generatePhonePart(array, 7, 11);
  const phoneNumber = `(${ddd}) ${part1}-${part2}`;
  return phoneNumber;
}

// Desafio 12
function verifySideIsPossible(side, [otherSide1, otherSide2]) {
  if ((side < otherSide1 + otherSide2) && (side > Math.abs(otherSide1 - otherSide2))) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  for (let index = 0; index < 3; index += 1) {
    let sidesArray = [lineA, lineB, lineC];
    let currentSide = sidesArray.splice(index, 1);
    if (!(verifySideIsPossible(currentSide, sidesArray))) {
      return false;
    }
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  let wantedNumbers = /[0-9]/g;
  let matchResult = string.match(wantedNumbers);
  let drinks = 0;

  for (const number of matchResult) {
    drinks += parseInt(number, 10);
  }
  if (drinks > 1) {
    return `${parseInt(drinks, 10)} copos de água`;
  }
  return `${parseInt(drinks, 10)} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
