// Desafio 10
function techList(tech, name) {
  if(tech == 0){
    return console.log('Vazio!')
  }else{
    tech.sort();
    let result = [];
    for (let index = 0; index < tech.length; index += 1) {
      result.push({
        tech: tech[index],
        name: name,
      });
    }
    return console.log(result);
  }
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
