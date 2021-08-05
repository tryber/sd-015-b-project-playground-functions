// Desafio 10
function techList(array, name) {
  let output = [];

  for (let index = 0; index < array.length; index++) {
    output.push({
      name: name,
      tech: array[index],
    });
  }

  if (output.length === 0) {
    return 'Vazio!';
  }

  output.sort(function (x, y) {
    x = x.tech.toUpperCase();
    y = y.tech.toUpperCase();

    if (x > y) {
      return 1;
    }
    if (x < y) {
      return -1;
    }
    return 0;
  });

  return output;
}
// Desafio 11
function generatePhoneNumber(array) {
  let phoneNumber = '';

  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < array.length; index++) {
    let control = 0;

    for (let indice = 0; indice < array.length; indice++) {
      if (array[index] === array[indice]) {
        control++;
      }
    }

    if (control >= 3 || array[index] < 0 || array[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let index = 0; index < array.length; index++) {
    switch (index) {
      case 0:
        phoneNumber += `(${array[index]}`;
        break;

      case 1:
        phoneNumber += `${array[index]}) `;
        break;

      case 6:
        phoneNumber += `${array[index]}-`;
        break;

      default:
        phoneNumber += `${array[index]}`;
    }
  }

  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  }

  if (
    (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) ||
    (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) ||
    (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB))
  ) {
    return true;
  }
}

// Desafio 13
function hydrate(string) {
  string = string.replace(/\D/g, '');
  let takeWaterCup = 0;
  for (index = 0; index < string.length; index++) {
    let waterCup = parseInt(string[index], 10);
    takeWaterCup = takeWaterCup + waterCup;
  }

  switch (takeWaterCup) {
    case 1:
      return `${takeWaterCup} copo de água`;
      break;

    default:
      return `${takeWaterCup} copos de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
