// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 && param2 === true){
    return true
  }else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let fraseArray = frase.split(' ', 3);
  return fraseArray
}

// Desafio 4
function concatName(stringArray) {
  // seu código aqui
  return stringArray[stringArray.length - 1] + ", " + stringArray[0]

}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + (ties * 1)
}

// Desafio 6
function highestCount(numArray) {
  // seu código aqui
  let qtdMaior = 0;
  let numMaior = numArray[0];
  for(let index = 0; index < numArray.length; index+=1){
    if(numArray[index] > numMaior){
      numMaior = numArray[index]
    }
  }
  for(let index = 0; index < numArray.length; index+=1){
      if(numMaior === numArray[index]){
          qtdMaior+=1
      }
  }
  return qtdMaior
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui 
  let cat1Abs = Math.abs(cat1 - mouse)
  let cat2Abs = Math.abs(cat2 - mouse)
  if(cat1Abs < cat2Abs){
    return "cat1"
  } else if (cat2Abs < cat1Abs){
    return "cat2"
  }else {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let newArray = [];
  for (let index = 0; index < array.length; index+=1){
    if(array[index] % 3 === 0 && array[index] % 5 === 0){
      newArray.push("fizzBuzz")
    }else if (array[index] % 3 === 0){
      newArray.push("fizz")
    }else if (array[index] % 5 === 0){
      newArray.push("buzz")
    }else {
      newArray.push("bug!")
   
    }
  }
  return newArray
}

// Desafio 9
function encode(frase) {
  // seu código aqui
  let vogalArray = ['a', 'e', 'i', 'o', 'u']
  for(let index = 0; index < frase.length; index+=1){
    for(let secIndex = 0; secIndex < vogalArray; secIndex+=1){
      if(vogalArray[secIndex] === frase[index]){
        frase.replace(frase[index, vogalArray[secIndex]])
      }
    }
  }
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
