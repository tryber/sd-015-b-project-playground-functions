// Desafio 10
function verifVazio(array) {
  if (array.length > 0) {
    return array;
  }
  return 'Vazio!';
}

function createObjects(ordem, names) {
  let array = [];
  for (let index = 0; index < ordem.length; index += 1) {
    let objects = {
      tech: ordem[index],
      name: names,
    };
    array.push(objects);
  }
  return verifVazio(array);
}



function techList(tech, names) {
  let ordem = tech.sort();
  return createObjects(ordem, names);
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
