// Desafio 1
function compareTrue(valor1,valor2) {

    if ( valor1 === true && valor2 === true){
      return true;
    }
    else if ( valor1 === false && valor2 === false){
      return false;
    }
    else if ( valor1 != valor2){
      return false;
    }
}

console.log(compareTrue(true,true));

  // Desafio 2
function calcArea(base,height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  // fonte de estudo https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
  let arraySeparado = sentence.split(" ");
  
  return arraySeparado;
}

// Desafio 4
function concatName(nomes) {
  // seu código aqui
    //pegar o úlitmo e o primeiro item do array
    // let tamanhoArray = array.length
    // ultimo item = array[tamanhoArray - 1] , primeiro item : array[0]
    
    let tamanhoArray = nomes.length;

    return nomes[tamanhoArray - 1] + ", " + nomes[0];
}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui

  return (3 * wins) +  ties;
}

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
