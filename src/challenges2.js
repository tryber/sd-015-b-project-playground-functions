// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(str) {
  let glassOfWater = str.match(/\d/g);
  let num = parseInt(glassOfWater);
  if (num === 1) {
      console.log (num + ' copo de água');
  } else {
      console.log(num + ' copos de água');
  }    
 
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
