// Desafio 1
function compareTrue(boolean1, boolean2) { 
  if(boolean1 === true && boolean2 === true){
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
   let resultado = (base * height)/2;
   return resultado; 
}
// Desafio 3
function splitSentence(string) {
    let novoArray = string.split([" "])
    return novoArray;
}
// Desafio 4
function concatName(string) {
    let primeiroObj = string.shift();
    let ultimoObj = string.pop();
    let uneTudo = ultimoObj + ', ' + primeiroObj;
    return uneTudo.concat()
}
// Desafio 5
function footballPoints(wins, ties) {
    let vitorias = wins * 3;
    let empates = ties;
    let pontos = vitorias + empates;
    return pontos;
}
// Desafio 6
function highestCount(array) {
    let maior = Math.max(...array);
    let contagem = 0;
    for(let i in array)
    if(array[i] === maior){
      contagem += 1;
    }
    return contagem;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    let gato1 = mouse - cat1;
    let gato2 = mouse - cat2;
    if ( gato1 > gato2){
      return "cat2"
    } else if (gato2 > gato1){
      return "cat1"
    } else if (gato2 === gato1){
      return "os gatos trombam e o rato foge"
    }
}
// Desafio 8
function fizzBuzz(array) {
    let acumulador = [];
    for(let i in array){
      if(array[i]% 3 === 0 && array[i]%5 === 0){
        acumulador.push('fizzBuzz')
    } else if(array[i]% 3 === 0){
        acumulador.push('fizz')
    } else if (array[i]% 5 === 0){
        acumulador.push('buzz')
    } else {
        acumulador.push('bug!')
    }
  } return acumulador
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
