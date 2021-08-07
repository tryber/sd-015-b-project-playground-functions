// Desafio 10
function techList(){ 
}
// Desafio 11
function generatePhoneNumber(array) {
      let formato = "(xx) xxxxx-xxxx";
      let numeros = 0;
      for(let i = 0; i < array.length; i++){
      formato = formato.replace('x', array[i]);
      if (array[i] < 0 || array[i] > 9){
        return 'não é possível gerar um número de telefone com esses valores'
      } console.log(numeros)
    } if(array.length !== 11){
      return 'Array com tamanho incorreto'
  } 
   return formato;
}
// Desafio 12

function triangleCheck(lineA, lineB, lineC) {
  let ab = Math.abs(lineA - lineB); 
  let ac = Math.abs(lineA - lineC);
  let bc = Math.abs(lineB - lineC);
  if(lineA < (lineB + lineC) && lineA > bc){
      return true
    } else if(lineB < (lineA + lineC) && lineB > ac){
      return true
    } else if(lineC < (lineB + lineA) && lineC > ab){
      return true
    } else {
      return false
    }
}
// Desafio 13
function hydrate(string) {
  let text = ( string.replace(/[^\d]+/g, ' ') );
  let numeros = text.split('');
  let soma = 0
  for(let i = 0; i < numeros.length; i+=1){
    for(let j = 0; j < numeros[i]; j+=1) {
      soma += 1;
    }
  } if (soma != 1){
    return soma + " copos de água"
  } else if (soma = 1) {
    return soma + " copo de água"
  } 
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
