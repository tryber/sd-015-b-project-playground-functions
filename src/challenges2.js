// Desafio 10
function techList(techs) {
  // seu código aqui

}

// Desafio 11
function generatePhoneNumber(numbers) {
  // seu código aqui
  let phoneNumber = 0;
  if(numbers.length !== 11){
    phoneNumber = 'Array com tamanho incorreto';
  }else{
    for(let i = 0; i < numbers.length; i ++){
      if( numbers[i] < 0 || numbers[i] > 9){
        phoneNumber = 'não é possível gerar um número de telefone com esses valores';
        break;
      }
    }
  }
  
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let sum = lineA + lineB;
  let diff = Math.abs(lineA - lineB);

  if(lineC < sum && lineC > diff){
    //do something
    return true;
  }else{
    return false;
  }
}

console.log(triangleCheck(10, 3, 4));

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
