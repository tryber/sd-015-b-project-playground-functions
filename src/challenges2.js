// Desafio 10 - CHECK
function techList(techs, name) {
  // seu código aqui
  let techsList = [];
  techs.sort();
  for (let i = 0; i < techs.length; i += 1) {
    let obj = {
      name: name,
      tech: techs[i],
    };

    techsList.push(obj);
  }
  if (techs.length <= 1) {
    return 'Vazio!';
  }
  return techsList;
}

// Desafio 11 - CHECK ---Refatorar essa função
function generatePhoneNumber(numbers) {
  // seu código aqui
  let phoneNumber = '';

  for (let i = 0; i < numbers.length; i += 1) {
    switch (i) {
      case 0:
        phoneNumber += '(' + numbers[i];
        break;
      case 1:
        phoneNumber += numbers[i] + ') ';
        break;
      case 6:
        phoneNumber += numbers[i] + '-';
        break;
      default:
        phoneNumber += numbers[i];
        break;
    }
  }
  for (let j = 0; j < numbers.length; j += 1) {
    if (numbers[j] > 9 || numbers[j] < 0) {
      phoneNumber = 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let repeated = -1;
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = 0; j < numbers.length; j += 1) {
      if (i !== j) {
        if (numbers[i] === numbers[j]) {
          repeated += 1;
        }
      } else {
        break;
      }
    }
  }
  if (numbers.length !== 11) {
    phoneNumber = 'Array com tamanho incorreto.';
  } else if (repeated >= 3) {
    phoneNumber = 'não é possível gerar um número de telefone com esses valores';
  }
  return phoneNumber;
}

// Desafio 12 - CHECK
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let sum = lineA + lineB;
  let diff = Math.abs(lineA - lineB);

  if (lineC < sum && lineC > diff) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(drinks) {
  // seu código aqui
  let digits = drinks.replace(/\D/g, '');
  let sum = 0;

  for (let i = 0; i < digits.length; i += 1) {
    sum += parseInt(digits[i], 10);
  }

  if (sum === 1) {
    return sum + ' copo de água';
  }

  return sum + ' copos de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
