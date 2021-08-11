// Desafio 10
function techList(tecnoArray, name) {
  // seu código aqui
  let saida = []
  let arr = tecnoArray.sort()
  for (let key in arr) {
    let tecnoobj = new Object()
    tecnoobj['tech'] = tecnoArray[key]
    tecnoobj.name = name
    saida.push(tecnoobj)
  }
  if (saida.length === 0) {
    return 'Vazio!' 
  }
  else {
    return saida
  }

}
// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(linea, lineb, linec) {
  // seu código aqui
  abslinea = Math.abs(linea)
  abslineb = Math.abs(lineb)
  abslinec = Math.abs(linec)
  if (abslinea + abslineb < abslinec || abslinea + abslinec < abslineb || abslineb + abslinec < abslinea){
    return false
  }
  else if (abslinea - abslineb > abslinec || abslinea - abslinec > abslineb || abslineb - abslinec > abslinea) {
    return false
  }
  else {
    return true
  }
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let reg = /\d+/g
  let numbers = string.match(reg)
  let sumOfNumbers = 0
  for (let index = 0; index < numbers.length; index += 1) {
    let n = parseInt(numbers[index])
    sumOfNumbers += n
  }
  if (sumOfNumbers === 1) {
    return '1 copo de água'
  }
  else {
    return sumOfNumbers + ' copos de água'
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
