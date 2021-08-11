// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let obejtos = [];
  
  tech.sort();

  for (index = 0; index < tech.length; index += 1) {
    obejtos.push({
      name: name,
      tech: tech[index],
    })
  }
  if (tech.length === 0) {
    return "Vazio!"
  }
  return obejtos;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let valoresDoTriangulo = [lineA, lineB, lineC];
  valoresDoTriangulo.sort((a, b) => a - b)

  if (lineB + lineC > lineA && lineA > Math.abs(lineB - lineC)) {
     if (lineC > lineA + lineB) {
       return false;
     } else {
       return true;
     }
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
