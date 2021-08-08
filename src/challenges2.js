// Desafio 10
function techList(techArray, name) {}

// Desafio 11

function generatePhoneNumber() {}

// Desafio 12
function triangleLines(lineA, lineB, lineC) {
  if (lineA + lineB > lineC && lineB + lineC > lineA && lineC + lineA > lineB) {
    return check = true;
  }
}

function triangleCheck(lineA, lineB, lineC) {
  check = false;
  triangleLines(lineA, lineB, lineC);
  return check;
}

// Desafio 13
function hydrate(sentence) {
  const regex = /[1-9]/g;
  let counter = 0;
  const arr = sentence.match(regex);

  for (let value of arr) {
    value = parseFloat(value);
    counter += value;
  } if (counter === 1) {
    return '1 copo de água';
  } return `${counter} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
