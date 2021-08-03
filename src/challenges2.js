// Desafio 10
function techList(array, name) {
  // seu código aqui
  if (array.length === 0) {
    return 'Vazio!';
  }
  let ordem = array.sort();
  let conteudo = [];
  let obj = {};
  for (let key in ordem) {
    obj = {
      tech: ordem[key],
      name: name
    };
    conteudo.push(obj);
  }
  return conteudo;
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
