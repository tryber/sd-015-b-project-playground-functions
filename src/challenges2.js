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
  let numbers = /\d+/g;
  let glassOfWater = str.match(numbers);
  let soma = 0;
  for (let index = 0; index < glassOfWater.length; index++){
      soma += parseInt(glassOfWater[index]);        
  }
  if (soma === 1) {
      console.log(soma + ' copo de água');
  }   else {
          console.log(soma + ' copos de água');
      }    
} 

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
