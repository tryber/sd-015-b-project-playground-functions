// Desafio 1
function compareTrue(trybeOne, trybeTwo) {
  // seu código aqui
    if(trybeOne && trybeTwo === true) {
       return true;
    } else  {
        return false;
    }
    
    }
    
    console.log(compareTrue(true,true));


// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area
}
console.log(calcArea(5,2));

// Desafio 3
function splitSentence(togetherSetence) {
  // seu código aqui
  let result = [];
  let splitedWords = "";
  for(letters = 0; letters < togetherSetence.length; letters += 1){
    if(togetherSetence[letters] === " "){
      result.push(splitedWords);
      splitedWords = "";
    }
    splitedWords += togetherSetence[letters];
    if(togetherSetence[letters] === " "){
      splitedWords = "";
    }
  }
  result.push(splitedWords);
  return result;
}
console.log(splitSentence("go Trybe"));
console.log(splitSentence("vamo que vamo"));
console.log(splitSentence("foguete"));


// Desafio 4
function concatName(strings) {
  // seu código aqui
  let concat = strings[strings.length -1]+", " + strings[0];
  return concat;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
// Desafio 5
function footballPoints(win, tie) {
  // seu código aqui
  let points = (win * 3) + tie;
  return points
}

console.log(footballPoints(14,8));
console.log(footballPoints(1,2));
console.log(footballPoints(0,0));


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
