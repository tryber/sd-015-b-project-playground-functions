// Desafio 10
function techList(tech, name) {
  tech = tech.sort();
  let objectTech;
  let arrayObjectTech = [];
  this.name = name;
  for (let i = 0; i < tech.length; i += 1) {
    objectTech = { tech: tech[i], name: this.name };
    arrayObjectTech.push(objectTech);
  }
  if (arrayObjectTech.length > 0) {
    return arrayObjectTech;
  }
  return 'Vazio!';
}

// Desafio 11 - consultei o repositório de Gabrielle:
// https://github.com/tryber/sd-015-b-project-playground-functions/blob/gabrielle-murat-playground-functions/src/challenges2.js
function verifyLength(array) {
  return array.length !== 11;
}

function verifyNumbersValues(array) {
  let valueError = false;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0 || array[i] > 9) {
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
function testLine(test, line1, line2) {
  if (test < (line1 + line2) && test > Math.abs(line1 - line2)) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  if (testLine(lineA, lineB, lineC) && testLine(lineB, lineA, lineC)
  && testLine(lineC, lineA, lineB)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(phrase) {
  let count = 0;
  if (phrase.length > 0) {
    let arrayNumbers = phrase.match(/\d+/g);
    for (let i = 0; i < arrayNumbers.length; i += 1) {
      count += parseInt(arrayNumbers[i], 10);
    }
  }
  if (count === 1) {
    return '1 copo de água';
  }
  return `${count} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
