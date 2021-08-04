// Desafio 10
// let listaTecnologias = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']; // [DEBUG]
// let nome = 'Daniel'; // [DEBUG]
function techList(lista, name) {
  // seu código aqui
  let tamanhoArray = lista.length;

  if (tamanhoArray === 0)
  {
    return 'Vazio!';

  } else {
    let aux = lista.sort();
    let result = [];
    for (let index of aux)
    {
      result.push( {tech: index, name: name} );
    }
    return result;
  }
}
// techList(listaTecnologias, nome); // [DEBUG]

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
  // let arrayNumero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

}
// generatePhoneNumber(); // [DEBUG]
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
