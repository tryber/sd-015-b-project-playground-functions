// Desafio 10
function techList(array, name) {
  let objeto = [];
  if (array.length <= 0) {
  return 'Vazio!';
  }
  for (let i = 0; i < array.length; i += 1) {
     objeto.push({
    tech: array[i],
    name,
  });
}  
   return objeto.sort(function (a, b) {
   return a.tech > b.tech;
 });
} 

// Desafio 11
function generatePhoneNumber(array) {

  }

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA >= lineB + lineC || lineB >= lineA + lineC || lineC >= lineB + lineA) {
    return false;
  }
  return true;
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
