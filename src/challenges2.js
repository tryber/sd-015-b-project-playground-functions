// Desafio 10
function techList(tech, name) {
  let ListTech = [];
  if (tech.length === 0) {
    ListTech = 'Vazio!';
  } else {
    for (let indice in tech.sort()) {
      let skill ={
        tech: tech[indice],
        name: name,
      }
      ListTech.push(skill);
    }
  }
  return ListTech;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB,lineC) {
  let checkLine = true;

  if (checkLine === false) {
    checkLine = false;
  } else if ((lineA < (lineB + lineC)) && (lineA > Math.abs(lineB - lineC))) {
    checkLine = true;
  } else {
    checkLine = false;
  }

  if (checkLine === false) {
    checkLine = false;
  } else if ((lineB < (lineA + lineC)) && (lineB > Math.abs(lineA - lineC))) {
    checkLine = true;
  } else {
    checkLine = false;
  }

  if (checkLine === false) {
    checkLine = false;
  } else if ((lineC < (lineB + lineA)) && (lineC > Math.abs(lineB - lineA))) {
    checkLine = true;
  } else {
    checkLine = false;
  }
  return checkLine
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
