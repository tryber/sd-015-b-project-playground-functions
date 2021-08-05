// Desafio 10
function techList(nomeTecnologia, nomePessoa) {
  let registro = {
    tecnologia: '',
    name: ''
  }

  for (let key in registro){
    tecnologia = nomeTecnologia[key]
  }
  
console.table(registro)
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

/*
recebe: nome tecnologia + array com nome de uma pessoa

sendo que nomeTecnologia é um array
nomePessoa é uma string


*/


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
