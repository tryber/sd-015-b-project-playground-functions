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

// Desafio 12
function triangleCheck(a, b, c) {
  let bool;
  if (
    (a + b > c && c > Math.abs(a - b)) ||
    (c + a > b && b > Math.abs(c - a)) ||
    (c + b > a && a > Math.abs(c - b))
  ) {
    bool = true;
  } else {
    bool = false;
  }
  return bool;
}

// Desafio 13
function hydrate(str) {
  let regex = /\d+/g;
  const match = str.match(regex);
  const copos = match
    .join('')
    .split('')
    .reduce((acc, val) => Number(acc) + Number(val));

  return copos > 1 ? copos + ' copos de água' : copos + ' copo de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
