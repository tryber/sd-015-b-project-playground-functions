// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }

  tech.sort();

  let techName = [];
  for (let index = 0; index < tech.length; index += 1) {
    let objects = {
      tech: tech[index],
      name };
    techName.push(objects);
  }

  return techName;
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < array.length; index += 1) {
    let num = 0;
    for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1) {
      if (array[index] === array[secondIndex]) {
        num += 1;
      }
    }
    if (array[index] < 0 || array[index] > 9 || num >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let resultNumber = '(' + array[0] + array[1] + ') ' + array[2] + array[3] + array[4] + array[5]  + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
  return resultNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangle = false;

  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    triangle = true;
  }

  return triangle;
}

// Desafio 13
function hydrate(string) {
  let num = (/\d+/g);
  let array = string.match(num);
  let cupWater = 0;

  for (let pos of array) {
    cupWater += parseInt(pos, 10);
  }

  if (cupWater === 1) {
    return `${cupWater} copo de água`;
  } return `${cupWater} copos de água`;
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
