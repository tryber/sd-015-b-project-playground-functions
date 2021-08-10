// Desafio 10
function techList (tech, name) {
    let saida = [];
  
  if (tech && tech.length > 0) {
    tech.sort ();
    for(let i = 0; i < tech.length; i++) {
    saida.push({
    tech: tech[i],
    name
   })
  }
  
  return saida;
}
  
  return 'Vazio!';
}

techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas");

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
