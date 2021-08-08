// Desafio 10
function techList(arr, name) {
  // seu código aqui
  let sortedArray = arr.sort();
  let objectTech = {};
  let arrayTech = [];

  if (arr.length > 0) {
    for (let tech of sortedArray) {
      objectTech.name = name;
      objectTech.tech = tech;
      arrayTech.push(objectTech);
      objectTech = {};
    }
    return arrayTech;
  }
  return 'Vazio!';
}

// Desafio 11
function itemCounter(arr) {
  let items = {};
  let value;

  for (let index = 0; index <= arr.length; index += 1) {
    value = arr[index];
    if (typeof items[value] === 'undefined') {
      items[value] = 1;
    } else {
      items[value] += 1;
    }
  }

  return items;
}

function isThreeOrNineOrZero(arr) {
  for (let key in itemCounter(arr)) {
    let value = itemCounter(arr)[key];

    if (value >= 3 || key > 9 || key < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

function concatPhoneNumber(arr) {
  let phoneNumber = '';
  for (let index = 0; index < arr.length; index += 1) {
    switch (index) {
    case 0:
      phoneNumber += `(${arr[index]}`;
      break;
    case 1:
      phoneNumber += `${arr[index]}) `;
      break;
    case 6:
      phoneNumber += `${arr[index]}-`;
      break;
    default:
      phoneNumber += arr[index];
    }
  }
  return phoneNumber;
}

function generatePhoneNumber(arr) {
  // seu código aqui
  let numberPhone;

  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (isThreeOrNineOrZero(arr) === 'não é possível gerar um número de telefone com esses valores') {
    numberPhone = isThreeOrNineOrZero(arr);
    return numberPhone;
  }
  return concatPhoneNumber(arr);
}

// Desafio 12
function checkLineA(lineA, lineB, lineC) {
  let sumA = lineA < lineB + lineC;
  let subA = lineA > Math.abs(lineB - lineC);
  return sumA && subA;
}

function checkLineB(lineA, lineB, lineC) {
  let sumB = lineB < lineA + lineC;
  let subB = lineB > Math.abs(lineA - lineC);
  return sumB && subB;
}

function checkLineC(lineA, lineB, lineC) {
  let sumC = lineC < lineA + lineB;
  let subC = lineC > Math.abs(lineA - lineB);
  return sumC && subC;
}

function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  return (
    checkLineA(lineA, lineB, lineC)
    && checkLineB(lineA, lineB, lineC)
    && checkLineC(lineA, lineB, lineC)
  );
}

// Desafio 13
function hydrate(str) {
  // seu código aqui
  let regularExpression = /\d+/g;
  let arrayNumbers = str.match(regularExpression);
  let sumWaterCups = 0;

  for (let index in arrayNumbers) {
    let numberInteger = parseInt(arrayNumbers[index], 10);
    sumWaterCups += numberInteger;
  }
  if (sumWaterCups === 1) {
    return `${sumWaterCups} copo de água`;
  }
  return `${sumWaterCups} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
