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
function generatePhoneNumber(array) {
  let phoneNumber = '';
  for (let counter = 0; counter < array.length; counter += 1) {
    if (counter === 0) {
      phoneNumber += '(';
    } else if (counter === 3) {
      phoneNumber += ')';
    } else if (counter === 4) {
      phoneNumber += ' ';
    }
  }
  return phoneNumber;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
function checkPosition() {
  
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
