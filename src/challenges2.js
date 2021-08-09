// Desafio 10
function techList(array, name) {
  if (array.length > 0) {
    let crescente = array.sort();
    let obs = [];
    for (let index = 0; index < array.length; index += 1) {
      let object = { tech: crescente[index], name };
      obs.push(object);
    } return obs;
  } return 'Vazio!';
}

let techs = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let name = 'Rodolfo';

console.log(techList(techs, name));

// Desafio 11

function generate0e9(arrayNumbers) {
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] < 0 || arrayNumbers[index] > 9) {
      return true;
    }
  }
}

function generateCont(arrayNumbers, number) {
  let cont = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === number) {
      cont += 1;
    }
  } return cont;
}

function generate3(arrayNumbers) {
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (generateCont(arrayNumbers, arrayNumbers[index]) >= 3) {
      return true;
    }
  }
}

function formatTelephone(arrayNumbers) {
  let formatString = arrayNumbers.join('');
  let result = formatString.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  return result;
}

function generatePhoneNumber(arrayNumbers) {
  if (arrayNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  } if (generate0e9(arrayNumbers) || generate3(arrayNumbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  } return formatTelephone(arrayNumbers);
}

let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
console.log(generatePhoneNumber(arrayNumbers));

// Desafio 12

function checkLineA(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA < Math.abs(lineB - lineC)) {
    return true;
  }
}

function checkLineB(lineA, lineB, lineC) {
  if (lineB < (lineA + lineC) && lineB < Math.abs(lineA - lineC)) {
    return true;
  }
}

function checkLineC(lineA, lineB, lineC) {
  if (lineC < (lineA + lineB) && lineC < Math.abs(lineA - lineB)) {
    return true;
  }
}

function triangleCheck(lineA, lineB, lineC) {
  if (checkLineA(lineA, lineB, lineC) || checkLineB(lineA, lineB, lineC) 
  || checkLineC(lineA, lineB, lineC)) {
    return true;
  } return false;
}

console.log(triangleCheck(10, 14, 8));

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
