// Desafio 10
function techList () {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber () {
  // seu código aqui
}

// Desafio 12
function triangleCheck (lineA, lineB,lineC) {
  if(lineA + lineB > lineC && lineC > Math.abs(lineA - lineB) || lineC + lineB > lineA && lineA > Math.abs(lineC - lineB) || lineA + lineC > lineB && lineB > Math.abs(lineA - lineC)){
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate () {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck
}
