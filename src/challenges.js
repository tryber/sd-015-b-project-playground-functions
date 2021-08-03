// Desafio 1
function compareTrue(parmUm, parmDois) {
    if (parmUm === true && parmDois === true){
      return true;
    } else {
      return false;
    }
}
//console.log(compareTrue(false,true))
//console.log(compareTrue(false,false))
//console.log(compareTrue(true,true))


// Desafio 2
function calcArea(base,height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}
//console.log(calcArea(10,50));
//console.log(calcArea(5,2));
//console.log(calcArea(51,1));


// Desafio 3
function splitSentence(frase) {
  let fraseSeparada = '';
  fraseSeparada = frase.split(" ");
  return fraseSeparada;
}
//console.log(splitSentence('go Trybe'));
//console.log(splitSentence('vamo que vamo'));
//console.log(splitSentence('foguete'));


// Desafio 4
function concatName(palavras) {
  let primeiraPalavra = '';
  let ultimaPalavra = '';
  let fraseJunta = '';
  primeiraPalavra = palavras[0];
  for (let index = 0; index < palavras.length; index++){
    if (index === (palavras.length - 1)) {
      ultimaPalavra = palavras[index];
    }
  }
  fraseJunta = (ultimaPalavra + ', ' + primeiraPalavra)
  return fraseJunta;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));


// Desafio 5
function footballPoints(wins, ties) {
  let totalVitorias = 0;
  let totalEmpates = 0;
  let totalPontos = 0;

  totalVitorias = wins * 3;
  totalEmpates = ties * 1;
  totalPontos = totalVitorias + totalEmpates
  return totalPontos;
}
console.log(footballPoints(14,8)); // retornar 50
console.log(footballPoints(1,2)); // retornar 5
console.log(footballPoints(0,0)); // retornar 0


// Desafio 6
function highestCount(arrayNum) {
  let maiorNumero = 0;
  let cont = [];

  for (let indexUm = 0; indexUm < arrayNum.lenght; indexUm++){
    let number = arrayNum[indexUm];
    if (number >= maiorNumero){
      maiorNumero = number;
    }
  }

  for (let indexDois = 0; indexDois < arrayNum.lenght; indexDois++){
    if (maiorNumero === arrayNum[indexDois]){
      cont.push(maiorNumero);
    }
  }

  return cont.lenght;

}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7])); // retornar 2
console.log(highestCount([0, 4, 4, 4, 9, 2, 1])); // retornar 1
console.log(highestCount([0, 0, 0])); // retornar 3
















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
