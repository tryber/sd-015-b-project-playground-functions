// Desafio 10
function techList(array, name) {
  let arrayTech = [];
  for (let index2 = 0; index2 < array.length; index2 += 1) {
    arrayTech.push(array[index2]); 
    arrayTech.sort()
  }
  if (arrayTech.length === 0) {
    return "Vazio!";
    }
  else {
    let newArrayObject = [];
    for (let index = 0; index < arrayTech.length; index += 1) {
      newArrayObject[index] = {
        tech: arrayTech[index],
        name: name
      }
    } 
    return newArrayObject;
  }
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
