// Desafio 10
function techList(tech, name) {
  let result = [];
  tech.sort();

  for (let i = 0; i < tech.length; i += 1) {
    result.push({ tech: tech[i] });
    result[i].name = name;
  }

  if (tech.length > 0) {
    return result;
  }
  return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) { return 'Array com tamanho incorreto.'; }
  for (let i = 0; i < array.length; i += 1) {
    let repeats = 1;
    for (let i2 = i + 1; i2 < array.length; i2 += 1) {
      if (array[i] === array[i2]) {
        repeats += 1;
      }
    }
    if (array[i] < 0 || array[i] > 9 || repeats >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let phoneNumber = `(${array[0]}${array[1]}) `;

  for (let i = 2; i < array.length; i += 1) {
    phoneNumber += array[i];
    if (i === 6) {
      phoneNumber += '-';
    }
  }

  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result = false;

  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    result = false;
  } else if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB)) {
    result = false;
  } else {
    result = true;
  }
  return result;
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let water = string.match(/\d+/g).map(Number);
  // créditos pela variável water: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript
  let result = 0;

  for (let i = 0; i < water.length; i += 1) {
    result += water[i];
  }

  if (result === 1) {
    return `${result} copo de água`;
  }
  return `${result} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
