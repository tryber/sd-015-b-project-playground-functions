// Desafio 10
function techList(array, name) {
array.sort()
let resultadoReturn = []
if(array.length === 0) {
  return 'Vazio!'
} 
 for(index = 0; index < array.length; index +=1) {
  let resultado = { 
  };
  resultado['tech']= array[index];
  resultado['name']= name;
  resultadoReturn.push(resultado);
 } 
 return resultadoReturn;
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
