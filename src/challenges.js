// Desafio 1
// 
function compareTrue() {
   
}

// Desafio 2 DONE
function calcArea(base, height) {
  let triangleArea = (base * height) /2
  return triangleArea;
}
// console.log('Desafio 2:' , calcArea(10, 50));

// Desafio 3 DONE
function splitSentence(phrase) {
  let myString = phrase;
  let splitedSentence = myString.split(' ');
     return splitedSentence
}
// console.log('Desaafio 3' , splitSentence('Go trybe'))

// Desafio 4
//usar index[0] e index[index.length - 1]
//invertedArray[0] + invertedArray[invertedArray.length - 1];
//preciso colocar os dois do array em uma string usarei o join
//retorne uma string com o ultimo e 1 elemnto
//preciso colocar os dois elementos do array em uma stringg
function concatName(array) {
  let myArray = array;
  let invertedArray = myArray.reverse();
  let result1 = invertedArray[0];
  let result2 = invertedArray[invertedArray.length-1];
  let result = result1 +', '+ result2;

  return result;
} 
let nomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']

console.log(concatName(nomes))

// Desafio 5 DONE
function footballPoints(wins, ties) {
  let victories = 3 * wins;
  let draws = 1 * ties
  let points = victories + draws;
  return points;
}
// console.log(footballPoints(1, 2) , 'pontos')

// Desafio 6  DONE

//a função verifica quantas vezes que o  maior numro do array se repete. 
//portanto preciso: 1- verificar qual o maior numero do array
//                  2- contar quantas vezes o numero se repete    tipo if (numero[i] === maior numero[i]) { contador += 1}
// retornarei SOMENTE  quantas vezes ele se repete 
function highestCount(numbersArray) {
  let ordenedArray = numbersArray.sort(function(a, b){return b - a;});
  let higherNumber = ordenedArray[0];
  let quantasVezesSeRepete = 0;

  for(let index = 0; index < ordenedArray.length; index += 1) {
    if (ordenedArray[index] == higherNumber) {
       quantasVezesSeRepete += 1;
    }
}
      return quantasVezesSeRepete;
}
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

// Desafio 7
// 
function catAndMouse(mouse, cat1, cat2) {
  let resposta = 0;
  
  if ( cat1 - mouse === cat2 - mouse || cat1 - mouse ===  mouse - cat2 ||  mouse - cat1 === mouse -cat2 || mouse - cat1 === cat2 - mouse) {
    resposta = 'os gatos trombam e o rato foge'
  } else if (cat1 < cat2){
    resposta = 'cat1'
  } else { 
    resposta = 'cat2'
  }
  return resposta
}

// console.log(catAndMouse(10, 5, 15));
// console.log(catAndMouse(0, 3, 2));
// console.log(catAndMouse(0, 6, 12));
// console.log(catAndMouse(0, 1, 1))

// Desafio 8

// let myArray = [] ; 
// for (let i = 0; i < numeros.length; i += 1){
//   if(numeros % 3 === 0 && numeros[i] % 5 === 0){
//    myArray.push("fizzBuzz")
//   }else if (numeros[i] % 5 === 0){
//    myArray.push("buzz")
//   } else if ( numeros % 3 === 0 ){
//    myArray.push("fizz")
//   } else { myArray.push("bug!")}
// }
// return myArray

// posso fazer uma função que recebe os parametros que sao os fizzbuzz, buzz, fizz & bug 
// function fizzBuzz(numeros) {
//   function 
// }
// let theArray = [45, 15, 7, 9, 45]
// console.log(fizzBuzz(theArray))

// Desafio 9
function encode() {

}
function decode() {

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
} ;
