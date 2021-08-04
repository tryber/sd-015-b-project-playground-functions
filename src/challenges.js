// Desafio 1
function compareTrue(valor1, valor2){
  if (valor1 === false && valor2 === true){
    return false;
  }
  else if (valor1 === true && valor2 === false){
    return false;
  }
  else if (valor1 === false && valor2 === false){
      return false;
  }
  else if (valor1 === true && valor2 === true){
      return true
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
    return ((base * height)/2)
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
    let resultado = frase.split(' ');
    return resultado
}

// Desafio 4
function concatName(concatenation) {
  // seu código aqui
    let primeiro = concatenation[concatenation.length - 1] ;
    let segundo = concatenation[0] ;
    return primeiro + ', ' + segundo  
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let resultadoVitoria = wins * 3
  return resultadoVitoria + ties 
}

// Desafio 6
function highestCount(amount) {
  // seu código aqui
  let highNumber = amount[0]
  let contagem = 0
  // 2- Qual o maior numero da array //for
  for (let index = 0; index < amount.length; index+= 1){
    if (amount[index] > highNumber){
      highNumber = amount[index]
    }
  }
  for (let index = 0; index < amount.length; index+= 1){
    if (amount[index] === highNumber){
    contagem += 1
  }
}
  return contagem;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  // 1- Calcular a distancia entre os gatos e rato
  let distancia1 = Math.abs(cat1 - mouse)
  let distancia2 = Math.abs(cat2 - mouse)
  // 2- Encontrar e retornar qual o felino pega o rato mais rapido
  if (distancia1 > distancia2){
    return "cat2";
  }
  else if (distancia1 < distancia2){
    return "cat1";
  }
  else{
    return "os gatos trombam e o rato foge";
  } 
} 

// Desafio 8
function fizzBuzz(number) {
  // seu código aqui
  let valor = [];
  for (let index = 0; index < number.length; index++){
    if (number[index] % 3 === 0 && number[index] % 5 !== 0){
      valor.push("fizz");
    } else if (number[index] % 5 === 0 && number[index] % 3 !== 0){
      valor.push("buzz");
    } else if (number[index] % 3 === 0 && number[index] % 5 === 0){
      valor.push("fizzBuzz");
    } else{
      valor.push("bug!");
    }
  } return valor;
  
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