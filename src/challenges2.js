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

// Desafio 12 - CHECK
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

// Desafio 13
function hydrate(drinks) {
  // seu código aqui
  let waterCups = 0;
  for(let i = 0; i < drinks.length; i ++){
    if(drinks.charCodeAt(i) >= 49 || drinks.charCodeAt(i) <= 57){
      waterCups += parseInt(drinks[i], 10);
    }
  }
  console.log(waterCups);
}
console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
