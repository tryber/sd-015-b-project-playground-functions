// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  } else {
    tech.sort();
    let result = [];
    for (let index = 0; index < tech.length; index += 1) {
      result.push({
        tech: tech[index],
        name: name,
      });
    }
    return result;
  }
}

// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length != 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let repeat = 1;
    for (let cont = index + 1; cont < numbers.length; cont += 1) {
      if (numbers[index] === numbers[cont]) {
        repeat += 1;
        if (repeat >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }
  let format = numbers.join('');
  let prefix = format.slice(0, 2);
  let firstPart = format.slice(2, 7);
  let secondPart = format.slice(7, 12);
  let phoneNumber = '(' + prefix + ')' + ' ' + firstPart + '-' + secondPart;
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    if (lineB < lineC + lineA && lineB > Math.abs(lineC - lineA)) {
      if (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) {
        return true;
      }
    }
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(phrase) {
  let numbers = /\d+/g;
  let result = phrase.match(numbers);
  let numberGlass = 0;

  for (let index = 0; index < result.length; index += 1) {
    numberGlass += parseInt(result[index]);
  }
  let glassesWater = numberGlass + ' copos de água';
  return (glassesWater);
}


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
