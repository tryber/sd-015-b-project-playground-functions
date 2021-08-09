// Desafio 1
function compareTrue(a, b) {
  return a === true && b === true;
} 
// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2); 
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}
// Desafio 4
function concatName(lista) {
  return lista[lista.length- 1] + ', ' + lista[0]
}

// Desafio 5
function footballPoints(wins, ties){
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
  }else if (numero === maiorNumero) {
  contador += 1;
  }
  }
return contador;
} 
  console.log(highestCount([9, 1, 2, 3, 9, 5, 7])) 

  // Desafio 7
function catAndMouse(mouse, cat1, cat2) {
if (cat1 - mouse === cat2 - mouse || cat2 - mouse === (cat1 - mouse)* -1) {
  return 'os gatos trombam e o rato foge';
  } else if (cat1 - mouse < cat2 - mouse) {
  return 'cat1';
  } return 'cat2';
} 
catAndMouse(1,0,2)

// Desafio 8
function restDivisionFor15(dividendo, arrayString) {
  if (dividendo % 15 === 0){
    arrayString.push('fizzBuzz');
  }
  return arrayString;
}
function restDivisionFor3(dividendo, arrayString){
  if (dividendo % 3 === 0) {
    arrayString.push('buzz');
  }
  return arrayString;
}
function restDivisionFor5(dividendo, arrayString) {
  if (dividendo % 5 === 0) {
    arrayString.push('fizz');
  }
  return arrayString;
}
function bug(dividendo, arrayString) {
  if (divendo % 3 !== 0 || dividendo % 5 !== 0) {
    arrayString.push('bug!');
  }
  return arrayString
}
function fizzBuzz(arrayNumeros) {
  let arrayString = [];
  for (let index = 0; index < arrayNumeros.length; index += 1) {
    restDivisionFor15(arrayNumeros[index], arrayString);
    restDivisionFor3(arrayNumeros[index], arrayString);
    restDivisionFor5(arrayNumeros[index], arrayString);
    bug(arrayNumeros[index], arrayString);
  }
  return arrayString
}

// Desafio 9
function encode(string) {
  let novaString = string.replace(/a/g, 1 );
  let novaString = string.replace(/e/g, 2);
  let novaString = string.replace(/i/g, 3);
  let novaString = string.replace(/o/g, 4);
  let novaString = string.replace(/u/g, 5);
  return novaString;
}
function decode(string) {
  let novaString = string.replace(1, /a/g);
  let novaString = string.replace(2, /e/g);
  let novaString = string.replace(3, /i/g);
  let novaString = string.replace(4, /o/g);
  let novaString = string.replace(5, /u/g);
  return novaString;
  
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
