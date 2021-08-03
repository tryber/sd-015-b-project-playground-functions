// Desafio 1
function compareTrue(valor1,valor2) {
  // seu código aqui
  if (valor1 === true && valor2 === true){
    return true;
  } else{
    return false;
  }
}

// Desafio 2
function calcArea(base,altura) {
  // seu código aqui
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(palavra) {
  // seu código aqui
  let novoArray = (palavra.split(' ',palavra.length));
  return novoArray;
}

// Desafio 4
function concatName(novoArray) {
  // seu código aqui
  let juntaString = novoArray[novoArray.length-1];
  juntaString += (', ' + novoArray[0]);
    return juntaString;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = 3;
  let calculo = (wins * pontos) + ties;
  return calculo;
}

// Desafio 6
function highestCount(novoArray) {
  // seu código aqui
  let numMaior= Math.max.apply(null,novoArray);
  let contador = 0;
  for (let index = 0; index < novoArray.length; index += 1){
    if (numMaior === novoArray[index]){
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
  let calcCat1 = 0;
  let calcCat2 = 0;

  if (cat1 < mouse){
    calcCat1 = mouse - cat1;
  } else{
    calcCat1 = cat1 - mouse;
  }
  
  if (cat2 < mouse){
    calcCat2 = mouse - cat2;
  } else{
    calcCat2 = cat2 - mouse;
  }

  if (calcCat1 < calcCat2){
    return 'cat1';
  } else if (calcCat1 > calcCat2){
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
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

console.log(catAndMouse(7,10,9))