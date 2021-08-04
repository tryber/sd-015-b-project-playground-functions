// Desafio 10
function techList(array, name) {
  let d10 = [];
  if (array.length === 0) {
    d10 = 'Vazio!';
  }
  for (let tech of array.sort()) {
    d10.push({ tech, name });
  }
  return d10;
}

// Desafio 11
function repete3(numbers) {
  let count = {};

  numbers.forEach(function (x) { count[x] = (count[x] || 0) + 1; });

  for (let y = 1; y <= 11; y += 1) {
    if (count[y] > 2) {
      return true;
    }
  }
}
function possivelGerar(numbers) {
  let possible;
  for (let n of numbers) {
    if (n < 0 || n > 9) {
      possible = false;
    }
  }
  if (repete3(numbers) === true) {
    possible = false;
  }
  return possible;
}
function generatePhoneNumber(array) {
  let d11;
  if (array.length !== 11) {
    d11 = 'Array com tamanho incorreto.';
  } else if (possivelGerar(array) === false) {
    d11 = 'não é possível gerar um número de telefone com esses valores';
  } else {
    d11 = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
  }

  return d11;
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
