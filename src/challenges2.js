// Desafio 10
function techList(tech, name) {
 let lista = 0;
  let lista1 = 0;
  let resposta = 0;
  
    for (let index = 0; index < tech.length; index += 1) {
      lista.tech = array[index];
      lista1.name = name;
      resposta = ('tech: '+tech[index] + 'name: ' + name);
    }
   console.log([resposta])
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


// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(string) {
  /*thenum = string.match( /\d+/g );
	valor = thenum.reduce((total, numeros) => total + numeros);
	
	return valor + ' copos de água'**/
}

//console.log(hydrate(' cachaça, 5 cervejas e  copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};