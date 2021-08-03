// Desafio 10
function techList(array, name) {
  // seu código aqui
  // Sort feito com ajuda de "https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/"

  let list = [];
  if (array.length !== 0) {
    array.forEach((element) => {
      let obj = {
        tech: '',
        name: '',
      };
      obj.tech = element;
      obj.name = name;
      list.push(obj);
    });
    return list.sort((a, b) => ((a.tech > b.tech) ? 1 : -1));
  }
  return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let arraySort = array.sort;
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arraySort.length; index += 1) {
    if (arraySort[index] === arraySort[index + 1] && arraySort[index] === arraySort[index + 2]) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
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
