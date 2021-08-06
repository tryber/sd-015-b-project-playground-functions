// Desafio 10
function techList(lista, name) {
  let tecnologias = lista.sort();
  let novoObjeto = [];
  if(lista.length) {
    for (let i = 0; i < lista.length; i++) {
      novoObjeto.push({tech: tecnologias[i], name: name});
    }
    return novoObjeto;
  }
  return "Vazio!";
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
