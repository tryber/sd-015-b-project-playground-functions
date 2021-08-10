// Desafio 10
function verifVazio(array) {
  if (array.length > 0) {
    return array;
  }
  return 'Vazio!';
}

function createObjects(ordem, names) {
  let array = [];
  for (let index = 0; index < ordem.length; index += 1) {
    let objects = {
      tech: ordem[index],
      name: names,
    };
    array.push(objects);
  }
  return verifVazio(array);
}

function techList(tech, names) {
  let ordem = tech.sort();
  return createObjects(ordem, names);
}

// Desafio 11
function numberRepet(array) {
  let cont2 = 0;
  for (let i = 0; i < array.length; i += 1) {
    let cont = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        cont += 1;
      }
    }
    if (cont > cont2) {
      cont2 = cont;
    }
  }
  return cont2;
}

function verificaNumeros(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9 || numberRepet(numbers) > 2) {
      return true;
    }
  }
}

function organization(numbers) {
  let primeiros = [];
  primeiros.push(`(${numbers[0]}${numbers[1]})`);
  primeiros.push(' ');
  primeiros.push(`${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}`);
  primeiros.push(`-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`);
  return primeiros;
}

function joinNumbers(numbers) {
  return organization(numbers).join('');
}

function generatePhoneNumber(numbers) {
  if (numbers.length < 11 || numbers.length > 11) {
    return 'Array com tamanho incorreto.';
  }
  if (verificaNumeros(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return joinNumbers(numbers);
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
function stringParaInt(bebidas) {
  let string = bebidas.match(/\d+/g);
  let numeroBebidas = [];
  for (let index = 0; index < string.length; index += 1) {
    numeroBebidas.push(Number(string[index]));
  }
  return numeroBebidas;
}
function numerosDeBebidas(bebidas) {
  let numeroBebidas = stringParaInt(bebidas);
  let soma = 0;
  for (let index = 0; index < numeroBebidas.length; index += 1) {
    soma += numeroBebidas[index];
  }
  return soma;
}

function hydrate(bebidas) {
  let numero = numerosDeBebidas(bebidas);
  if (numero === 1) {
    return `${numero} copo de água`;
  }
  return `${numero} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
