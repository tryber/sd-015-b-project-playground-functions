// Desafio 10
function techList(array, nome) {
  if (array.length === 0) {
    return 'Vazio!';
  } else {
    array.sort();
    for (let key in array) {
      let object = {
        tech: array[key],
        name: nome,
      }
    return object
    }
  }
} console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumAB = lineA + lineB;
  let sumAC = lineA + lineC;
  let sumBC = lineB + lineC;
  if (lineA < sumBC && lineA > Math.abs(lineB - lineC)
  && lineB < sumAC && lineB > Math.abs(lineA - lineC)
  && lineC < sumAB && lineC > Math.abs(lineA - lineB)) {
    return true;
  } else {
    return false;
  }
} console.log(triangleCheck(10, 14, 8));

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
