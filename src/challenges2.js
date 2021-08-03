// Desafio 10
function techList(vetor,name) {
  vector = vetor.sort()
  let obj = {}
  let resp = []
  for (index in vector) {
    obj[index] = {
      tech: vetor[index],
      name: name
    }
    resp.push(obj[index])

  }
  if (vetor.length>0) {
    return resp
  }
  else{
    return "Vazio!"
  }
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
