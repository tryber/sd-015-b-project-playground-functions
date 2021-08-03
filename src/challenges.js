// Desafio 1
function compareTrue(a, b) {
  return a === true && b === true;
} 
// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2); 
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}
// Desafio 4
function concatName(lista) {
  return lista[lista.length- 1] + ', ' + lista[0]
}

// Desafio 5
function footballPoints(wins, ties){
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrayNumeros) {
  let contador = 0;
  let maiorNumero = arrayNumeros[0];
  
  for (let numero of arrayNumeros) {
    if (numero > maiorNumero) {
    maiorNumero = numero;
    contador += 1;
  } else if (numero === maiorNumero) {
  contador += 1;
  }
  }
  return contador;
} 
  console.log(highestCount([9, 1, 2, 3, 9, 5, 7])) 
// Desafio 7
function catAndMouse(mouse, cat1, cat2){
  if(cat1 < cat2){
    return 'cat1';
  }else if(cat2 < cat1){
    return 'cat2'
  }else if(cat1 === cat2){
    'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode(str) {
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
