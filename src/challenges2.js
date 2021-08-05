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
// Fonte sobre RegEx: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let count = 0; count < phoneNumber.length; count += 1) {
    let numberTimes = 0;
    for (let count2 = 0; count2 < phoneNumber.length; count2 += 1) {
      if (phoneNumber[count] === phoneNumber[count2]){
        numberTimes += 1;
      }
    }
    if (phoneNumber[count] < 0 || phoneNumber[count] > 9 || numberTimes >= 3){
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return phoneNumber.join('').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
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
// Fonte: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
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
