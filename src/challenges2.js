// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }

  tech.sort();

  let techName = [];
  for (let index = 0; index < tech.length; index += 1) {
    let objects = {
      tech: tech[index],
      name };
    techName.push(objects);
  }

  return techName;
}

// Desafio 11
function generatePhoneNumber() {

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangle = false;

  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    triangle = true;
  }

  return triangle;
}

// Desafio 13
function hydrate(string) {
  let num = (/\d+/g);
  let array = string.match(num);
  let cupWater = 0;

  for (let pos of array) {
    cupWater += parseInt(pos, 10);
  }

  if (cupWater === 1) {
    return `${cupWater} copo de água`;
  } return `${cupWater} copos de água`;
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
