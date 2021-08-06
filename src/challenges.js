// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
}

// Desafio 3
function splitSentence(value) {
  let palavra = "";
  let retorno = [];
  value = value + " ";
  for (let caractere of value) {
    if (caractere != " ") {
      palavra = palavra + String(caractere);
    } else {
      retorno.push(palavra);
      palavra = "";
    }
  } return retorno;
}

// Desafio 4
function concatName(value) {
  return value[(value.length -1)] + ", " + value[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let highestNumber = array.reduce(function(a,b) {
    return Math.max(a, b);
  });
  let count = 0;
  for (index = 0; index < array.length; index ++) {
    if (array[index] === highestNumber) {
      count += 1;
    } else {
      count = count;
    }
  } return count;
}



// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse-cat2)) {
    return "cat1";
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse-cat2)) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(array) {
  let answer = [];
  for (let parametro in array) {
    if ((parametro % 3) === 0 && (parametro % 5) === 0) {
      answer.push("fizzBuzz");
    } else if ((parametro % 3) === 0) {
      answer.push("fizz");
    } else if ((parametro % 5) === 0) {
      answer.push("buzz");
    } else {
      answer.push("bug!");
    }
  } return answer;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]))

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

console.log(compareTrue(1,0))