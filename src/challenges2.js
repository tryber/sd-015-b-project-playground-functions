// Desafio 10
function techList(arr, name) {
  // seu código aqui
  let sortedArray = arr.sort();
  let objectTech = {};
  let arrayTech = [];

  if (arr.length > 0) {
    for (tech of sortedArray) {
      objectTech['name'] = name;
      objectTech['tech'] = tech;
      arrayTech.push(objectTech);
      objectTech = {};
    }
    return arrayTech;
  } else {
    return 'Vazio!';
  }
}

// Desafio 11
function generatePhoneNumber(arr) {
  // seu código aqui
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else {
    for (let index in arr) {
      if (arr[index] < 0) {
        return 'não é possível gerar um número de telefone com esses valores';
      } else if (arr[index] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
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
