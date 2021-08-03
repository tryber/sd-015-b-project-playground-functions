// Desafio 10
function techList(techNames, names) {
  let finalPhrase = [];
  if (techNames.length === 0){
    return "Vazio!"
  }
  else{
    for(let index in techNames){
      techNames.sort();
      let info = {
          tech: techNames[index],
          name: names
        }
      finalPhrase.push(info)
      }
    return finalPhrase;
  }
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
