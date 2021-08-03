// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  return ((base * height) / 2)
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ")
}

// Desafio 4
function concatName(vetorPalavras) {
  return vetorPalavras[vetorPalavras.length -1] + ", " + vetorPalavras[0]
}

// Desafio 5
function footballPoints(wins,ties) {
  return (wins * 3) + ties
}

// Desafio 6
function highestCount(vetorMaiorRepeticao) {
  let maior = Math.max.apply(null,vetorMaiorRepeticao);
  let contadorMaior = 0;
  for (index = 0; index < vetorMaiorRepeticao.length; index +=1){
    if (maior === vetorMaiorRepeticao[index]) {
      contadorMaior += 1
    }
  }return contadorMaior
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);
  if (distanciaCat1 < distanciaCat2){
    return "cat1"
  }else if(distanciaCat2 < distanciaCat1){
    return "cat2"
  }else{
    return "os gatos trombam e o rato foge"
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
