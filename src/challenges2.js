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
      name: name,
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

//Verifica se o tamanho do array é válido
//Retorna TRUE se o tamanho for igual a 11
function isLengthValid(array) {
  if (array.length != 11) {
    return false;
  } else {
    return true;
  }
}

//Verifica se os valores dentro do array são válidos
//Retorna TRUE se os valores estiverem entre 0 e 9
function isValueValid(numbers) {
  for (let number of numbers) {
    if (number < 0 || number > 9) {
      return false;
    }
  }
  return true;
}

//Verifica se a sequencia de números do array é válida
//Retorna TRUE se um número não se repetir 3x ou mais
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

//Verifica se o array é válido
//Retorna TRUE se o array passar nas verificaçõs de isSequenceValid e isValueValid
function isArrayValid(array) {
  let values = isValueValid(array);
  let repetitions = isSequenceValid(array);

  return values && repetitions;
}
