// Desafio 10
function techList(arr, name) {
  if (arr.length === 0) return `Vazio!`;
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
  if (arr.length !== 11) return `Array com tamanho incorreto.`;
  let obj = {};
  let count = 0;
  for (let num of arr) {
    if (num > 9 || num < 0) count++;
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      obj[num]++;
    }
    if (obj[num] >= 3) {
      count++;
    }
  }

  if (count > 0)
    return `não é possível gerar um número de telefone com esses valores`;

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
