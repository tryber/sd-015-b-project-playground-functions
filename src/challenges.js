// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 && valor2) {
    return true;
  } 
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let arrayDeSentencas = sentence.split(" ");
  return arrayDeSentencas;
}

// Desafio 4
function concatName(frase) {
  // seu código aqui
  let concatenacao = frase[frase.length - 1] + ", " + frase[0];
  return concatenacao;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
    let pontuacao = (wins * 3) + (ties * 1);
  return pontuacao;
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let contador = 0;
  
  
  numeros.sort(function ordenar(a, b){
    return (a - b) 
}); 

  for (let index = 0; index < numeros.length; index += 1) {
  if (numeros[numeros.length -1] === numeros[index]) {

    contador += 1;
  }
}
  return contador;

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let resultado;
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);
  
  if (distanciaCat1 < distanciaCat2) {
    resultado = "cat1";
  } else if (distanciaCat2 < distanciaCat1) {
    resultado = "cat2";
  } else {
    resultado = "os gatos trombam e o rato foge";
  }
  return resultado
}
catAndMouse(10,16,22)

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
