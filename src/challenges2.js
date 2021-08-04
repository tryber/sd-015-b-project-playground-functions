// Desafio 10
// funcao .sort retirada da documentacao: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function techList(array,name) {
  let listaSaida = [];
  if(array.length === 0){
    return "Vazio!"
  }

  else {
    for (let tech in array) {
    array.sort();
    obj = {
      tech: "NomeTech",
      name: name
      }
    obj.tech = array[tech];
    listaSaida.push(obj);
    }
  }
  return listaSaida;
  // return listaSaida;
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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
