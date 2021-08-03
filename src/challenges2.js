// Desafio 10
function techList(arr, name) {
  if (!arr) return [];
  let list = [];
  for (let tech of arr) {
    list.push({ tech: tech, name: name });
  }
  return list;
}

console.log(techList());

// Desafio 11
function generatePhoneNumber(arr) {
  return `(${arr.slice(0, 2).join('')}) ${arr.slice(2, 7).join('')}-${arr
    .slice(7)
    .join('')}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return;
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
