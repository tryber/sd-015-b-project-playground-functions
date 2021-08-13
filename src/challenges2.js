// Desafio 10
function techList(array, string) {
  let resposta;
  if (array.length === 0) {
    resposta = 'Vazio!';
  } else {
    let arrOrd = array.sort();
    resposta = [];
    for (let index of arrOrd) {
      resposta.push({
        tech: index,
        name: string,
      });
    }
  }
  return resposta;
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
