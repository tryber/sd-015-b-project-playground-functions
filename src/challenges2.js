// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  let arrayTech = [];
  let listOrdem = array.sort();
  for (let index = 0; index < array.length; index += 1) {
    arrayTech.push({ tech: listOrdem[index], name });
  }
  return arrayTech;
}
// Desafio 11
function generatePhoneNumber(phone) {
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < phone.length; index += 1) {
    let count = 0;
    for (let index1 = 0; index1 < phone.length; index1 += 1) {
      if (phone[index] === phone[index1]) {
        count += 1;
      }
    }
    if ((phone[index] > 9 || phone[index] < 0) || (count >= 3)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return phone.join('').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineB < (lineA + lineC)
    && lineC < (lineA + lineB) && lineA > (Math.abs(lineB - lineC))
    && lineB > (Math.abs(lineA - lineC)) && lineC > (Math.abs(lineA - lineB))) {
    return true;
  } return false;
}

// Desafio 13
function hydrate(string) {
  let beer = string.match(/\d/g).map(Number);
  let agua = 0;
  for (let index = 0; index < beer.length; index += 1) {
    agua += beer[index];
  }

  if (agua === 1) {
    return (`${agua} copo de água`);
  }
  return (`${agua} copos de água`);
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
