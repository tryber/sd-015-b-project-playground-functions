// Desafio 1
function compareTrue(a,b) {
  // seu código aqui
  if (a && b) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  return (base * height) / 2;

}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let word = '';
  let result = [];

  for (i = 0; i <= string.length; i += 1) {
    if (string[i] === ' ' || i === string.length) {
      result.push(word);
      word = '';
    } else {
      word += string[i];
    }
  }

  return result;
}

// Desafio 4
function concatName(stringArray) {
  // seu código aqui
  // Vou precisar criar uma variável que adiciona o último item da string e o primeiro item da string, não preciso de for para isso
  let string = '';
  string += stringArray[stringArray.length-1], string += ', ', string += stringArray[0];
  return string
}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  // Preciso criar as variáveis winPoints para traduzir a quantidade de vitórias em vezes 3. Depois, só somar winPoints com ties e retornar o resultado.
  let winPoints = wins * 3;
  return winPoints + ties;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  // Criar um for que recebe o maior valor em uma variável, e no final do for com um if ele abre outro for que calcula a quantidade de vezes que foi repetido.
  let highestNumber = Math.max(...array);
  let repeat = 0;

  for (number of array) {
    if (number === highestNumber) {
      repeat += 1;
    }
  }
  
  return repeat;
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

console.log(splitSentence('foguete'));
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(footballPoints(14,8));
console.log(highestCount([0, 0, 0]));