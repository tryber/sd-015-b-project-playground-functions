// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 && bool2){
    return (true);
  } else {
    return (false);
  }
}

// Desafio 2
function calcArea(base, height) {
  return  ((base * height) / 2)
}

// Desafio 3
function splitSentence(str) {
  return (str.split(" "));
}

// Desafio 4
function concatName(nome) {
  return nome[nome.length -1] + ', ' + nome[0]
  }

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (3 * wins) + (1 * ties);
  return (pontos)
}

// Desafio 6
function highestCount(lista_de_numeros) {
  let maior_numero = 0;
  let contador = 0;
  for (let index=0; index < lista_de_numeros.length; index+=1) {
    if (lista_de_numeros[index] > maior_numero){
      maior_numero = lista_de_numeros[index]
    }
  }
  for (let index=0; index < lista_de_numeros.length; index+=1) {
    if (maior_numero === lista_de_numeros[index]) {
      contador+=1
    }
  }
  return contador
}
// Desafio 7
function catAndMouse() {

}

// Desafio 8
function fizzBuzz() {

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
