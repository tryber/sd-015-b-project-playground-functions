// Desafio 10
function techList(arrayTech, name) {
  let orderedArray = arrayTech.sort();
  let techObject = {};
  let arrayObjects = [];

  if (arrayTech.length > 0) {
    for (let tech of orderedArray) {
      techObject.tech = tech;
      techObject.name = name;
      arrayObjects.push(techObject);
      techObject = {};
    }
    return arrayObjects;
  }
  return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let absA = Math.abs(lineA);
  let absB = Math.abs(lineB);
  let absC = Math.abs(lineC);

  if (lineA > lineB + lineC || lineB > lineC + lineA || lineC > lineA + lineB) {
    return false;
  }
  else if (lineA < absB - absC || lineB < absA - absC || lineC < absA - absB) {
    return false;
  }
  return true;
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
