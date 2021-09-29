// Desafio 10
function techList(techs, name) {
  if (techs.length === 0) {
    return 'Vazio!';
  }
  return techs.map((tech) => ({ tech, name })).sort((a, b) => a.tech > b.tech);
}

// Desafio 11
function numberRepet(array) {
  return array.map((num) => array.filter((num2) => num2 === num))
    .some((arr) => arr.length >= 3);
}

function verificaNumeros(numbers) {
  for (let i of numbers) {
    if (i < 0 || i > 9 || numberRepet(numbers)) {
      return true;
    }
  }
}

function organization(numbers) {
  const numString = [];
  numString.push(`(${numbers[0]}${numbers[1]})`);
  numString.push(' ');
  numString.push(`${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}`);
  numString.push(`-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`);
  return numString.join('');
}

function generatePhoneNumber(numbers) {
  if (numbers.length < 11 || numbers.length > 11) {
    return 'Array com tamanho incorreto.';
  }
  if (verificaNumeros(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return organization(numbers);
}

// Desafio 12
function comparacaoLineA(lineA, lineB, lineC) {
  return lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
}

function comparacaoLineB(lineA, lineB, lineC) {
  return lineB < lineA + lineC && lineB > Math.abs(lineA - lineC);
}

function comparacaoLineC(lineA, lineB, lineC) {
  return lineC < lineB + lineA && lineC > Math.abs(lineB - lineA);
}

function triangleCheck(lineA, lineB, lineC) {
  let a = comparacaoLineA(lineA, lineB, lineC);
  let b = comparacaoLineB(lineA, lineB, lineC);
  let c = comparacaoLineC(lineA, lineB, lineC);
  return a && b && c;
}

// Desafio 13
function extractNumbers(str) {
  return str.replace(/[^0-9]/g, '').split('')
    .reduce((acc, num) => acc + Math.round(num), 0);
}

function hydrate(bebidas) {
  const glassWater = extractNumbers(bebidas);
  return glassWater > 1 ? `${glassWater} copos de água` : `${glassWater} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
