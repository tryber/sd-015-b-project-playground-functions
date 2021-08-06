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
console.log(techList(arrayTech, name));

// Desafio 11
// eslint-disable-next-line complexity
// Esse link me ajudou na formatação do telefone (https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176)
function checkLength(arrayPhone) {
  if (arrayPhone.length === 11) {
    return false;
  }
  return true;
}

function returnCheckLength(arrayPhone) {
  if (checkLength(arrayPhone)) {
    return 'Array com tamanho incorreto.';
  }
}

let arrayP = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 4];
console.log(returnCheckLength(arrayP));

// function generatePhoneNumber(arrayPhone) {
//   if (arrayPhone.length !== 11) {
//     return 'Array com tamanho incorreto.';
//   }
//   for (let index = 0; index < arrayPhone.length; index += 1) {
//     let count = 0;
//     for (let segIndex = 0; segIndex < arrayPhone.length; segIndex += 1) {
//       if (arrayPhone[index] === arrayPhone[segIndex]) {
//         count += 1;
//       }
//     }
//     if (arrayPhone[index] < 0 || arrayPhone[index] > 9 || count >= 3) {
//       return 'não é possível gerar um número de telefone com esses valores';
//     }
//   }
//   let stringPhone = arrayPhone.join('');
//   let resultado = stringPhone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
//   return resultado;
// }

// let arrayPhone = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
// console.log(generatePhoneNumber(arrayPhone));

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

console.log(triangleCheck(10, 24, 8));

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

console.log(hydrate('1 cerveja'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
