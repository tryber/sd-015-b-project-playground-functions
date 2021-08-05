// Desafio 10
function techList(nomeTech, inputName) {
  let finalResult = [];
  if (nomeTech.length === 0) {
    return 'Vazio!';
  } else {
    nomeTech.sort();
    for (let element in nomeTech) {
      let object = {
        tech: nomeTech[element],
        name: inputName,
      };
      finalResult.push(object);
    }
    return finalResult;
  }
}
techList([], 'alex');

function tamanho(number) {
  if (number.length !== 11) {
    return false;
  } else {
    return true;
  }
}

function CompararNumero(number) {
  let resultado = true;
  for (let element in number) {
    if (number[element] > 9 || number[element] < 0) {
      resultado = false;
    }
  }
  return resultado;
}

function repeat(number) {
  let vezesRepete = 0;
  let result = true;
  for (let index = 0; index < number.length; index += 1) {
    for (let index2 = 0; index2 < number.length; index2 += 1) {
      if (number[index] === number[index2]) {
        vezesRepete += 1;
      }
    }
    if (vezesRepete >= 3) {
      result = false;
    }
    vezesRepete = 0;
  }
  return result;
}

// Desafio 11
function generatePhoneNumber(number) {
  if (tamanho(number) === false) {
    return 'Array com tamanho incorreto.';
  } else if (CompararNumero(number) === false || repeat(number) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  } else {
    let string =
      '(' +
      number[0] +
      number[1] +
      ') ' +
      number[2] +
      number[3] +
      number[4] +
      number[5] +
      number[6] +
      '-' +
      number[7] +
      number[8] +
      number[9] +
      number[10];
    return string;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineB + lineA) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(bebida) {
  let numeroBebida = bebida.match(/\d/g);
  let numeroInteiro = 0; //1
  for (let index = 0; index < numeroBebida.length; index += 1) {
    numeroInteiro = numeroInteiro + parseInt(numeroBebida[index]);
  }
  if (numeroInteiro === 1) {
    return '1 copo de água';
  }
  return numeroInteiro + ' copos de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
