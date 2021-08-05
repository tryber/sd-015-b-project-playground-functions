// Desafio 10
function techList(array, name) {
  // seu código aqui
  if (array.length > 0) {
    let techArray = [];
    array = array.sort();
    for (let i = 0; i < array.length; i += 1) {
      let obj = {
        tech: array[i],
        name,
      };
      techArray.push(obj);
    }
    return techArray;
  }
  return 'Vazio!';
}

// Desafio 11
function verificationOfNumberRepetition(numbers) {
  let validNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < numbers.length; i += 1) {
    let cont = 0;

    for (let j = 0; j < numbers.length; j += 1) {
      if (validNumbers[i] === numbers[j]) {
        cont += 1;
      }
      if (cont >= 3) {
        return false;
      }
    }
  }
  return true;
}
function verificationOfPhoneNumber(numbers) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < 0 || numbers[i] > 9) {
      return false;
    }
  }
  return true;
}
function generatePhoneNumber(numbers) {
  // seu código aqui
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else if (verificationOfPhoneNumber(numbers) && verificationOfNumberRepetition(numbers)) {
    let phoneNumber = [];
    for (let i = 0; i < numbers.length; i += 1) {
      if (i === 0) phoneNumber.push('(');
      else if (i === 2) phoneNumber.push(') ');
      else if (i === 7) phoneNumber.push('-');
      phoneNumber.push(numbers[i]);
    }
    return phoneNumber.join('');
  } else {
    return 'não é possível gerar um número de telefone com esses valores';
  }
}

// Desafio 12
function triAux(lineOne, lineTwo, lineThree) {
  return (Math.abs(lineOne - lineTwo) < lineThree && lineThree < (lineOne + lineTwo));
}
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  return triAux(lineB, lineC, lineA) && triAux(lineA, lineC, lineB) && triAux(lineA, lineB, lineC);
}

// Desafio 13
function hydrate(string) {
  // Peguei essa parte do stack overflow link: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
  let regex = /\d+/g;
  let matches = string.match(regex);
  // --------------------------------------------------------------
  let sum = 0;
  let finalString = '';

  for (let number of matches) {
    sum += parseInt(number);
  }

  if (sum > 1) {
    finalString = `${sum} copos de água`;
  } else {
    finalString = `${sum} copo de água`;
  }
  return finalString;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
