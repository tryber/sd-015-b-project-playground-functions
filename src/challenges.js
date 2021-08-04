// Desafio 1
function compareTrue(valora, valorb) {
  // seu código aqui
  if (valora === true && valorb === true){
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return calc = base * height / 2
}

// Desafio 3
function splitSentence(fraseJunta) {
  // seu código aqui
  return fraseSeparada = fraseJunta.split(" ")
}

// Desafio 4
function concatName(recebeNomes) {
  // seu código aqui
  let primeiro = recebeNomes[0]
  let ultimo = recebeNomes[recebeNomes.length -1]
  return final = ultimo + ", " + primeiro
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontosWin = wins * 3
  let pontosTies = ties * 1
  return final = pontosWin + pontosTies
}


// Desafio 6
function highestCount(arrayDeNumeros) {
  // seu código aqui
  let maiorPosition = arrayDeNumeros[0]
  let repeticoes = [] 
  for (let index = 0; index < arrayDeNumeros.length; index += 1){
    if ( arrayDeNumeros[index] > maiorPosition){
      maiorPosition = arrayDeNumeros[index] 
    }
  }
  for (let index = 0; index < arrayDeNumeros.length; index += 1){
    if (maiorPosition == arrayDeNumeros[index]){
      repeticoes.push(arrayDeNumeros[index])
    }

  }
  return repeticoes.length
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
