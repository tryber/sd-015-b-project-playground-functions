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
function generatePhoneNumber() {
  // seu código aqui
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
