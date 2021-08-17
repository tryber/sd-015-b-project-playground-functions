// Desafio 10
function techList(arrTechList, name) {
  if (arrTechList.length == 0) return 'Vazio!'

  let lista = []

  arrTechList.sort()

  for (let cont = 0; cont < arrTechList.length; cont += 1) {

    lista.push({
      tech: arrTechList[cont],
      name: name,
    })
  }
  return lista
}

// Desafio 11
function generatePhoneNumber(arrGePhoNum) {
  if (arrGePhoNum.length != 11) return "Array com tamanho incorreto."
  for (let number of arrGePhoNum) {
    if (number < 0 || number > 9) return "não é possível gerar um número de telefone com esses valores"

    let guarana = 0

    for (let dollynho of arrGePhoNum) {
      if (dollynho === number) {
        guarana += 1
      }
      if (guarana === 3) {
        return "não é possível gerar um número de telefone com esses valores"
      }
    }
  }
  return `(${arrGePhoNum.slice(0, 2).join("")}) ${arrGePhoNum.slice(2, 7).join("")}-${arrGePhoNum.slice(7).join("")}`

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC) 
  || lineC < lineB + lineA && lineC > Math.abs(lineB - lineA) 
  || lineB < lineC + lineA && lineB > Math.abs(lineC - lineA)) {
    return true
  }else{
    return false
  }

}

// Desafio 13
function hydrate(strDollynho) {
  let regex = /\d+/g
  let savRegex = strDollynho.match(regex)
  let soma = 0
  for(let dolly of savRegex){
    soma+= Number(dolly)
    
  }
  
  return soma>1? `${soma} copos de água`: `${soma} copo de água`

}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
