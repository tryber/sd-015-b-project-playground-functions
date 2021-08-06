// Desafio 10
function techList(arrayTech, name) {
  let arr = arrayTech.sort();
  let arrayTechList = [];

  if (arr.length === 0) {
    return 'Vazio!';
  } { for (let index = 0; index < arr.length; index += 1) {
    arrayTechList.push({
      tech: arr[index],
      name,
    });
  }
  }
  return arrayTechList;
}

// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  if (arrayNumbers.length !== 11) {
    return ('Array com tamanho incorreto.');
  }
  for (let index = 0; index <= arrayNumbers.length; index += 1) {
    let vezesQueRepete = 0;
    for (let i = 0; i <= arrayNumbers.length; i += 1) {
      if (arrayNumbers[index] === arrayNumbers[i]) {
        vezesQueRepete += 1;
      } else if (arrayNumbers[i] < 0 || arrayNumbers[i] > 9) {
        return ('não é possível gerar um número de telefone com esses valores');
      }
    }
    if (vezesQueRepete >= 3) {
      return ('não é possível gerar um número de telefone com esses valores');
    }
  }
  arrayNumbers = `(${arrayNumbers[0]}${arrayNumbers[1]}) ${arrayNumbers[2]}${arrayNumbers[3]}${arrayNumbers[4]}${arrayNumbers[5]}${arrayNumbers[6]}-${arrayNumbers[7]}${arrayNumbers[8]}${arrayNumbers[9]}${arrayNumbers[10]}`;
  return arrayNumbers;
}
(generatePhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (
     (lineB + lineC > lineA) && lineA > Math.abs(lineB - lineC) ||
     (lineA + lineC > lineB) && lineB > Math.abs(lineA - lineC) ||
     (lineA + lineB > lineC) && lineC > Math.abs(lineA - lineB)
     ) {
   return (true);
 } else {
   return (false);
  }
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
