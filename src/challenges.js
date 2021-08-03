// Desafio 1
function compareTrue() {
  let isEven = ((num1 % 2)=== 0) && ((num2 % 2)=== 0);
  return isEven;
// seu código aqui
}
                                    console.log(compareTrue(num1=5, num2=10));


// Desafio 2
function calcArea() {
  let area = ((base * height)/2);
  return area;  
  // seu código aqui
}
                                    console.log(calcArea(base=10, height=50));
                                    console.log(calcArea(base=5, height=2));
                                    console.log(calcArea(base=51, height=1));



// Desafio 3
function splitSentence(frase) {
    let palavras = frase;
    return palavras.split(' ');
     // seu código aqui
  }
                                    console.log(splitSentence("go Trybe"));
                                    console.log(splitSentence("vamo que vamo"));
                                    console.log(splitSentence("foguete"));
 


// Desafio 4
function concatName(array) {
  let {length, 0: first, [length-1]: last} = array;
  return last+first;
  // seu código aqui
}
                                    console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
                                    console.log(concatName(['foguete', 'não', 'tem', 'ré']));
                                    console.log(concatName(['captain', 'my', 'captain']));




// Desafio 5
function footballPoints(jogos) {
  let pontos = ((wins*3)+(ties*1));
  return pontos;
  // seu código aqui
}
                                    console.log(footballPoints(wins=14, ties=8));
                                    console.log(footballPoints(wins=1, ties=2));
                                    console.log(footballPoints(wins=0, ties=0));



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
