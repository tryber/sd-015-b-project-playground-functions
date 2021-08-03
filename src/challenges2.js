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
  if (vetor.length!=11) {
    return "Array com tamanho incorreto."
  }
  ramal = '(' + vetor[0] + vetor[1] + ')';
  numFirst = ' '+vetor[2] + vetor[3] + vetor[4] + vetor [5] + vetor[6];
  numLast = '-'+vetor[7]+vetor[8]+vetor[9]+vetor[10];
  for (numero of vetor) {
    let count = 0
    if (numero < 0) {
      return "não é possível gerar um número de telefone com esses valores"
    }
    else if (numero>9) {
      return "não é possível gerar um número de telefone com esses valores"
    }
    for (index in vetor) {
      if (vetor[index] === numero){
        count +=1
        if (count ===3) {
          return "não é possível gerar um número de telefone com esses valores"
        }
      }
    }
  }
  return ramal+numFirst+numLast
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))
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
