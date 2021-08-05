// Desafio 1
function compareTrue(valor1, valor2) {
  console.log(valor1 && valor2);
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  console.log((base * height) / 2)
    return ((base * height) / 2);
}

// Desafio 3
function splitSentence(text) {
  let separa = text.split(' ');
    console.log(separa);
    return separa;
}

// Desafio 4
function concatName(txt){
  let first = txt[0]
  for(let index = 0; index < txt.length; index += 1){
     if ((index + 1) >= txt.length){
         let last = txt[index];
         console.log(last + ', ' + first);
         return last + ', ' + first; 
     }else {
     }
  }
}

// Desafio 5
function footballPoints(wins, ties) {
  console.log((wins * 3) + ties)
  return ((wins * 3) + ties);
 };


// Desafio 6
function highestCount(numbers) {
  highestNumber = 0;
  cont = 0;
  let finalCont = 0
 for (let index = 0; index < numbers.length; index++){
     if (numbers[index] > highestNumber){
         highestNumber = numbers[index];
     } else if (highestNumber === 0){
      if  (numbers[index] < highestNumber){
          highestNumber = numbers[index];
      }
  }
 }
 for (let index = 0; index < numbers.length; index++){
      if (numbers[index] === highestNumber){
          cont = cont + 1;
      }
 }
 finalCont = cont;
 return finalCont;
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
