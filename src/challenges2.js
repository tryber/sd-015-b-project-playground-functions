// Desafio 10
function techList(arrayTecnologies, name) {
  arrayTecnologies = arrayTecnologies.sort();
  let objectTech;
  let arrayObjectTech = [];
  this.name = name;
  for (let index = 0; index < arrayTecnologies.length; index += 1) {
    objectTech = { tech: arrayTecnologies[index], name: this.name };
    arrayObjectTech.push(objectTech);
  }
  if (arrayObjectTech.length > 0) {
    return arrayObjectTech;
  }
  return 'Vazio!';
}

// Desafio 11
function testNumOccurrences(arrayNumber, number, maxRepeat) {
  if (arrayNumber.reduce((acc, cur) => (cur === number ? acc + 1 : acc), 0) >= maxRepeat) {
    return true;
  }
  return false;
}

function thereInvalidNumber(arrayNumber) {
  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] < 0 || arrayNumber[index] > 9) {
      return true;
    }
  }
  return false;
}

function thereNumberRepeted3Times(arrayNumber) {
  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (testNumOccurrences(arrayNumber, arrayNumber[index], 3)) {
      return true;
    }
  }
  return false;
}

function generatePhoneNumber(arrayNumber) {
  let result = '';
  if (arrayNumber.length !== 11) {
    result = 'Array com tamanho incorreto.';
  } else if ((thereInvalidNumber(arrayNumber)) || (thereNumberRepeted3Times(arrayNumber))) {
    result = 'não é possível gerar um número de telefone com esses valores';
  } else {
    let phoneNumber = arrayNumber.join('');
    result = phoneNumber.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }
  return result;
}

// Desafio 12
function isTria(sideTest, line1, line2) {
  if (sideTest < (line1 + line2) && sideTest > Math.abs(line1 - line2)) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  if (isTria(lineA, lineB, lineC) && isTria(lineB, lineA, lineC) && isTria(lineC, lineA, lineB)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(phrase) {
  let counter = 0;
  if (phrase.length > 0) {
    let arrayNumbers = phrase.match(/\d+/g);
    for (let index = 0; index < arrayNumbers.length; index += 1) {
      counter += parseInt(arrayNumbers[index], 10);
    }
  }
  if (counter === 1) {
    return '1 copo de água';
  }
  return (`${counter} copos de água`);
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
