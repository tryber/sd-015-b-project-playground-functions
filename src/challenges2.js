// Desafio 10
function techList(techName, name) {
  // seu código aqui
  let bankOfSkill = []
  let changeSort = techName.sort()
  
  if (techName.length === 0)
    return "Vazio!"

  for (let index = 0; index < changeSort.length; index += 1){
    bankOfSkill.push({tech: changeSort[index], name: name,})
  }
  return bankOfSkill
}

// Desafio 11
function generatePhoneNumber(numberFone) {
  // seu código aqui
  let numberFone2 = numberFone

  if (numberFone.length !== 11)
    return "Array com tamanho incorreto."
  
  for (let index = 0; index < numberFone.length; index += 1) {
    if (numberFone[index] < 0 || numberFone[index] > 9)
      return "não é possível gerar um número de telefone com esses valores"
  }

  let count
  for (let index = 0; index < numberFone.length; index += 1) {
    count = 0
    for (let chave = 0; chave < numberFone.length; chave += 1) {
      if (numberFone[index] === numberFone2[chave]) {
        count += 1
        }
      }
    if (count >= 3)
      return "não é possível gerar um número de telefone com esses valores"
  }
    
    return phoneDDD = "(" + numberFone[0] + numberFone[1] +")" + " " + numberFone[2] + numberFone[3] + numberFone[4] + numberFone[5] + numberFone[6] + "-" + numberFone[7] + numberFone[8] + numberFone[9] + numberFone[10] 
}


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return lineA < (lineC + lineB) && lineB < (lineA + lineC)&& lineC < (lineA + lineB)
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
