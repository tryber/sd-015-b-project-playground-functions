// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {

}

// Desafio 12
function testLine(test, line1, line2) {
  if (test < (line1 + line2) && test > Math.abs(line1 - line2)) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  if (testLine(lineA, lineB, lineC) && testLine(lineB, lineA, lineC)
  && testLine(lineC, lineA, lineB)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(phrase) {
  let count = 0;
  if (phrase.length > 0) {
    let arrayNumbers = phrase.match(/\d+/g);
    for (let i = 0; i < arrayNumbers.length; i += 1) {
      count += parseInt(arrayNumbers[i], 10);
    }
  }
  if (count === 1) {
    return '1 copo de água';
  }
  return `${count} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
