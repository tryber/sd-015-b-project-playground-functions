// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(array) {
  let resultado =[];
  
  for (let index=0; index < array.length; index += 1) {
    if array.length !==  11{
    resultado.push("Array com tamanho incorreto.")
    }  if  (array[index] < 0) || (array[index] > 9) {
    resultado.push("não é possível gerar um número de telefone com esses valores")  
    } 
  }
    for (let index=0; index < array.length; index += 1) {
      if (array[index])
      }
 
 
 
 
 
 
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
