// Desafio 10
function techList(stacks) {
  stacks = stacks.sort();

  if (stacks.length === 0) {
    stacks = 'Empty';
  } else {
    for (const key in stacks) {
      stacks.push({
        tech: stacks[key],
        name: nome,
      })
    } return stacks;
}
} techList(['Nodejs', 'Reactjs', 'SCRUM'], Gustavo);

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (
    lineA >= lineB + lineC ||
    lineB >= lineA + lineC ||
    lineC >= lineB + lineA)
  {
    return false;
  } else {
    return true;
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
