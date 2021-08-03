// Desafio 1
function compareTrue(param1, param2) {
  if(param1 && param2 == true){
    return true;
  } 
  else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2;
    return area;
  }
// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(array) {
  let newArray = array[array.length -1] + ', ' + array[0];
    return newArray;
  }
// Desafio 5
function footballPoints(wins, ties) {
winPoints = 3
tiePoints = 1
  let pontos = (wins*winPoints) + (ties*tiePoints);
    return pontos
  }
// Desafio 6
function highestCount(array) {
  let counter = 0
  let maior = 0
    for( let i = 0; i < array.length; i++){
      if(array[i] > maior){
        maior = array[i];
      }
    }
    for( let i = 0; i < array.length; i++){
      if(array[i] == maior){
        counter = counter + 1;
      }
  }
    return counter 
  }

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(mouse - cat1)
  let distancia2 = Math.abs(mouse - cat2)
  let status = 0
    if(distancia1 < distancia2){
      status = "cat1";
    } 
      else if ( distancia1 > distancia2) {
      status = "cat2";
      } 
        else {
      status = "os gatos trombam e o rato foge";
    }
    
    return status;
  }
// Desafio 8
function fizzBuzz(array) {
let newArray = []
  for( let i = 0; i < array.length; i++){
    if(array[i]%3 == 0 && array[i]%5==0){
      newArray.push("fizzBuzz");
    continue
    } 
      else if (array[i]%3 == 0) {
        newArray.push("fizz");
    }
        else if ( array[i]%5 == 0) {
          newArray.push("buzz");
        }
          else {
            newArray.push("bug!");
          }
  }
    return newArray
  }
// Desafio 9
function encode(string) {
let newString = []
let newString2 =''
  for(let i = 0; i < string.length; i++){
      newString.push(string[i]) 
    }  
  for(let i = 0; i < string.length; i++){
        if (string[i]=='a'){
          newString[i] = 1;
        continue
        } 
          else if (string[i]=='e'){
            newString[i] = 2;
          continue
          } 
            else if(string[i]=='i'){
              newString[i] = 3;
            continue
            }
              else if (string[i]=='o'){
                newString[i] = 4;
              continue
              }
                else if (string[i]=='u'){
                  newString[i] = 5;
                } 
    }
  for(let i = 0; i < newString.length; i++){
        newString2 += newString[i]
    }
return newString2
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
