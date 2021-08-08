/* eslint-disable max-lines-per-function */
// Desafio 10
function techList(arrayTech, name) {
  if (arrayTech.length > 0) {
    let list = [];
    let obj = {};
    let listSort = arrayTech.sort();
    for (let index = 0; index < arrayTech.length; index += 1) {
      obj.tech = listSort[index];
      obj.name = name;
      list.push(obj);
      obj = {};
    }
    return list;
  } return 'Vazio!';
}

let arrayTech = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let name = 'Amanda';
techList(arrayTech, name);

// Desafio 11
// Esse link me ajudou na formatação do telefone (https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176)
function countNumber(num, arrayPhone) {
  let count = 0;
  for (let pos of arrayPhone) {
    if (pos === num) {
      count += 1;
    }
  }
  return count;
}

function checkRepeat(arrayPhone) {
  for (let pos of arrayPhone) {
    if (countNumber(pos, arrayPhone) >= 3) {
      return true;
    }
  }
}

function checkRange(arrayPhone) {
  for (let index = 0; index < arrayPhone.length; index += 1) {
    if (arrayPhone[index] < 0 || arrayPhone[index] > 9) {
      return true;
    }
  }
}

function formatPhone(arrayPhone) {
  let stringPhone = arrayPhone.join('');
  let result = stringPhone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  return result;
}

function generatePhoneNumber(arrayPhone) {
  if (arrayPhone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (checkRange(arrayPhone) || checkRepeat(arrayPhone)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return formatPhone(arrayPhone);
}

let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
generatePhoneNumber(arrayNumbers);

// Desafio 12
function validaLado(lineA, lineB, lineC) {
  if (lineA > lineB + lineC
    || lineB > lineA + lineC
    || lineC > lineA + lineB) {
    return false;
  }
}

function validaDif(lineA, lineB, lineC) {
  if (lineA < Math.abs(lineB - lineC)
    || lineB < Math.abs(lineA - lineC)
    || lineC < Math.abs(lineA - lineB)) {
    return false;
  }
}
function triangleCheck(lineA, lineB, lineC) {
  if (validaLado(lineA, lineB, lineC) === false || validaDif(lineA, lineB, lineC) === false) {
    return false;
  }
  return true;
}

triangleCheck(10, 24, 8);

// Desafio 13
function hydrate(string) {
  let numbers = (/\d+/g);
  let array = string.match(numbers);
  let cups = 0;
  for (let pos of array) {
    cups += parseInt(pos, 10);
  }
  if (cups === 1) {
    return `${cups} copo de água`;
  } return `${cups} copos de água`;
}

hydrate('1 cachaça, 5 cervejas e 1 copo de vinho');

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
