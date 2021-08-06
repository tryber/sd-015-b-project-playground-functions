// Desafio 10
function techList(array, name) {
  if (array.length > 0) {
    let crescente = array.sort();
    let object = {};
    let obs = [];
    for (let index = 0; index < array.length; index += 0) {
      object.tech = crescente[index];
      object.name = name;
      obs.push(object);
    } return obs;
  } return 'Vazio!';
}

let techs = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let name = 'Rodolfo';

console.log(techList(techs, name));

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
