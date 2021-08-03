// Desafio 1
function compareTrue(x, y,) {
  return (x === true && y === true);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
}

// Desafio 3
function splitSentence(string) {
  let split = string.split(" ");
  return split;
}

// Desafio 4
function concatName(names) {
  return names[names.length -1] + ", " + names[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = Math.max.apply(Math,array)
  let compare = 0;
  let storage = 0;
  for(index = 0; index < array.length; index += 1){
    compare = array[index]
    if(compare === maiorNumero){
      storage += 1;  
    }
  }
  return storage
 }

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((cat1 - mouse) > (cat2 - mouse)){
    return 'cat2';
  }
  else if ((cat1 - mouse) < (cat2 - mouse)){
    return 'cat1';
  }
  else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let string = []
  let number = 0
  for(let index = 0; index < arrayNumeros.length; index += 1){
    number = arrayNumeros[index]
    if(number % 5 === 0 && number % 3 === 0){
     string.push('fizzBuzz');
    }
    else if(number % 5 === 0){
      string.push('buzz');
    }
    else if(number % 3 === 0){
      string.push('fizz');
    }
    else{
      string.push('bug!');
    } 
  }
  return string;
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
