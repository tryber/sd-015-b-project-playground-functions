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
function triangleCheck(lineA, lineB, lineC) {
  if((lineA < lineB + lineC) && (lineB < lineA + lineC) && (lineC < lineA + lineB) && (lineA > Math.abs(lineB - lineC)) && (lineB > Math.abs(lineA - lineC)) && (lineC > Math.abs(lineA - lineB))) {
    return true;
  } else {
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
