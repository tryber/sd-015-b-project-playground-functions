// Desafio 10
function techList(names, name) {
  // seu código aqui
  if (names.length > 0) {
    let lista = [];
    names = names.sort();
    for (tecnologia of names) {
      lista.push({ tech: tecnologia, name: name });
    }
    return lista;
  }
  else{
    return "Vazio!";
  }
}

techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas');
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
