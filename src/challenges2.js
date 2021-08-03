// Desafio 10
function techList(techs) {
  // seu código aqui

}

// Desafio 11 - CHECK
function generatePhoneNumber(numbers) {
  // seu código aqui
  let phoneNumber = '';

  for(let i = 0; i < numbers.length; i ++){
    switch(i){
      case 0: phoneNumber += '(' + numbers[i];
      break;
      case 1: phoneNumber += numbers[i] + ') ';
      break;
      case 6: phoneNumber += numbers[i] + '-';
      break;
      default: phoneNumber += numbers[i];
      break;
    }
  }
  for(let j = 0; j< numbers.length; j ++){
    if(numbers[j] > 9 || numbers[j] < 0){
      phoneNumber = 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let repeated = -1;
  for(let i =0; i < numbers.length; i ++){
    for(let j =0; j < numbers.length; j ++){
     if(i !== j){
      if(numbers[i] === numbers[j]){
        repeated++;
      }
     }else{
       break;
     }
    }
  }
  if(numbers.length !== 11){
    phoneNumber = 'Array com tamanho incorreto.';
  }else if(repeated >=3){
    phoneNumber = 'não é possível gerar um número de telefone com esses valores';
  }
  return phoneNumber;
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
function hydrate() {
  // seu código aqui
}


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
