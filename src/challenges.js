// Desafio 1
function compareTrue(par1,par2) {
  if (par1 === true && par2 === true){
    return true
  }
  else{
    return false
  }
}

// Desafio 2
function calcArea(base,height) {
  area = base*height/2
  return area
}

// Desafio 3
function splitSentence(str) {
  separaString =  str.split(" ")
  return separaString
}

// Desafio 4
function concatName(vetor) {
  let resultado = [];
  vector = vetor.reverse()
  qun = vetor.length-1;
  for (let index = 0 ; index<=vetor.length-1;index+=1){
    if (index === 0){
      resultado.push(vetor[index])
    }
    else if (index === vetor.length-1 ){
      resultado.push(vetor[index])
    }
  }
  resultado = resultado.join(', ')
  return resultado
}

// Desafio 5
function footballPoints(wins,ties) {
  pontos = wins*3 + ties
  return pontos
}

// Desafio 6
function highestCount(vetor) {
  let count = 0
  let maior = -10000;
  for (number of vetor){
    if (number>maior) {
      maior = number
    }
  }
  
  for (number of vetor) {
    if (number === maior) {
      count +=1
    }
  }
  return count
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  if (cat1> mouse) {
    distCat1 = cat1-mouse
    if (cat2>mouse) {
      distCat2 = cat2-mouse
    }
    else if (cat2<mouse) {
      distCat2 = mouse-cat2
    }
  }
  else if (cat1<mouse) {
    distCat1 = mouse-cat1
    if (cat2>mouse) {
      distCat2 = cat2-mouse
    }
    else if (cat2<mouse) {
      distCat2 = mouse-cat2
    }
  }
  if (distCat1>distCat2) {
    return 'cat2'
  }
  else if (distCat1<distCat2){
    return 'cat1'
  }
  else {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(vetor) {
  let vec = []
  for (number of vetor) {
    if (number % 3 ===0 && number % 5 ===0) {
      vec.push("fizzBuzz")
    }
    else if (number % 3 ===0) {
      vec.push("fizz")
    }
    else if (number % 5 ===0) {
      vec.push("buzz")
    }
    
    else {
      vec.push("bug!")
    }
  }
  return vec
}

// Desafio 9
function encode(str) {
  string = str.split('')
  let strings = []
  for (letter of string) {
    if (letter === a) {
      strings.push('1')
    }
    else if (letter === i) {
      strings.push('3')
    }
    else if (letter === o) {
      strings.push('4')
    }
    else if (letter === u) {
      strings.push('5')
    }
    else{
      strings.push(letter)
    }

  }
  return strings.join('')
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
