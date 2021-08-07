// Desafio 1
function compareTrue(a, b) {
  if (a && b === true) {
    return true;
  } 
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let AreaTri;
  AreaTri = (base * height) / 2;
  return AreaTri;
}

// Desafio 3
function splitSentence(a) {
  let string = a;
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let ultimo = array[array.length - 1];
  let primeiro = array[0];
  let arr = [];
  let space = ' ';
  arr.unshift(ultimo);
  arr.push(space.concat(primeiro));
  return arr + '';
}

// Desafio 5
function footballPoints(wins, ties) {
  let NumVit = 3;
  let NumEmp = 1;
  let QtdPontos;
  QtdPontos = wins * NumVit + ties * NumEmp;
  return QtdPontos;
}

// Desafio 6
function highestCount(array) {
  let contRept = 0;
  array.sort(function (a, b) {return a - b;})
  for (let index in array) {
    if (array[index] === array[array.length - 1]) {
      contRept+=1;
    }
  }
  return contRept;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result; 
  let posiRato = mouse;
  let posiGato1 = cat1 - posiRato;
  let posiGato2 = cat2 - posiRato;
  resuAbs1 = Math.abs(posiGato1)
  resuAbs2 = Math.abs(posiGato2)
  if(resuAbs1 === resuAbs2) {
    result = "os gatos trombam e o rato foge";
  } else if (resuAbs1 > resuAbs2) {
    result = "cat2";
  } else {
    result = "cat1";
  }
  return result; 
}

// Desafio 8
function fizzBuzzDivisible3or5(a) {
  let result;
  if (a % 3 === 0 && a % 5 === 0) {
    result = 'fizzBuzz';
  } else if (a % 3 === 0) {
    result = 'fizz';
  } else if (a % 5 === 0) {
    result = 'buzz';
  } else {
    result = 'bug!';
  }
  return result;
}

function fizzBuzz(array) {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = fizzBuzzDivisible3or5(array[i]);
  }
  return array;
}

// Desafio 9
function encode(str) {
  let resultado = ""
  resultado = str.replace(/a/g,"1")
  resultado = resultado.replace(/e/g,"2") 
  resultado = resultado.replace(/i/g,"3")
  resultado = resultado.replace(/o/g,"4")
  resultado = resultado.replace(/u/g,"5")
  return resultado;
}

function decode(str) {
  let resultado = ""
  resultado = str.replace(/1/g,"a")
  resultado = resultado.replace(/2/g,"e")
  resultado = resultado.replace(/3/g,"i")
  resultado = resultado.replace(/4/g,"o")
  resultado = resultado.replace(/5/g,"u")
  return resultado;
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
