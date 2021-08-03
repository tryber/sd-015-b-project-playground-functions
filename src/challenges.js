// Desafio 1
function compareTrue(compareValor1, compareValor2) {
  let resultado;
  if ( compareValor1 && compareValor2 ) {
    resultado = true;
  }
  else{
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(stringRecebida){
  let stringFeita = '';
  let resultado = [];
  for ( let letter of stringRecebida){
    if ( letter !== ' ') {
      stringFeita = stringFeita + letter;
    } else {
      resultado.push(stringFeita);
      stringFeita = '';
    }
  }
  resultado.push(stringFeita);
  return resultado;
}

// Desafio 4
function concatName(arrayStrings) {
  let resultado = arrayStrings[arrayStrings.length - 1] + ', ' + arrayStrings[0];
  return resultado
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 3 * wins + ties;
  return points;
}

// Desafio 6
function highestCount(arrNumeros) {
  let contagem = 0;
  let maiorNum = 0;
  for (let index of arrNumeros) {
    if (index === maiorNum) {
      contagem += 1;
    } else if (index > maiorNum) {
      contagem = 1;
      maiorNum = index;
    } else if (index < 0 && maiorNum === 0) {
      contagem = 1;
      maiorNum = index;
    }
  }
  return contagem;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado;
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);
  if (dist1 < dist2) {
    resultado = 'cat1';
  } else if (dist1 > dist2) {
    resultado = 'cat2';
  } else {
    resultado = 'os gatos trombam e o rato foge';
  }
  return resultado;  
}

// Desafio 8
function fizzBuzz(arrNumeros) {
  let resultado = [];
  for (let index of arrNumeros) {
    if (index % 3 === 0){
      if (index % 5 === 0){
        resultado.push('fizzBuzz');
      } else {
        resultado.push('fizz');
      }
    } else if (index % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

// Desafio 9
function encode(stringRecebida) {
  let resultado = '';
  for (let letter of stringRecebida) {
    if (letter === 'a'){
      resultado = resultado + '1';
    } 
    else if (letter === 'e') {
      resultado = resultado + '2';
    } 
    else if (letter === 'i') {
      resultado = resultado + '3';
    } 
    else if (letter === 'o') {
      resultado = resultado + '4';
    } 
    else if (letter === 'u') {
      resultado = resultado + '5';
    } 
    else {
      resultado = resultado + letter;
    }
  }
  return resultado;
}
function decode(stringRecebida) {
  let resultado = '';
  for (let letter of stringRecebida) {
    if (letter === '1'){
      resultado = resultado + 'a';
    } 
    else if (letter === '2') {
      resultado = resultado + 'e';
    } 
    else if (letter === '3') {
      resultado = resultado + 'i';
    } 
    else if (letter === '4') {
      resultado = resultado + 'o';
    } 
    else if (letter === '5') {
      resultado = resultado + 'u';
    } 
    else {
      resultado = resultado + letter;
    }
  }
  return resultado;
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
