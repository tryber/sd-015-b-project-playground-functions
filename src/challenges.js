

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


//ex-4
function concatName(arraystring) {
    
   let storelaf = []; 
   storelaf.push(arraystring[arraystring.length - 1], arraystring[0]);
   let storelafr = storelaf.join(", ")
   return(storelafr);
  }
  console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

//ex-5
function footballPoints(wins,ties) {
  let contw = (3 * wins);
  let contt = ties;
  let pontos = (contw + contt);
  return(pontos);   
}
console.log(footballPoints(10,15));

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
