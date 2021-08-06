// Desafio 10
function techList(arrayTech, name) {
  let arrayNovo = arrayTech.sort();
  let objectArray = [];

  if(arrayTech.length === 0){
    return "Vazio!";
  }
  else {
    for(let index = 0; index < arrayTech.length ; index += 1){
      let object = {
        tech: arrayNovo[index],
        name: name
      };
      objectArray.push(object);      
    }
  }
  return objectArray;

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
