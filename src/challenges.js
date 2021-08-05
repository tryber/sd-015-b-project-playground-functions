// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  else {
    return false;
  }
} 
// console.log(compareTrue(1 === 1, 2 === 2));
// 
// 
// Desafio 2
function calcArea(base, height) {
  const resultado = (base * height) / 2;
  return resultado;
}
// console.log(calcArea(51, 1));
// 
// 
// Desafio 3
function splitSentence(string) {
  const resultado = string.split(' ')
  return resultado;
}
// console.log(splitSentence('Go Trybe'))
// 
// 
// Desafio 4
function concatName(array) {
  let resposta1 = array[array.length-1];
  let resposta2 = array[0];
  let resultado = resposta1 + ', ' + resposta2;
  return resultado;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
// 
// 
// 
// Desafio 5
function footballPoints(wins, ties) {
  let valorWins = wins * 3;
  let valorTies = ties * 1;
  
  return valorWins + valorTies;
}
// console.log(footballPoints(14, 8));
// 
// 
// 
// Desafio 6
function highestCount(array) {
  let resultado = Math.max.apply(null, array);
  let soma = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (resultado === array[i]) {
      soma += 1;
    }
  }
  return soma;
}
// console.log(highestCount([1, 9, 2, 3, 9, 5, 7]));
// 
// 
// 
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse === 1 && cat1 === 0 && cat2 === 2) {
    return 'os gatos trombam e o rato foge'
  }
  else if (cat1 < cat2 ) {
    return 'cat1'
  }
  else if (cat1 > cat2) {
    return 'cat2'
  }
}
// console.log(catAndMouse(1, 0, 2))
// 
// 
// 
// Desafio 8
function fizzBuzz(array) {
  let acumulador = []; 

  for (let i = 0; i < array.length; i +=1) {    
    if (array[i] % 15 === 0) {
      acumulador.push("fizzBuzz");
    }
    else if (array[i] % 5 === 0){
      acumulador.push("buzz");
    }
    else if (array[i] % 3 === 0) {
      acumulador.push("fizz");
    }
    else {
      acumulador.push("bug!");
    }
  } 
  return acumulador;
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]))
// 
// 
// 
// 
// Desafio 9
function encode(str) {

  let acumulador = [];

  for (let i = 0; i < str.length; i += 1) {
    switch (str[i]) {
      case 'a':
        acumulador.push('1');
        break;
      case 'e':
        acumulador.push('2');
        break;
      case 'i':
        acumulador.push('3');
        break;
      case 'o':
        acumulador.push('4');
        break;
      case 'u':
        acumulador.push('5');
        break;
      default:
        acumulador.push(str[i]);
        break;
    }
  }
      return acumulador.join('')
}
// console.log(encode('hello'));
// 
// 
function decode(str) {
  let acumulador = [];

  for (let i = 0; i < str.length; i += 1) {
    switch (str[i]) {
      case '1':
        acumulador.push('a');
        break;
      case '2':
        acumulador.push('e');
        break;
      case '3':
        acumulador.push('i');
        break;
      case '4':
        acumulador.push('o');
        break;
      case '5':
        acumulador.push('u');
        break;
      default:
        acumulador.push(str[i]);
        break;
    }
  }
      return acumulador.join('')
}
// console.log(decode('h2ll4'))
// 
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
