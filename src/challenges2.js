// Desafio 10
function techList()
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
console.log(generatePhoneNumber([1, 2, 2, 2, 5, 4, 7, 8, 9, 0, 5]))
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
    if(lineA > (b)){}
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
