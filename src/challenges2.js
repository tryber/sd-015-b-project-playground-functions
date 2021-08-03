// Desafio 10
function techList(techArray, name) {
  let returnArray = [];
  for (let tech of techArray.sort()) {
    returnArray.push({
      tech: tech,
      name: name,
    });
  }
  if (returnArray.length !== 0) {
    return returnArray;
  } else {
    return 'Vazio!';
  }
}

// Desafio 11
function generatePhoneNumber(numbersArray) {
  let returnString = '';
  // Inicio checkagem de números
  if (numbersArray.length === 11) {
    let counter = 0;
    for (let number of numbersArray) {
      if ((counter >= 3) || (number < 0) || (number > 9)) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      counter = 0;
      for (let number2 of numbersArray) {
        if (number === number2) {
          counter += 1;
        }
      }
    }
  } else {
    return 'Array com tamanho incorreto.';
  }
  // Inicio da formatação
  let base = {
    0: '(',
    2: ') ',
    7: '-',
  };
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (index in base) {
      returnString += base[index] + numbersArray[index].toString();
    } else {
      returnString += numbersArray[index].toString();
    }
  }
  return returnString;
} 

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let possible = true;
  // Verificação Linha A 
  if ((lineA >= (lineB + lineC)) || (lineA <= Math.abs(lineB - lineC))) {
    possible = false;
  }
  //Verificação Linha B 
  if ((lineB >= (lineA + lineC)) || (lineB <= Math.abs(lineA - lineC))) {
    possible = false;
  }
  //Verificação Linha C 
  if ((lineC >= (lineA + lineB)) || (lineC <= Math.abs(lineA - lineB))) {
    possible = false;
  }
  return possible;
}

// Desafio 13
function hydrate(phrase) {
  let referenceList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let counter = 0;
  let returnString;
  phrase = phrase.split('');
  for (let letter of phrase) {
    if (Number(letter) in referenceList) {
      counter += Number(letter);
    }
  }
  if (counter === 1) {
    returnString = counter.toString() + ' copo de água';
  } else if (counter > 1) {
    returnString = counter.toString() + ' copos de água';
  }
  return returnString;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
