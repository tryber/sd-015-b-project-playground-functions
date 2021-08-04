// Desafio 10
function techList(techName, name) {
  // seu código aqui
  let bankOfSkill = []
  let changeSort = techName
  changeSort.sort()
  let flip

  for (let index = 0; index < changeSort.length; index += 1){
    flip = {  tech: changeSort[index], name: name,}
    bankOfSkill.push(flip)
  }
  if (bankOfSkill.length === 0)
    return "Vazio!"
  else
    return bankOfSkill
}

console.log(techList([], 'Lucas'));
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
