// Desafio 1
function compareTrue(valora, valorb) {
  return valora && valorb === true
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2
}

// Desafio 3
function splitSentence(fraseJunta) {
  return fraseJunta.split(" ")
}

// Desafio 4
function concatName(recebeNomes) {
  return `${recebeNomes[recebeNomes.length - 1]}, ${recebeNomes[0]}`
}

// Desafio 5
function getWins(calcWins) {
  return calcWins * 3
}
function getTies(calcTies) {
return calcTies * 1
}
function footballPoints(wins, ties) {
  return getWins(wins) + getTies(ties)
}


// Desafio 6
function getMoreValue(containerNumbers) {
// vai receber o array de nomeros e verifica se é o maior numero
  let highestPosition = containerNumbers[0];
  for (let index = 0; index < containerNumbers.length; index += 1){
    if ( containerNumbers[index] > highestPosition){
      highestPosition = containerNumbers[index] 
    }
  }
  return highestPosition;
}
function getRepeat(getNumbers, getNumber) {
  let numberRepeat = []
  for (let index = 0; index < getNumbers.length; index += 1){
    if (getNumber == getNumbers[index]){
      numberRepeat.push(getNumbers[index])
    }
  }
  return numberRepeat
}
function highestCount(arrayDeNumeros) {
  let maxNumberArray = getRepeat(arrayDeNumeros, getMoreValue(arrayDeNumeros))
  return maxNumberArray.length
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let calcCat01 = mouse - cat1
  let calcCat02 = mouse - cat2

  if (cat1 === 0 ){
    calcCat01 = cat1 - mouse
  }

  if (cat2 === 0 ){
    calcCat02 = cat1 - mouse
  }

  if ( calcCat01 > calcCat02) {
    return "cat1"
  } else if (calcCat01 < calcCat02){
    return "cat2"
  } else if (calcCat02 === calcCat01 ) {
    return "os gatos trombam e o rato foge"
  }
}


// Desafio 8
function fizzBuzz(numEntrada) {
  // seu código aqui
  let numarray = []
  for (let index = 0; index < numEntrada.length; index += 1){

    if ( numEntrada[index] % 3 === 0 && numEntrada[index] % 5 === 0){
      numarray.push("fizzBuzz")
    } else if ( numEntrada[index] % 3 === 0){
      numarray.push("fizz")

    } else if ( numEntrada[index] % 5 ===0) { 
      numarray.push("buzz")
      
    } else if ( numEntrada[index] % 3 !== 0 && numEntrada[index] % 5 != 0) {
      numarray.push("bug!")
    }
  }
  return numarray
}

// Desafio 9
function encode(fraseParaCode) {
  // seu código aqui
  let fraseSplit = fraseParaCode.split('')
  let fraseUni = []

  for(let key of fraseSplit) {
    if (key === 'a')
      fraseUni.push(1)
    else if (key === 'e')
      fraseUni.push(2)
    else if (key === 'i')
      fraseUni.push(3)
    else if (key === 'o')
      fraseUni.push(4)
    else if (key === 'u')
      fraseUni.push(5)
    else fraseUni.push(key)
  }
  return fraseUni.join('')
}

function decode(fraseParaDecode) {
  // seu código aqui
  let fraseSplit = fraseParaDecode.split('')
  let fraseOrigi = []
  
  for (let key of fraseSplit) {
    if (key === '1')
      fraseOrigi.push('a')
    else if (key === '2')
      fraseOrigi.push('e')
    else if (key === '3')
      fraseOrigi.push('i')
    else if (key === '4')
      fraseOrigi.push('o')
    else if (key === '5')
      fraseOrigi.push('u')
    else fraseOrigi.push(key)
  }
  return fraseOrigi.join('')
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
