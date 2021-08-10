// Desafio 10
function makeObjectTechList(techList, name) {
  techList.sort();
  let createdObject = [];

  for (let index = 0; index < techList.length; index += 1) {
    console.log(techList[index]);
    let createObject = { tech: techList[index], name: name };
    createdObject.push(createObject);
  }
  return createdObject;
  /**
   * Dica para criar objeto dinâmicamente dada pelo usuário hugomg, em:
   * https://pt.stackoverflow.com/questions/64116/%C3%89-poss%C3%ADvel-criar-um-objeto-dinamicamente-em-js-sem-utilizar-eval
   * Também tive ajuda dos colegas de formação conforme conversa que se iniciou em:
   * https://trybecourse.slack.com/archives/C027T2VU8U8/p1628354184324500
   */
}

function techList(receivedList, receivedName) {
  // seu código aqui
  return (receivedList.length > 0) ? makeObjectTechList(receivedList, receivedName) : 'Vazio!';
}

// Desafio 11
function apparitionsOfNumber (receivedNumber, receivedArray) {
  let indexesOfRepeated = [];
  for (let i = 0; i < receivedArray.length; i += 1) {
      (receivedNumber === receivedArray[i]) ? indexesOfRepeated.push(i) : false
  }
  return indexesOfRepeated.length
}

function apparitionsAreTooMuch (receivedNumbers) {
  let controlArray = [];
  for (let index = 0; index < receivedNumbers.length; index += 1) {
      (apparitionsOfNumber(receivedNumbers[index], receivedNumbers) >= 3) ? controlArray.push(receivedNumbers[index]) : false;
  }
  return controlArray.length >= 3;

}

function isValidArrayOfNumbers (receivedNumbers) {
  let validNumbers = [];
  for (receivedNumber of receivedNumbers) {
    (receivedNumber <= 9 && receivedNumber >= 0) ? validNumbers.push(receivedNumber) : validNumbers = [];
  }
  return validNumbers.length === 11;
}

function generatePhoneNumber (receivedNumbers) {
  if (receivedNumbers.length != 11) {
      return  'Array com tamanho incorreto.';
  } else if (!isValidArrayOfNumbers(receivedNumbers) || apparitionsAreTooMuch(receivedNumbers)) {
      return 'não é possível gerar um número de telefone com esses valores';
  } else {
      return receivedNumbers.join('').replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  }
}

// Desafio 12
function absoluteDiference (numberA, numberB) {
  return Math.abs(numberA - numberB);
}

function testLineForTriangle (lineA, lineB, lineC) {
  return lineA < (lineB + lineC) && lineA > absoluteDiference(lineB, lineC);
}

function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let testA = testLineForTriangle(lineA, lineB, lineC);
  let testB = testLineForTriangle(lineB, lineA, lineC);
  let testC = testLineForTriangle(lineC, lineA, lineB);
  return testA && testB && testC;

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
