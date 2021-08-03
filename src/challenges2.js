// Desafio 10
function techList(techs, name) {
  // seu código aqui
  if (techs.length > 0) {
    let objList = [];
    techs.sort();

    for (const tech of techs) {
      let obj = {};

      obj.tech = tech;
      obj.name = name;

      objList.push(obj);
    }

    return objList;
  } else {
    return 'Vazio!';
  }
}

// Desafio 11
function isValidNumber(numbers) {
  numbers.sort((a, b) => a - b);
  let actualNumber = numbers[0];
  let repeat = 0;

  for (const num of numbers) {
    if (num < 0 || num > 9) {
      return false;
    }

    if (num === actualNumber) {
      repeat += 1;

      if (repeat >= 3) {
        return false;
      }
    } else {
      actualNumber = num;
      repeat = 1;
    }
  }

  return true;
}

function generatePhoneNumber(numbers) {
  // seu código aqui
  if (numbers.length != 11) {
    return 'Array com tamanho incorreto.';
  }

  //https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
  if (isValidNumber([...numbers]) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  let phoneNumber = numbers.join('');
  let ddd = phoneNumber.substr(0, 2);
  let firstPart = phoneNumber.substr(0 + 2, 5);
  let secondPart = phoneNumber.substr(0 + 2 + 5, 4);
  phoneNumber = '(' + ddd + ')' + ' ' + firstPart + '-' + secondPart;

  return phoneNumber;
}

// Desafio 12
function checkLine(a, b, c) {
  return a < b + c && a > Math.abs(b - c);
}

function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  const isLineAOk = checkLine(lineA, lineB, lineC);
  const isLineBOk = checkLine(lineB, lineA, lineC);
  const isLineCOk = checkLine(lineC, lineA, lineB);

  return isLineAOk && isLineBOk && isLineCOk;
}

// Desafio 13
function hydrate(sentence) {
  // seu código aqui
  let numbersStr = sentence.replace(/\D/g, '');
  let numbers = numbersStr.split('');
  let sum = 0;

  for (const num of numbers) {
    sum += parseInt(num);
  }

  if (sum === 1) {
    return sum + ' copo de água';
  } else {
    return sum + ' copos de água';
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
