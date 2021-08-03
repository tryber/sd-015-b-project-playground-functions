// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  if (bool1 === true && bool2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  // O split separa a array pelo espaço e o filter remove os espaços da array.
  // Coompreendo que não foi ensinado arrow functions ainda mas eu ja sabia usar então usei.

  return sentence.split(/(\s)/).filter((palavra) => palavra !== ' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  // Usei o `` para diminuir o tamanho do return.

  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let bigestNumber = null;
  let numberOfTimes = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (bigestNumber === null || array[index] > bigestNumber) {
      bigestNumber = array[index];
      numberOfTimes = 0;
    }
    if (bigestNumber === array[index]) {
      numberOfTimes += 1;
    }
  }

  return numberOfTimes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  // Procurei na internet a forma mais curta de se fazer, mas como não entendi 100% eu fiz um meio termo usando ternary function
  let result = [];
  array.forEach((e) => {
    let fizz = e % 3 === 0;
    let buzz = e % 5 === 0;
    result.push(fizz ? buzz ? 'fizzBuzz' : 'fizz' : buzz ? 'buzz' : 'bug!');
  });
  return result;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  return string.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3').replace(/o/g, '4')
    .replace(/u/g, '5');
}
function decode(string) {
  // seu código aqui
  return string.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o')
    .replace(/5/g, 'u');
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
