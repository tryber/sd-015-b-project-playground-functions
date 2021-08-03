// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if(valor1 === true && valor2 === true){
    return true;
  }
  else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(arrayStrings) {
  // seu código aqui
 return arrayStrings[arrayStrings.length - 1] + ", " + arrayStrings[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (3 * wins) + ties;
}

// Desafio 6
function highestCount(arrayNumeros) {
  // seu código aqui
  let quant = 0;
  let maior = arrayNumeros[0];
  for(let index = 0; index < arrayNumeros.length; index += 1){
     if( arrayNumeros[index] > maior){
       maior = arrayNumeros[index];
     }
  }
  for(let index = 0; index < arrayNumeros.length; index += 1){
    if(maior==arrayNumeros[index]){
      quant += 1;
    }
  }
    return quant;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let x = cat1 - mouse;
  let y = cat2- mouse;
  if(x < 0){
    x = -1 * (cat1 - mouse);
  }
  if(y < 0){
    y = -1 * (cat2 - mouse); 
  }
  if(x < y){
    return "cat1";
  }
   if(x == y) {
    return 'os gatos trombam e o rato foge'; 
  }    
     else {
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz(arrayDeNumeros) {
  // seu código aqui
  let array=[];
for( let index = 0; index < arrayDeNumeros.length; index += 1 ){
  if(arrayDeNumeros[index] % 3 == 0 && arrayDeNumeros[index] % 5 == 0){
    array.push("fizzBuzz");
  }
  else if( arrayDeNumeros[index] % 3 == 0){
    array.push("fizz");
  }
  else if( arrayDeNumeros[index] % 5 == 0){
    array.push("buzz");
  }
  if(arrayDeNumeros[index] % 3 !== 0 && arrayDeNumeros[index] % 5 !== 0){
    array.push("bug!");
  }
}
return array;
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
}
