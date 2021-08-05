// Desafio 10
function techList () {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber () {
  // seu código aqui
}

// Desafio 12
// a medida de qqr lado seja menor q a soma dos outros dois e maior q o valor da diferença
// Math.abs(lineA - lineB)

function triangleCheck (lineA, lineB, lineC) {
  if (lineA + lineB > lineC && lineC > Math.abs(lineA - lineB) || lineC + lineB > lineA && lineA > Math.abs(lineC - lineB) || lineA + lineC > lineB && lineB > Math.abs(lineA - lineC)) {
    return true
  } else {
    return false
  }
}
console.log(triangleCheck(10, 150, 8))

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
