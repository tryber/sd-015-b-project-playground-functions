// Desafio 1
function compareTrue(param1, param2){
  if (param1 && param2){
  return true;
} else {
  return false;    }
}

// Desafio 2
function calcArea(base, height){
  return (base*height)/2;
}

// Desafio 3
function splitSentence(str){
  return str.split(' ');
}

// Desafio 4
function concatName(array){
  let arr = array.reverse();
  let primeiro = arr[0];
  let ultimo = arr[arr.length-1];
  return primeiro + ', ' + ultimo;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins*3;
  let tiePoints = ties*1;
  return winPoints + tiePoints;
}

// Desafio 6
function highestCount(array) {
  let maior = 0;
  let newArray = [];
  for (let i = 0; i < array.length; i+=1) {
      if ( array[i] > maior ) {
        maior = array[i];
      }
      for (let numero of array) {
          if (numero === maior) {
              newArray.push(numero);
          }
        } 
        return newArray.length;
      } 
    }

  

// Desafio 7
function catAndMouse (mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)){
      return 'os gatos trombam e o rato foge';
  } else if (cat1 < cat2) {
      return 'cat1';
  } else if (cat2 < cat1) {
      return 'cat2';
  }
}   

// Desafio 8
function fizzBuzz(array) {
  let fizzArr= [];
  for (i = 0; i < array.length-1; i++){
  if (array[i]%3 === 0 && array[i]%5 === 0) {
      fizzArr.push('fizzBuzz');
  } else if (array[i]%5 === 0) {
      fizzArr.push('buzz');
  } else if (array[i]%3 === 0) {
      fizzArr.push('fizz');
  } else {
      fizzArr.push('bug!');
  }
} return fizzArr;
}


// Desafio 9
function encode(str) {
  return str.replace('a', '1');
}
encode('hi there');

function decode(str) {
  return str.replace('1', 'a');
}
decode('');

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
