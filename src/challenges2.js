// Desafio 10
function techList(range, name) {
  // seu código aqui
  let afterList = [];

  if (range.length === 0){
    return "Vazio!";
  }

  range.sort();
  for (let tech of range){
    afterList.push({ tech, name });
  }
  return afterList;
}

// Desafio 11
function generatePhoneNumber(numbers) {
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
