// Desafio 1

function compareTrue(value1,value2) {
  if (value1 && value2 === true){
    return(true)
  }else {
    return(false)
  }
}

// Desafio 2
function calcArea(base,height) {
    area = (base * height) / 2;
  return("A area do seu triangulo é : ", area);
}


// Desafio 3
function splitSentence(strin) {
  let arraystr = strin.split(" ");  
  return(arraystr);
}


// Desafio 4
//ao por um array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'],
// minha função retorna arraystring[length - 1] && arraystring[0]
function concatName(arraystring) {

  let storelaf = [arraystring[arraystring.length - 1],arraystring[0]];
  storelaf.join()
   return(storelaf.join());
  }

  

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
