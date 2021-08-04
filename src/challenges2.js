// Desafio 10
function techList(techs, name) {
  let techsList = [];
  techs.sort();

  for (let tech of techs) {
    techsList.push({ tech, name });
  }
  if (techsList.length === 0) {
    return 'Vazio!';
  }
  return techsList;
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else if (phoneNumber.length === 11) {
    for (let number in phoneNumber) {
  } 
  } else if ((phoneNumber -1) < 0 || (phoneNumber / 2) < 5 || phoneNumber([0, 1, 6]) === Number) {
    return 'não é possível gerar um número de telefone com esses valores';
  } else {
    let fullPhoneNumber = '(' + phoneNumber[0] + phoneNumber[1] + ') ' + phoneNumber[2] + phoneNumber[3] + phoneNumber[4] + phoneNumber[5] + phoneNumber[6] + '-' + phoneNumber[7] + phoneNumber[8] + phoneNumber[9] + phoneNumber[10];
    return fullPhoneNumber;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let check = false;
  if (lineA > lineB + lineC 
|| lineB > lineA + lineC 
|| lineC > lineA + lineB) {
    check = false;
  } else if (
lineA < Math.abs(lineB - lineC) 
|| lineB < Math.abs(lineA - lineC) 
|| lineC < Math.abs(lineA - lineB)) {
    check = false;
  } else {
    check = true;
  }
  return check;
}

// Desafio 13
let bebida = '1 cerveja';
function hydrate(bebida) {
  let quantity = /\d+/g;
  for (let number of quantity) {
    return number;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
