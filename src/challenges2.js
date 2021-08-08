// --------Funções usadas no desafio 11

// Verifica se o tamanho do array é válido
// Retorna TRUE se o tamanho for igual a 11
function isLengthValid(array) {
  let result;

  if (array.length !== 11) {
    result = false;
  } else {
    result = true;
  }

  return result;
}

// Verifica se os valores dentro do array são válidos
// Retorna TRUE se os valores estiverem entre 0 e 9
function isValueValid(numbers) {
  for (let number of numbers) {
    if (number < 0 || number > 9) {
      return false;
    }
  }
  return true;
}

// Verifica se a sequencia de números do array é válida
// Retorna TRUE se um número não se repetir 3x ou mais
function isSequenceValid(numbers) {
  for (let i in numbers) {
    let cont = 0;
    for (let j in numbers) {
      if (numbers[i] === numbers[j]) {
        cont += 1;
      }
    }
    if (cont === 3) {
      return false;
    }
  }

  return true;
}

// Verifica se o array é válido
// Retorna TRUE se o array passar nas verificaçõs de isSequenceValid e isValueValid
function isArrayValid(array) {
  let values = isValueValid(array);
  let repetitions = isSequenceValid(array);

  return values && repetitions;
}

// --------Funções usadas no desafio 12

// Verifica se a linha de um triângulo é válida
function lineCheck(hypotenuse, legA, legB) {
  let sum = legA + legB;
  let dif = Math.abs(legA - legB);
  let result;

  if (hypotenuse < sum && hypotenuse > dif) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

// --------Funções usadas no desafio 13

// Recebe uma string e retorna um array com todos numeros qeu tiverem na string
function getNumbers(string) {
  let numbers = [];
  let stringNumbers = string.split(/\D+/g);

  for (let num of stringNumbers) {
    numbers.push(Number(num));
  }

  return numbers;
}

// Recebe a quantidade de drinks e retorna a mensagem sugerida
function getMessenge(number) {
  let message = '';

  if (number === 1) {
    message = number + ' copo de água';
  } else {
    message = number + ' copos de água';
  }

  return message;
}

// Desafio 10
function techList(techs, name) {
  if (techs.length === 0) {
    return 'Vazio!';
  }

  let list = [];

  techs = techs.sort();

  for (let i in techs) {
    list[i] = {
      tech: techs[i],
      name,
    };
  }

  return list;
}

// Desafio 11

function generatePhoneNumber(numbers) {
  if (!isLengthValid(numbers)) {
    return 'Array com tamanho incorreto.';
  }

  if (!isArrayValid(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  let phoneNumber = '';

  for (let i in numbers) {
    switch (i) {
    case '0':
      phoneNumber += '(';
      phoneNumber += numbers[i];
      break;

    case '1':
      phoneNumber += numbers[i];
      phoneNumber += ') ';
      break;

    case '7':
      phoneNumber += '-';
      phoneNumber += numbers[i];
      break;

    default:
      phoneNumber += numbers[i];
      break;
    }
  }

  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let checkA = lineCheck(lineA, lineB, lineC);
  let checkB = lineCheck(lineB, lineA, lineC);
  let checkC = lineCheck(lineC, lineA, lineB);

  return checkA && checkB && checkC;
}

// Desafio 13
function hydrate(string) {
  let qdteDrinks = 0;
  let message = '';
  let numbers = getNumbers(string);

  for (let number of numbers) {
    qdteDrinks += number;
  }

  message = getMessenge(qdteDrinks);

  return message;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
