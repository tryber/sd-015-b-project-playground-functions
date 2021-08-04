// Desafio 10
function techList(array, name) {
  array.sort();
  let result = [];

  for (let i of array) {
    result.push({ tech: i, name: name });
  }
  if (array.length === 0) {
    return 'Vazio!';
  } else {
    return result;
  }
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(a, b, c) {
  if (a + b < c || Math.abs(a - b) > c) {
    return false;
  } else if (a + c < b || Math.abs(a - c) > b) {
    return false;
  } else if (c + b < a || Math.abs(c - b) > a) {
    return false;
  } else {
    return true;
  }
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
