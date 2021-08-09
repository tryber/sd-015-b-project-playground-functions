// Desafio 10
function techList(techs, name) {
  if (techs.length === 0) {
    return 'Vazio!'
  } else {
    techs.sort()
  }
  let techObjects = [];
  for (index = 0; index < techs.length; index += 1) {
    techObjects.push({
      tech: techs[index],
      name: name,
    });
  }return techObjects;
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  function countRepeat(phoneNumber){
    for (index = 0; index < phoneNumber.length; index += 1) {
      let count = 0;
      for (i = index; i < phoneNumber.length; i += 1) {
        if (phoneNumber[index] === phoneNumber[i]) {
          count += 1;
          if (count >= 3) {
            return false;
          }
        }
      }
    }
  }
  let correctNumber = '(';
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else if (countRepeat(phoneNumber) === false) {
      return 'não é possível gerar um número de telefone com esses valores';
  } else {
    for (index = 0; index < phoneNumber.length; index += 1) {
      if (phoneNumber[index] > 9 || phoneNumber[index] < 0) {
        return 'não é possível gerar um número de telefone com esses valores';
      } else {
        if ([index] <= 1) {
          correctNumber += String(phoneNumber[index]);
        }else if ([index] == 2) {
          correctNumber = correctNumber + ") " + String(phoneNumber[index]);
        }else if ([index] == 7) {
          correctNumber = correctNumber + "-" + String(phoneNumber[index]);
        }else if (3 <= [index] <= 6 || [index] >= 8) {
          correctNumber += String(phoneNumber[index]);
        }
      }
    }
  } return correctNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ( Math.abs(lineB - lineC) < lineA && lineA < (lineB + lineC)) {
    return true;
  }else if ( Math.abs(lineA - lineB) < lineC && lineC < (lineA + lineB)) {
    return true;
  }else if ( Math.abs(lineA - lineC) < lineB && lineB < (lineA + lineC)) {
    return true;
  }else {
    return false;
  }
}

// Desafio 13
function hydrate(phrase) {
  let reg = /\d+/g;
  let numbers = phrase.match(reg);
  let waterCups = 0;
  for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > 0 && numbers[index] < 9) {
      waterCups += parseInt(numbers[index]);
    }else {
      return 'Insira números no intervalo de 1 à 9';
    }
  }
  if (waterCups === 1) {
    return waterCups + ' copo de água';
  }else {
    return waterCups + ' copos de água';
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
