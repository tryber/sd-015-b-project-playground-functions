// Desafio 10
function createObjectsArray(array, name) {
  let newList = [];
  for (let index = 0; index < array.length; index += 1) {
    let technology = {
      tech: array[index],
      name,
    };
    newList.push(technology);
  }
  return newList;
}

function sortArray(technology) {
  return technology.sort(function (a, b) {
    if (a.tech > b.tech) {
      return 1;
    }
    if (a.tech < b.tech) {
      return -1;
    }
    return 0;
  });
}

function techList(techArray, name) {
  if (techArray.length < 1) {
    return 'Vazio!';
  }
  let technology = createObjectsArray(techArray, name);
  let sortedTechs = sortArray(technology);
  return sortedTechs;
}

// Desafio 11
function verifyLength(array) {
  return array.length !== 11;
}

function verifyNumbersValues(array) {
  let valueError = false;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      valueError = true;
    }
  }
  return valueError;
}

function verifyNumbersRepetition(array) {
  let counter = {};
  for (let number of array) {
    if (counter[number]) {
      counter[number] += 1;
    } else {
      counter[number] = 1;
    }
  }
  let repeats = (Object.values(counter).sort());
  return repeats[repeats.length - 1] > 2;
}

function compareConditions(array) {
  return (verifyNumbersRepetition(array) || verifyNumbersValues(array));
}

function formatPhoneNumber(numbersArray) {
  let array = numbersArray.join('');
  let ddd = array.slice(0, 2);
  let half1 = array.slice(2, 7);
  let half2 = array.slice(7, 11);
  return `(${ddd}) ${half1}-${half2}`;
}

function generatePhoneNumber(numbersArray) {
  if (verifyLength(numbersArray)) {
    return 'Array com tamanho incorreto.';
  }
  if (compareConditions(numbersArray)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return formatPhoneNumber(numbersArray);
}

// Desafio 12

function verifyLineA(lineA, lineB, lineC) {
  return (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC));
}

function verifyLineB(lineA, lineB, lineC) {
  return (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC));
}

function verifyLineC(lineA, lineB, lineC) {
  return (lineC < (lineB + lineA) && lineC > Math.abs(lineB - lineA));
}

function triangleCheck(lineA, lineB, lineC) {
  // eslint-disable-next-line max-len
  return verifyLineA(lineA, lineB, lineC) && verifyLineB(lineA, lineB, lineC)
    && verifyLineC(lineA, lineB, lineC);
}

// Desafio 13

function sumNumbers(array) {
  let result = 0;
  for (let index = 0; index < array.length; index += 1) {
    result += Number.parseInt(array[index], 10);
  }
  return result;
}
function hydrate(drinks) {
  let regExp = /\d+/g;
  let amounts = sumNumbers(drinks.match(regExp));
  if (amounts > 1) {
    return `${amounts} copos de água`;
  }
  return `${amounts} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
