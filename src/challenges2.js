// Desafio 10
function techList(tech, name) {
  let result = [];
  for (let index = 0; index - 1 < 4; index++) {
      let techAlf = tech.sort();
      if (tech.length > 0) {
          let list = {
              tech: techAlf[index],
              name: name,
          } 
          result.push(list); 
      } else if (tech) {
          return 'Vazio!'        
      }
  }
  console.log(result);
  return result;
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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
