// Desafio 1
function compareTrue(a, b) {
  
  if (a === true && b === true) {
    return true;
}
  else {
    return false ;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
 return string.split(" ");
}
//pesquisa feita pelo w3schools para entender como .split se comporta.

// Desafio 4
function concatName(lista) {
  let resultado = lista[lista.length - 1] + ', ' + lista[0];
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrayNumeros) {
  let contador = 0;
  let maiorNumero = arrayNumeros[0];

  for (let numero of arrayNumeros) {
    if (numero > maiorNumero) {
      maiorNumero = numero;
      contador = 1;
    } else if (numero === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}
// Desafio 7
function catAndMouse() {

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
