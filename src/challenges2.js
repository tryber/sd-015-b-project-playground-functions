// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  array = array.sort();
  let resultado = [];
  for (let key of array) {
    let newObject = { name };
    newObject.tech = key;
    resultado.push(newObject);
  }
  return resultado;
}

// Desafio 11
function isRepeating(a) {
  let repeatCheck = true;
  let conf = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i of a) {
    conf[i] += 1;
    if (i < 0 || i > 9 || conf[i] >= 3) {
      repeatCheck = false;
    }
  }
  return repeatCheck;
}

function isValid(a) {
  for (let key of a) {
    if (key > 9 || key < 0) {
      return false;
    } return true;
  }
}

function generatePhoneNumber(a) {
  let test1 = isRepeating(a);
  let test2 = isValid(a);
  if (a.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (test1 === false || test2 === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let telefone = `(${a[0]}${a[1]}) ${a[2]}${a[3]}${a[4]}${a[5]}${a[6]}-${a[7]}${a[8]}${a[9]}${a[10]}`;
  return telefone;
}

// Desafio 12
function triangleCheckBigger(a, b, c) {
  if (a < (b + c) && b < (a + c) && c < (a + b)) {
    return true;
  } return false;
}

function triangleCheckSmaller(a, b, c) {
  if (a > Math.abs(b - c) && b > Math.abs(a - c) && c > Math.abs(a - b)) {
    return true;
  } return false;
}

function triangleCheck(lineA, lineB, lineC) {
  let bigger = triangleCheckBigger(lineA, lineB, lineC);
  let smaller = triangleCheckSmaller(lineA, lineB, lineC);
  if (bigger === true && smaller === true) {
    return true;
  } return false;
}

// Desafio 13
function getNumbers(a) {
  let str = a.replace(/\D+/g, '');
  let numbersArray = [];
  for (let key of str) {
    numbersArray.push([key]);
  }
  return numbersArray;
}

function hydrate(str) {
  let numbers = getNumbers(str);
  let soma = 0;
  for (let key of numbers) {
    soma += Number([key]);
  }
  if (soma === 1) {
    return `${soma} copo de água`;
  } return `${soma} copos de água`;
}
let str = '1 cerveja';
console.log(hydrate(str));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
