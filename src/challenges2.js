// Desafio 10
// receber array tecnologias e nome da pessoa
// criar um objeto para cada tecnologia com o nome da pessoa
function techList(array, name) {
  array.sort();
  let tecnologias = [];
  if (array == false){
    tecnologias = 'Vazio!';
  }
  for(let valores of array){
    tecnologias.push({tech: valores, name: name})
  }
return tecnologias;
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
