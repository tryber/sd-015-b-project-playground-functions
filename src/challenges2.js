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
  let index;
  let value;

  for (index in arr) {
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
  let numberPhone = [];

  for (let number of arr) {
    numberPhone.push(number);
  }
  let strNumberPhone = `(${numberPhone[0]}${numberPhone[1]}) ${numberPhone[2]}${numberPhone[3]}${numberPhone[4]}
                         ${numberPhone[5]}${numberPhone[6]}-${numberPhone[7]}${numberPhone[8]}${numberPhone[9]}${numberPhone[10]}`;

  return strNumberPhone;
}

function generatePhoneNumber(arr) {
  // seu código aqui
  let numberPhone;

  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (
    isThreeOrNineOrZero(arr) ===
    'não é possível gerar um número de telefone com esses valores'
  ) {
    numberPhone = isThreeOrNineOrZero(arr);
    return numberPhone;
  }
  return concatPhoneNumber(arr);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let somaAB = lineA + lineB;
  let somaAC = lineA + lineC;
  let somaBC = lineB + lineC;
  let subAB = Math.abs(lineA - lineB);
  let subAC = Math.abs(lineA - lineC);
  let subBC = Math.abs(lineB - lineC);
  if (
    lineA > somaBC ||
    lineA < subBC ||
    lineB > somaAC ||
    lineB < subAC ||
    lineC > somaAB ||
    lineC < subAB
  ) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(str) {
  // seu código aqui
  let regularExpression = /\d+/g;
  let arrayNumbers = str.match(regularExpression);
  let sumWaterCups = 0;

  for (let index in arrayNumbers) {
    let numberInteger = parseInt(arrayNumbers[index]);
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
