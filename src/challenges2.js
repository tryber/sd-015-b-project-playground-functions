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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
