// Desafio 1
function compareTrue(item1, item2) {
  // seu código aqui
  return (item1 && item2)
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  return ((base*altura)/2)
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  return (frase.split(' '))
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let tamanho = array.length
  let primeiro = array[0]
  let ultimo = array[tamanho-1]
  return (ultimo + ', ' + primeiro)
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins*3 + ties)
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maior = array[0]
  for(let valor of array){
    if(valor>maior){
      maior = valor
    }
  }
  let contador = 0
  for(let vezes of array){
    if(vezes==maior){
      contador+=1
    }
  }
  return(contador)
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distancia1 = Math.abs(mouse - cat1)
  let distancia2 = Math.abs(mouse - cat2)
  if(distancia1==distancia2){
    return("os gatos trombam e o rato foge")
  }else if(distancia1>distancia2){
    return("cat2")
  }else{
    return("cat1")
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let novoArray = []
  for(let item of array){
    if(item%3==0){
      if(item%5==0){
        novoArray.push("fizzBuzz")
      }
      else{
        novoArray.push("fizz")
      }
    }else if(item%5==0){
      if(item%3==0){
        novoArray.push("fizzBuzz")
      }else{
        novoArray.push("buzz")
      }
    }else{
      novoArray.push("bug!")
    }
  }
  return(novoArray)
}

// Desafio 9
function encode(texto) {
  // seu código aqui
  let novoTexto = ''
  for(let letra of texto){
    if(letra=='a'){
      novoTexto += '1'
    }else if(letra=='e'){
      novoTexto += '2'
    }else if(letra=='i'){
      novoTexto += '3'
    }else if(letra=='o'){
      novoTexto += '4'
    }else if(letra=='u'){
      novoTexto += '5'
    }else{
      novoTexto += letra
    }
  }
  return(novoTexto)
}
function decode(texto) {
  // seu código aqui
  let novoTexto = ''
  for(let letra of texto){
    if(letra=='1'){
      novoTexto += 'a'
    }else if(letra=='2'){
      novoTexto += 'e'
    }else if(letra=='3'){
      novoTexto += 'i'
    }else if(letra=='4'){
      novoTexto += 'o'
    }else if(letra=='5'){
      novoTexto += 'u'
    }else{
      novoTexto += letra
    }
  }
  return(novoTexto)
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
