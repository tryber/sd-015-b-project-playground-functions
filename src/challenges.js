// Desafio 1
let vida = true;
let codar = true;
function compareTrue(vida, codar) {
  // seu código aqui
  if (vida && codar) {
    return true;
  } else {
    return false;
}
}
console.log(compareTrue(vida, codar));


// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  calculo = (base * height) / 2;
  return calculo;
}
console.log(calcArea(3, 4));

// Desafio 3
frase = 'go trybe'
function splitSentence(frase) {
  // seu código aqui
  sentenca = frase.split(" ");
  return sentenca;
}
console.log(splitSentence(frase));

// Desafio 4
let names = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
primeiroItem = []
ultimoItem = []
together = []

function concatName(names) {
  // seu código aqui
 for (let name in names) {
   primeiroItem = names[0];
 }
 //console.log(primeiroItem);
 for (let name in names) {
   ultimoItem = names[names.length - 1];
 }
 together = ultimoItem + ',' + ' ' + primeiroItem;

 
 //console.log(ultimoItem);
 return together;
}
console.log(concatName(names));


// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontuacao = (wins * 3) + ties;
  return pontuacao;
}
//console.log(footballPoints(14, 8));

// Desafio 6
let numeros = [9, 1, 2, 3, 9, 5, 9];
function highestCount(numeros) {
  // seu código aqui
  let maiorNumero = 0;
  let cont = 0;
  for (let n of numeros) {
    if(n > maiorNumero) {
      maiorNumero = n;
    }     
  }
  for (let j of numeros) {
    if (j === maiorNumero) {
      cont += 1;
    }
  }
  return cont;     
}
console.log (highestCount(numeros)) 
  


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distmc1 = mouse - cat1;
  let distmc2 = mouse - cat2;
  
  if (distmc1 < distmc2) {
    console.log("cat1");
  } else if (distmc2 < distmc1) {
    console.log("cat2");
  } else {
    console.log("os gatos trombam e o rato foge.");
  }
  return catAndMouse;
}


// Desafio 8
numeros = [2, 15, 7, 9, 45];
function fizzBuzz(numeros) {
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
}
