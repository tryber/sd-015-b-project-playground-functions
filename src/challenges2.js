// Desafio 10
function techList(arrOfTechs, name) {
  let list = [];
  let objectList = {
    tech: arrOfTechs,
    name: name,
  }
  let newList = arrOfTechs.sort();
  for (let i = 0; i < newList.length; i += 1) {
    objectList.tech = newList[i];
    list.push(objectList);
  }

  return newlist;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
