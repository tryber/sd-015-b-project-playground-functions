// Desafio 1
function compareTrue(a, b) {
    if (a && b === true)
      return true;
    else
      return false;
  } 

// Desafio 2
function calcArea(base, height) {
    return (base * height) / 2
}


// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}


// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}


// Desafio 5
function footballPoints(wins, ties) {
  let totalWins = 3 * wins;
  let totalPoints = totalWins + ties;
  return totalPoints;
}


// Desafio 6

function highestCount(numbersArray) {
  
  let acumulador = numbersArray[0];
  let add = 0;
  
  for (let teste in numbersArray) {
    if (numbersArray[teste] > acumulador) {
      acumulador = numbersArray[teste];
    }
  }
  
  for (let quantidade in numbersArray) {
    if (numbersArray[quantidade] === acumulador) {
      add += 1;
    }
  }
  return add;
}



// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gatoVencedor;
  let posCat1 = cat1 - mouse;
  if (posCat1 < 0) {
    posCat1 = posCat1 * (-1);
  }
  let posCat2 = cat2 - mouse;
  if (posCat2 < 0) {
    posCat2 = posCat2 * (-1);
  }
  if (posCat1 < posCat2) {
    gatoVencedor = 'cat1';
  } else if (posCat1 > posCat2) {
    gatoVencedor = 'cat2';
  } else {
    gatoVencedor = 'os gatos trombam e o rato foge';
  }
  return gatoVencedor;
}

// Desafio 8
function fizzBuzz(array) {
  let array2 = [];
  let res;
  for (let numbers in array) {
    let divTree = array[numbers] % 3;
    let divFive = array[numbers] % 5;
    if (divTree === 0 && divFive === 0) {
      res = 'fizzBuzz';
    } else if (divTree === 0) {
      res = 'fizz';
    } else if (divFive === 0) {
      res = 'buzz';
    } else {
      res = 'bug!';
    }
    array2[numbers] = res;
  }
  return array2;
 
}

// Desafio 9
function encode(vogais) {
  let vogaisa = vogais.replace(/a/g, "1");
  let vogaise = vogaisa.replace(/e/g, "2");
  let vogaisi = vogaise.replace(/i/g, "3");
  let vogaiso = vogaisi.replace(/o/g, "4");
  let vogaisu = vogaiso.replace(/u/g, "5");

  return vogaisu;
}
function decode(numeros) {
  let numeros1 = numeros.replace(/1/g, "a");
  let numeros2 = numeros1.replace(/2/g, "e");
  let numeros3 = numeros2.replace(/3/g, "i");
  let numeros4 = numeros3.replace(/4/g, "o");
  let numeros5 = numeros4.replace(/5/g, "u");

  return numeros5;
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
