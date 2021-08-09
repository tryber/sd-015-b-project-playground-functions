// Desafio 10
function techName(tech, name) {

}
techName()

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length == 11) {
      return '('+array[0]+array[1]+')'+array[2]+array[3]+array[4]+array[5]+array[6]+'-'+array[7]+array[8]+array[9]+array[10];
  } else if (array.length != 11){
      return 'Array com tamanho incorreto.'
  } else if (array < 0 && array > 9) {
      return "não é possível gerar um número de telefone com esses valores"
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB < lineC || lineB + lineC < lineA || lineA + lineC < lineB){
      return false;
  } else if (lineA - lineB > lineC || lineB - lineC > lineA || lineA - lineC > lineB) {
      return false;
  } else {
      return true;
  }
}

// Desafio 13
function hydrate() {
  
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
