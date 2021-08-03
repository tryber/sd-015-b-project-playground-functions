// Desafio 10
function techList(array, name) {
  // seu código aqui
  let novaLista = [];
  array.sort();
  if(array.length == 0){
    return ("Vazio!");
  } else {
    for (let item of array) {
      let objeto = {};
      objeto['tech'] = item;
      objeto['name'] = name;
      novaLista.push(objeto);
    }
    return (novaLista);
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
