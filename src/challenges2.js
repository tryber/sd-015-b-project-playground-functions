// Desafio 10
function techList(array, name) {
  let finalArray = [];
  let tempObj = {};
  if (array.length === 0) {
    return 'Vazio!';
  }
  array.sort();
  for (let item of array) {
    tempObj.tech = item;
    tempObj.name = name;
    finalArray.push(tempObj);
    tempObj = {};
  }
  return finalArray;
}

// Desafio 11
function checkPosition(string) {
  if (string.length === 0) {
    return '(';
  }
  if (string.length === 3) {
    return ') ';
  }
  if (string.length === 10) {
    return '-';
  }
  return '';
}
function createFrequencyArray(array) {
  let myDict = {};
  for (let item of array) {
    if (Object.keys(myDict).includes(String(item))) {
      myDict[item] += 1;
    } else {
      myDict[item] = 1;
    }
  }
  return myDict;
}
function checkRepetition(dict) {
  for (let key in dict) {
    if (dict[key] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}
function checkValidity(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let item of array) {
    if (item < 0 || item > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}
function generatePhoneNumber(array) {
  let phoneNumber = '';
  for (let item of array) {
    phoneNumber += checkPosition(phoneNumber);
    phoneNumber += item;
  }
  if (checkValidity(array)) {
    return checkValidity(array);
  }
  let myDict = createFrequencyArray(array);
  if (checkRepetition(myDict)) {
    return checkRepetition(myDict);
  }
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
