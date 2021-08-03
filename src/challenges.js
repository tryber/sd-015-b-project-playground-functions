

function compareTrue(value1,value2) {
  if (value1 && value2 === true){
    return(true)
  }else {
    return(false)
  }
}


function calcArea(base,height) {
    area = (base * height) / 2;
  return("A area do seu triangulo é : ", area);
}



function splitSentence(strin) {
  let arraystr = strin.split(" ");  
  return(arraystr);
}



function concatName(arraystring) {

  let storelaf = [arraystring[arraystring.length - 1],arraystring[0]];
  let storelafr = storelaf.join()
   return(storelafr);
  }

function footballPoints(wins,ties) {
  let contw = (3 * wins);
  let contt = ties;
  let pontos = (contt + contw);
  return(pontos + " pontos");  

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
