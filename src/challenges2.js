// Desafio 10
function techList(arrOfTechs, name) {
  if (arrOfTechs.length === 0) {
    return 'Vazio!';
  }

  let list = [];

  arrOfTechs.sort();
  for (let tech of arrOfTechs) {
    list.push({tech, name});
  }

  return list;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

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
