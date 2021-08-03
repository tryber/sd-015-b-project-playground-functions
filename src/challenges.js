// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true){
    return (true)
  }else{
    return(false)
  }
}
compareTrue(true, true)

// Desafio 2
function calcArea(base, height){
  return (base * height / 2) 
  
}
calcArea(51, 1)

// Desafio 3
function splitSentence(phrase){
  let result = phrase.split(" ")
  return console.log(result)
}
splitSentence ("go trybe")

// Desafio 4
function concatName(name){
  let result = name[name.length - 1]+ ", "+ name[0]
  return console.log(result)
}
concatName(['captain', 'my', 'captain'])

// Desafio 5
function footballPoints(wins, ties) {
  let result = (wins * 3) + ties
  return console.log(result)
}
footballPoints(14, 8)

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
