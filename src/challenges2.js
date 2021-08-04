// Desafio 10
function techList(array, name) {
  // seu código aqui
  let lista = {
  }
  let lista2 = {
  }
  for (let index = 0; index > array.length; index += 1) {
    lista['tech'] = array[index];
    lista2['tech'] = array[index];
  }
  return console.log([lista, lista2])
}
techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas')

// Desafio 11
function generatePhoneNumber(numero) {
  // seu código aqui
  if (numero.length === 11) {
    return console.log('(' + numero[0] + numero[1] + ') ' + numero[2] + numero[3] + numero[4] + numero[5] + numero[6] + '-' + numero[7] + numero[8] + numero[9] + numero[10])
  } else if () {

  }
  else {
    return console.log('Array com tamanho incorreto')
  }
}
generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]);
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
