// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let resultSentence;
  resultSentence = sentence.split(' ');
  return resultSentence;
}

// Desafio 4
function concatName(names) {
  return names[names.length - 1] + ', ' + names[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(number) {
  highestNumber = number[0];
  count = 0;
  for (let key in number) {
    if (highestNumber < number[key]) {
      highestNumber = number[key]
      count = 0;
    }
    if (highestNumber === number[key])
      count++;     
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((Math.abs(mouse - cat1)) < (Math.abs(mouse - cat2)))
    return 'cat1';
  else if ((Math.abs(mouse - cat1)) == (Math.abs(mouse - cat2)))
    return 'os gatos trombam e o rato foge';
  else
    return 'cat2';
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
