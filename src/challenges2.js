// Desafio 10
function techList(tech, name) {
  if (tech <= 0) {
    return 'Vazio!'
  }
  let acumulador = [];
  let techSort = tech.sort();
  

  for (let i = 0; i < techSort.length; i += 1) {
    let objeto = {
      tech: techSort[i],
      name: name
    };
    
    acumulador.push(objeto)

  }
  return acumulador;
}
console.log(techList(['"React", "Jest", "HTML", "CSS", "JavaScript"'], "Lucas"))




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
