// Desafio 1
function compareTrue(a, b) {
  if(a == true && b == true){
    return true
  }else{
    return false
  }
}
// Desafio 2
function calcArea(base, height) {
    return (base * height) / 2
}
// Desafio 3
function splitSentence(string) {
  let a = string.split(' ')
  return a
}
// Desafio 4
function concatName(arrayString) {
  let a = arrayString.length - 1
  let b = arrayString[0]
  return `${arrayString[a]}, ${b}`
}
// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties
}

// Desafio 6
function highestCount(numeros) {
  let a = Math.max.apply(null, numeros)
  let contador = 0;
  for(let i = 0; i <= numeros.length; i++){
    if(a == numeros[i]){
      contador++
    }
  }
  return contador
}

// Desafio 7
function catAndMouse( mouse, cat1, cat2, ) {
    let distanciaCat1 = Math.abs(cat1 - mouse)
    let distanciaCat2 =  Math.abs(cat2 - mouse)
    if(distanciaCat1 < distanciaCat2){
      return "cat1"
    }else if(distanciaCat2 < distanciaCat1){
      return "cat2"
    }else{
      return "os gatos trombam e o rato foge"
    }
}
// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
