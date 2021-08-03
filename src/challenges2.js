// Desafio 10
function techList(arr, name) {
  let list = [];
  for (let tech of arr) {
    list.push({ tech: tech, name: name });
  }
  return list;
}

// Desafio 11
function generatePhoneNumber(arr) {
  return `(${arr.slice(0, 2).join('')}) ${arr.slice(2, 7).join('')}-${arr
    .slice(7)
    .join('')}`;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
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
