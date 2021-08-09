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
function generatePhoneNumber() {
// seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB) && lineA > (Math.abs(lineB - lineC)) && lineB > (Math.abs(lineA - lineC)) && lineC > (Math.abs(lineA - lineB))) {
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
