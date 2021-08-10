// Desafio 10
function techList(array, nome) {
  let array1 = [];
  for (let index = 0; index < array.sort().length; index += 1) {
    array1[index] = {
      tech: array[index],
      name: nome,
    };
  }
  if (array.length === 0) {
    array1 = 'Vazio!';
  }
  return array1;
}

// Desafio 11
function generatePhoneNumber() {}
// Desafio 12
function triangleCheck() {}
// Desafio 13
function hydrate() {}
// seu código aqui

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
