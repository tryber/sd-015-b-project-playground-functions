// Desafio 10
function techList(techsToLearn, name) {
  // seu código aqui
  let newArray = [];
  techsToLearn.sort();

  if (techsToLearn.length === 0) {
    return 'Vazio!';
  } else {
    for (let techName of techsToLearn) {
      let techsObject = {
        tech: techName,
        name,
      };
      newArray.push(techsObject);
    } return newArray;
  }
}

// Desafio 11
function generatePhoneNumber(phoneNumberList) {
  // seu código aqui

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let contador = 0;
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC) ) {
    return true;
  } else if (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB)) {
    return true;
  } else {
    return false;
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
