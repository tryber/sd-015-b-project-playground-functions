// Desafio 1
function compareTrue(a, b) {
  
  if (a === true && b === true) {
    return true;
}
  else {
    return false ;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
 return string.split(" ");
}
//pesquisa feita pelo w3schools para entender como .split se comporta.

// Desafio 4
function concatName(lista) {
  let resultado = lista[lista.length - 1] + ', ' + lista[0];
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrayNumeros) {
  let contador = 0;
  let maiorNumero = arrayNumeros[0];

  for (let numero of arrayNumeros) {
    if (numero > maiorNumero) {
      maiorNumero = numero;
      contador = 1;

    } else if (numero === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs((cat1 - mouse)) < Math.abs((cat2 - mouse))) {
    return 'cat1';
  } 
  else if (Math.abs((cat2 - mouse)) < Math.abs((cat1 - mouse))) {
    return 'cat2';
  } 
  else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];

  for (let index in array) {
    if (array[index] % 3 === 0) {
      if (array[index] % 5 === 0) {
        newArray[index] = 'fizzBuzz';
      } 
      else {
        newArray[index] = 'fizz';
      }
    } 
    else if (array[index] % 5 === 0) {
      newArray[index] = 'buzz';
    } 
    else {
      newArray[index] = 'bug!';
    }
  }
  return newArray;
}

// Desafio 9
function encode(letras) {
  letras = letras.replace(/a/g, '1');
  letras = letras.replace(/e/g, '2');
  letras = letras.replace(/i/g, '3');
  letras = letras.replace(/o/g, '4');
  letras = letras.replace(/u/g, '5');
  return letras;
}
function decode(numeros) {
  numeros = numeros.replace(/1/g, 'a');
  numeros = numeros.replace(/2/g, 'e');
  numeros = numeros.replace(/3/g, 'i');
  numeros = numeros.replace(/4/g, 'o');
  numeros = numeros.replace(/5/g, 'u');
  return numeros;
} 

//método replace pesquisado em https://blog.betrybe.com/javascript/javascript-replace/

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
