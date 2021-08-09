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
function fizzBuzz(arrayNumeros) {
  if(arrayNumeros % 3 == 0){
    return 'fizz'
  }
  if(arrayNumeros % 5 == 0){
    return 'buzz'
  }
  if(arrayNumeros % 3 == 0 && arrayNumeros % 5 == 0){
    return 'fizzBuzz'
  }
  if(arrayNumeros % 3 !== 0 && arrayNumeros % 5 !== 0){
    return 'bug!'
  }
  return arrayNumeros
}

// Desafio 9
function encode(string) {
  let novaString = string.replace(/a/g, '1');
  novaString = novaString.replace(/e/g, '2');
  novaString = novaString.replace(/i/g, '3');
  novaString = novaString.replace(/o/g, '4');
  novaString = novaString.replace(/u/g, '5');
return novaString;
}
function decode(string) {
  let novaString = string.replace(/1/g, 'a');
  novaString = novaString.replace(/2/g, 'e');
  novaString = novaString.replace(/3/g, 'i');
  novaString = novaString.replace(/4/g, 'o');
  novaString = novaString.replace(/5/g, 'u');
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
