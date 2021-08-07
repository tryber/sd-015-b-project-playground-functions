// Desafio 10
function techList(array, name) {
  let lista = { };
  //let lista1 = { };
  let resposta = { };
  
    for (let index = 0; index < array.length; index += 1) {
      //lista.tech = array[index];
      //lista1.name = name;
      resposta = ('tech: '+array[index] + 'name: ' + name);
     
    return resposta; 
  //return [].concat(lista, lista1)
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));


// Desafio 11
function generatePhoneNumber(array) {
/*  let resultado =[];
  
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
 
 
 
 
 
 
  // seu código aqui**/
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
