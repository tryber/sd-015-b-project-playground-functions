// Desafio 10
function techList(arr, name) {
  if (arr.length === 0) return 'Vazio!';
  arr.sort();
  let list = [];
  for (let tech of arr) {
    list.push({ tech, name });
  }
  return list;
}

// Desafio 11

function isNotPhoneNumber(num) {
  if (num > 9 || num < 0) return true;
}

function threeEqualNumbers(num) {
  let obj = {};
  if (!obj[num]) {
    obj[num] = 1;
  } else {
    obj[num] += 1;
  }
  if (obj[num] >= 3) return true;
}

function isNotAPhoneNumber(num) {
  if (isNotPhoneNumber(num)) return true;
  if (threeEqualNumbers(num)) return true;
}
function numberIsNotValid(arr) {
  for (let num of arr) {
    if (isNotAPhoneNumber(num)) return true;
  }
}

function phoneNumber(arr) {
  return `(${arr.slice(0, 2).join('')}) ${arr.slice(2, 7).join('')}-${arr
    .slice(7)
    .join('')}`;
}

function generatePhoneNumber(arr) {
  if (arr.length !== 11) return 'Array com tamanho incorreto.';

  if (numberIsNotValid(arr)) return 'não é possível gerar um número de telefone com esses valores';

  return phoneNumber(arr);
}

console.log(generatePhoneNumber([1, 3, 2, 3, 5, 2, 7, 8, 9, 0, 1]));

// Desafio 10

function triangleC (a, b, c) {
  return a + b > c && c > Math.abs(a - b);

}

function triangleB (a, b, c) {
  return a + c > b && b > Math.abs(a - c);
}

function triangleA (a, b, c) {
  return c + b > a && a > Math.abs(c - b);
}

function triangleIsValid(a, b, c) {
  return triangleA(a, b, c) || triangleB(a, b, c) || triangleC(a, b, c);
}

function triangleCheck(a, b, c) {
  return triangleIsValid(a, b, c);
}

// Desafio 13
function hydrate(str) {
  let regex = /\d+/g;
  const match = str.match(regex);
  const copos = match
    .join('')
    .split('')
    .reduce((acc, val) => Number(acc) + Number(val));

  return copos > 1 ? `${copos} copos de água` : `${copos} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
