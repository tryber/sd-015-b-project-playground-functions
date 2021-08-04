// Desafio 10
function techList(arrayTech, name) {
  let objTechs;
  let pushArray = [];

  if (arrayTech.length < 1) {
    return 'Vazio!';
  } for (let i in arrayTech) {
    arrayTech.sort();
    objTechs = { tech: arrayTech[i], name: name };
    pushArray.push(objTechs);
  }
  return pushArray;
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
