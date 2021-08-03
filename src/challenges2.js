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
function generatePhoneNumber(vetor) {
  if (vetor.length>10) {
    return "Array com tamanho incorreto."
  }
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  if (lineA < lineB+lineC && lineA > Math.abs(lineB-lineC)) {
    return true
  }
  else if (lineB < lineA+lineC && lineB > Math.abs(lineA-lineC)) {
    return true
  }
  else if (lineC < lineB+lineA && lineC > Math.abs(lineB-lineA)) {
    return true
  }
  else {
    return false
  }
}
console.log(triangleCheck(10, 14, 8));

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
