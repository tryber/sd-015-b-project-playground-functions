// Desafio 10
function techList(namesTech, name) {
  if (namesTech.length === 0) {
    return 'Vazio!'
  }
  let namesTechArray = [];
  let listOrden = namesTech.sort();
   for (index = 0; index < namesTech.length; index += 1) {
  namesTechArray.push({tech: listOrden[index], name: name});
 
}
  return namesTechArray
}
// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Deivid'));

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
