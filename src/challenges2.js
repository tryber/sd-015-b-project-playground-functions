// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  array = array.sort();
  let resultado = [];
  for (let key of array) {
    let newObject = {};
    newObject['tech'] = key;
    newObject['name'] = name;
    resultado.push(newObject);
  }
  return resultado;
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
