// Desafio 10
function techList(arrayTech, name) {
  let newTechArray = arrayTech.sort();
  let techObject = [];
  if (newTechArray.length === 0){
    return 'Vazio!';
  } else {
    for (let i = 0; i < newTechArray.length; i++) {
      techObject.push({'tech': newTechArray[i], 'name': name});
    }
  }
  return techObject;
}
  console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

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
