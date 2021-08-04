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
  if (checkValidity(array)) {
    return checkValidity(array);
  }
  let myDict = createFrequencyArray(array);
  if (checkRepetition(myDict)) {
    return checkRepetition(myDict);
  }
  for (let item of array) {
    phoneNumber += checkPosition(phoneNumber);
    phoneNumber += item;
  }
  return phoneNumber;
}

// Desafio 12
function createSideArray(lineA, lineB, lineC) {
  let sideArray = [lineA, lineB, lineC];
  return sideArray;
}
function createSumArray(lineA, lineB, lineC) {
  let sumAB = lineA + lineB;
  let sumAC = lineA + lineC;
  let sumBC = lineB + lineC;
  let sumArray = [sumBC, sumAC, sumAB];
  return sumArray;
}
function createDiffArray(lineA, lineB, lineC) {
  let diffAB = Math.abs(lineA - lineB);
  let diffAC = Math.abs(lineA - lineC);
  let diffBC = Math.abs(lineB - lineC);
  let diffArray = [diffBC, diffAC, diffAB];
  return diffArray;
}
function createSideMinusSum(lineA, lineB, lineC) {
  let sideArray = createSideArray(lineA, lineB, lineC);
  let sumArray = createSumArray(lineA, lineB, lineC);
  let sideMinusSum = [];
  for (let side of sideArray) {
    for (let sum of sumArray) {
      sideMinusSum.push(sum - side);
    }
  }
  return sideMinusSum;
}
function createSideMinusDiff(lineA, lineB, lineC) {
  let sideArray = createSideArray(lineA, lineB, lineC);
  let diffArray = createDiffArray(lineA, lineB, lineC);
  let sideMinusDiff = [];
  for (let side of sideArray) {
    for (let diff of diffArray) {
      sideMinusDiff.push(side - diff);
    }
  }
  return sideMinusDiff;
}
function checkSum(lineA, lineB, lineC) {
  let sideMinusSum = createSideMinusSum(lineA, lineB, lineC);
  for (let item of sideMinusSum) {
    if (item < 0) {
      return false;
    }
  }
  return true;
}
function checkDiff(lineA, lineB, lineC) {
  let sideMinusDiff = createSideMinusDiff(lineA, lineB, lineC);
  for (let item of sideMinusDiff) {
    if (item < 0) {
      return false;
    }
  }
  return true;
}
function triangleCheck(lineA, lineB, lineC) {
  let testSum = checkSum(lineA, lineB, lineC);
  let testDiff = checkDiff(lineA, lineB, lineC);
  if (testSum && testDiff) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  let num = string.replace(/[^0-9]/g, '');
  let sum = 0;
  for (let number of num) {
    number = Number(number);
    sum += number;
  }
  if (sum > 1) {
    return `${sum} copos de água`;
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
}
console.log(hydrate('1 Guilherme '));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
