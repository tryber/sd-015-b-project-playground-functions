// Desafio 10
function techList(arrTechList, name) {
  if (arrTechList.length == 0) return 'Vazio!'

  let lista = []

  arrTechList.sort()

  for (let cont = 0; cont < arrTechList.length; cont += 1) {
    
    lista.push({
      tech: arrTechList[cont],
      name:name,
    })
  }
return lista
}

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
