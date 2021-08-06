// Desafio 10
function techList(tech, name) {
  function bigger(a, b) {
    if (a < b) return -1;
    return 1;
  }
  if (tech.length < 1) {
    return 'Vazio!';
  }
  let sortedTec = tech.sort(bigger);
  let result = [];
  for (let i = 0; i < sortedTec.length; i += 1) {
    let languages = {
      tech: sortedTec[i],
      name,
    };
    result.push(languages);
  }
  return result;
}

// Desafio 11
//    falta a parte do número se repetir 3x ou mais
function generatePhoneNumber(a) {
  let phoneNumber = '';
  let count = 1;
  if (a.length != 11) return 'Array com tamanho incorreto.';
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] < 0 || a[i] > 9) return 'não é possível gerar um número de telefone com esses valores';
    if (i === 0) phoneNumber += '(';
    if (i === 2) phoneNumber += ') ';
    if (i === 7) phoneNumber += '-';
    phoneNumber += a[i];
    for (let j = i + 1; j < a.length; j += 1) {
      if (a[i] === a[j]) count += 1
      if (count > 4) return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumAB = lineA + lineB;
  let sumAC = lineA + lineC;
  let sumBC = lineB + lineC;
  let diffAB = lineA - lineB;
  let diffAC = lineA - lineC;
  let diffBC = lineB - lineC;
  if (lineA < sumBC && lineA > Math.abs(diffBC)) {
    return true;
  }
  if (lineB < sumAC && lineB > Math.abs(diffAC)) {
    return true;
  }
  if (lineC < sumAB && lineC > Math.abs(diffAB)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(a) {
  let drinks = /\d+/g;
  let water = a.match(drinks);
  let waterString = water.toString();
  let waterNumbers = waterString.split(',').map(Number);
  let cupsOfWater = 0;
  for (let i = 0; i < waterNumbers.length; i += 1) {
    cupsOfWater += waterNumbers[i];
  }
  if (cupsOfWater < 2) {
    return `${cupsOfWater} copo de água`;
  }
  return `${cupsOfWater} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
