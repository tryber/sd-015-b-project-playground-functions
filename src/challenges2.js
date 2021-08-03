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

console.log(generatePhoneNumber([5, 2, 8, 1, 5, 3, 7, 2, 8, 9, 0]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
