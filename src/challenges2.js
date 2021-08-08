// Desafio 10
function techList(array, nome) {
  let result;
  if (array.length === 0) {
    result = "Vazio!";
  } else {
    let arr = array.sort();
    result = [];
    for (let i of arr) {
      result.push({
        tech: i,
        name: nome,
      });
    }
  }
  return result;
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
