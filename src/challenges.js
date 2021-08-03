// Desafio 1
function compareTrue(parametro1, parametro2) {
  if(parametro1=== true && parametro2 === true){
    return true
  }
  return false;}
  
// Desafio 2
function calcArea(base, height) {
  calcArea= (base*height)/2;
  return calcArea;
}

// Desafio 3
function splitSentence(string) {
  splitSentence = string.split(" ");
  return splitSentence;
}

// Desafio 4
function concatName(array) {
  let ultimo = array[array.length - 1];
  concatName= ultimo +", "+ array[0];
  return concatName;
} 

// Desafio 5
function footballPoints(wins, ties) {
  footballPoints= (3*wins + ties);
  return footballPoints;
}


// Desafio 6
function highestCount(array1) {
  let indiceMaior= 0;
  let contador = 0;
  for(let index in array1){
    if(array1[indiceMaior]< array1[index]){
      indiceMaior = index;
    }    
  }
  for(let index2 in array1){
    if(array1[indiceMaior] === array1[index2]){
      contador+= 1;      
    }    
  }
  return contador;  
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = mouse - cat1;
  let distanciaCat2 = mouse - cat2;
  let string1 = "cat1";
  let string2 = "cat2";
  let string3 = "os gatos trombam e o rato foge";
  if(distanciaCat1 < 0){
    distanciaCat1 *= -1;
  }
  if(distanciaCat2 < 0){
    distanciaCat2 *= -1;
  }
  if(distanciaCat1 < distanciaCat2){
    return string1;
  }
  else if(distanciaCat1 > distanciaCat2){
    return string2;
  }
  else{
    return string3;
  }
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
