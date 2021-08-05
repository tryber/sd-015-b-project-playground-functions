// Desafio 10
function techList(valor1, valor2) {
  valor1 = valor1.sort();
  let techInfo;
  if (valor1.length > 0) {
    let saida = [];  
    for (let key in valor1) {
      techInfo = {
        tech: valor1[key],
        name: valor2
      };
      saida.push(techInfo);
    }
    return saida;
  } else if (valor1.length === 0) {
    return 'Vazio!';
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
