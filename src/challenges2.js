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
  let arraySort = array.slice().sort();
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arraySort.length; index += 1) {
    if (arraySort[index] === arraySort[index + 2] || arraySort[index] < 0 || arraySort[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (Math.abs(lineA - lineB) > lineC || Math.abs(lineC - lineA) > lineB) {
    return false;
  }
  if (Math.abs(lineB - lineC) > lineA) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let water = string.match(/\d+/g).map(Number).reduce((a, b) => a + b, 0);

  if (water === 1) {
    return `${water} copo de água`;
  }
  return `${water} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
