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
  let answer = false;
  for (let n of numbers) {
    count[n] = (count[n] || 0) + 1;
  }

  for (let i = 0; i <= 9; i += 1) {
    if (count[i] > 2) {
      answer = true;
    }
  }
  return answer;
}
function possivelGerar(numbers) {
  let possible = true;
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
function qualDDD(numbers) {
  let ddd = numbers.slice(0, 2).join('');
  return ddd;
}
function telNumber(numbers) {
  let tel = `${numbers.slice(2, 7).join('')}-${numbers.slice(7).join('')}`;
  return tel;
}
function generatePhoneNumber(array) {
  let d11;
  if (array.length !== 11) {
    d11 = 'Array com tamanho incorreto.';
  } else if (possivelGerar(array) === false) {
    d11 = 'não é possível gerar um número de telefone com esses valores';
  } else {
    d11 = `(${qualDDD(array)}) ${telNumber(array)}`;
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
