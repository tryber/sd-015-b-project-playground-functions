// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a == true && b == true) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let worlds = frase.split(' ');
  return worlds;
}

// Desafio 4
function concatName(lista) {
  // seu código aqui
  return lista[lista.length -1] + " " + lista[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(lista) {
  // seu código aqui
  let repete = 0;
  let maior = lista.reduce(function(a, b) {
    return Math.max(a, b);
  });
  for (i = 0; i < lista.length; i ++) {
    if (maior == lista[i]){
      repete ++
    }
  }
  return repete;
}// Aqui utilizei um metodo que econtrei na documentacao, que compara cada valor para retornar o maior (dentro de uma array). Econtrei outros como o getMaxOfArray mas achei ele complexo... creio que o array.reduce() fiquei mais simplificado de entender no codigo.

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaGato1 = Math.abs(mouse - cat1);
  let distanciaGato2 = Math.abs(mouse - cat2);
  if (distanciaGato1 < distanciaGato2) {
    return "cat1";
  }
  else if (distanciaGato2 < distanciaGato1) {
    return "cat2";
  }
  else {
    return "os gatos trombam e o rato foge";
  }

}// Econtrei a funcao Math.abs no documento, estava procurando uma forma de "anular" o numero negativo e consegui por meio dela

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
