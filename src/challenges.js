// Desafio 1
function compareTrue(parametro1, parametro2) {
  // seu código aqui
  if(parametro1 === true && parametro2 === true) return true
  else return false
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ')
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return `${array.pop()}, ${array.shift()}`
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let maior = biggestNumber(numbers)
  let cont = 0
  for(let number of numbers){
    if(number === maior) cont += 1
  }
  return cont
}
function biggestNumber(numbers){
  maior = numbers[0]
  for(number of numbers){
    if(number > maior) maior = number
  }
  return maior
}

// Desafio 7
function catAndMouse(mouse, catOne, catTwo) {
  // seu código aqui
  let catOneDis = calcDis(mouse, catOne)
  let catTwoDis = calcDis(mouse, catTwo)
  let string = ''

  if (catOneDis < catTwoDis) string = 'cat1'
  else if (catTwoDis < catOneDis) string = 'cat2'
  else string = 'os gatos trombam e o rato foge'

  return string
}
function calcDis(mouse, cat){
  return Math.abs(mouse - cat)
}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let fizzBuzzes = []
  for(number of numbers){
    if (number % 3 === 0 && number % 5 === 0) fizzBuzzes.push('fizzBuzz')
    else if (number % 3 === 0) fizzBuzzes.push('fizz')
    else if (number % 5 === 0) fizzBuzzes.push('buzz')
    else fizzBuzzes.push('bug!')
  }
  return fizzBuzzes
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
