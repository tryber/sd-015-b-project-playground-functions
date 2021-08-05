// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  let arrayTech = [];
  let listOrdem = array.sort();
  for (let index = 0; index < array.length; index += 1) {
    arrayTech.push({ tech: listOrdem[index], name });
  }
  return arrayTech;
}












// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB) && lineA > (Math.abs(lineB - lineC)) && lineB > (Math.abs(lineA - lineC)) && lineC > (Math.abs(lineA - lineB))){
    return true
  } else{
    return false
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
