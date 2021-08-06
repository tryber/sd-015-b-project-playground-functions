// Desafio 10
function techList(techNames, names) {
  let finalPhrase = [];
  if (techNames.length === 0) {
    return 'Vazio!';
  }

  for (let index in techNames) {
    techNames.sort();
    let info = {
      tech: techNames[index],
      name: names,
    };
    finalPhrase.push(info);
  }
  return finalPhrase;
}

// Desafio 11

function arrayNumbersRepeatedValid(numbers) {
  let countRepeatition = 0;
  let testNumber = 0;
  let testValid = true;
  for (let index in numbers) {
    testNumber = numbers[index];
    for (let index2 in numbers) {
      if (testNumber === numbers[index2]) {
        countRepeatition += 1;
      }
    }
    if (countRepeatition >= 3) {
      testValid = false;
    }
    countRepeatition = 0;
  }
  return testValid;
}
function arrayLengthValid(numbers) {
  let valid = true;
  if (numbers.length !== 11) {
    valid = false;
  }
  return valid;
}
function arrayNumbersValid(numbers) {
  let valid = true;
  for (let index in numbers) {
    if (numbers[index] > 9 || numbers[index] < 0) {
      valid = false;
    }
  }
  return valid;
}
function generatePhoneNumber(numbers) {
  if (arrayLengthValid(numbers) === false) {
    return 'Array com tamanho incorreto.';
  } if (arrayNumbersValid(numbers) === false || arrayNumbersRepeatedValid(numbers) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let formatedNumber = `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
  return formatedNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > (Math.abs(lineB - lineC))) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(drinks) {
  let numberOfDrinks = drinks.match(/[0-9]+/g);
  let totalWater = 0;
  for (let index in numberOfDrinks) {
    let numberDrinks = parseInt(numberOfDrinks[index]);
    totalWater += numberDrinks;
  }
  if (totalWater === 1) {
    return `${totalWater} copo de água`;
  }

  return `${totalWater} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
