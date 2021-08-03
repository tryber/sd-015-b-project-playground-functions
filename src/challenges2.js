// Desafio 10
function techList(vetor,name) {
  let obj = {}
  for (index in vetor) {
    obj[index] = {
      tech: vetor[index],
      name: name
    }
  }
  return obj
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"));

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
