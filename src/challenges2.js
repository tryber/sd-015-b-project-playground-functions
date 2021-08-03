// Desafio 10
function techList(arr, name) {
  arr.sort();
  let list = [];
  for (let tech of arr) {
    list.push({ tech: tech, name: name });
  }
  return list;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function generatePhoneNumber(arr) {
  if (arr.length != 11) return `Array com tamanho incorreto.`;
  return `(${arr.slice(0, 2).join('')}) ${arr.slice(2, 7).join('')}-${arr
    .slice(7)
    .join('')}`;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {}

console.log(triangleCheck(10, 2, 8));

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
