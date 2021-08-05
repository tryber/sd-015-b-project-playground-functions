// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio';
  }

  tech.sort();

  let techName = [];
  for (let index = 0; index < tech.length; index += 1) {
    let objects = { tech, name };
    techName.push(objects);
  }

  return techName;
} console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Leonardo'));

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
