// Desafio 10
function techList() {
  // seu código aqui
  function techList(array, name) {
    let obj = [];
    if (array.length === 0) {
      return "Vazio!";
    }
    array.sort();
    for (let i = 0; i < array.length; i++) {
      obj.push({
        tech: array[i],
        name
      })
    }
    return obj;
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
