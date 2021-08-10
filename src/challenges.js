// Desafio 1
function compareTrue(entrada1, entrada2) {
  // seu código aqui
  return ((entrada1 === true) && (entrada2 === true));
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  return frase.split(' ');
}

// Desafio 4
function concatName(arrayPalavras) {
  // seu código aqui
  let index = 0;
  let index2 = (arrayPalavras.length - 1);
  return arrayPalavras[index2] + ', ' + arrayPalavras[index];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let vitoria = 3;
  let empate = 1;
  let soma = (wins * vitoria) + (ties * empate);
  return soma;
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let numeroMaior = 0;
  let contador = 0;
  let verificaMaiorNumero = 0;
  let contNumeroMaior = 0;
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[numeroMaior] < numeros[index]) {
      numeroMaior = index;
    }
    verificaMaiorNumero = numeros[numeroMaior];
  }
    for (contador = 0; contador < numeros.length; contador += 1) {
    if (verificaMaiorNumero === numeros[contador]) {
      contNumeroMaior += 1;
    }
  }
  return contNumeroMaior;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaMouseCat1 = mouse - cat1;
  let distanciaMouseCat2 = mouse - cat2;
  if (distanciaMouseCat1 < 0) {
    distanciaMouseCat1 = (distanciaMouseCat1 * (-1));
  }
  if (distanciaMouseCat2 < 0){
    distanciaMouseCat2 = (distanciaMouseCat2 * (-1));
  }
  if (distanciaMouseCat1 === distanciaMouseCat2) {
    return 'os gatos trombam e o rato foge'; 
  }
  else if (distanciaMouseCat1 > distanciaMouseCat2) {
    return 'cat2';
  }
  else {
    return 'cat1';
  }
}

// Desafio 8
function fizzBuzz(variavelNumeros) {
  // seu código aqui
  let variavelRetorno = [];
  for (let index = 0; index < variavelNumeros.length; index += 1) {
    if ((variavelNumeros[index] % 3) !== 0 && (variavelNumeros[index] % 5) !== 0) {
      variavelRetorno.push('bug!');
    }
    else if ((variavelNumeros[index] % 3) === 0 && (variavelNumeros[index] % 5) === 0) {
      variavelRetorno.push('fizzBuzz');
    }
    else if ((variavelNumeros[index] % 5) === 0) {
      variavelRetorno.push('buzz');
    }
    else {
      variavelRetorno.push('fizz');
    }
  }
  return variavelRetorno;
}

// Desafio 9
function encode(codifica) {
  // seu código aqui
  let consolida = '';
  for (let index = 0; index < codifica.length; index += 1) {
    if (codifica[index] !== 'a' && codifica[index] !== 'e' && codifica[index] !== 'i' && codifica[index] !== 'o' && codifica[index] !== 'u') {
      consolida += (codifica[index]);
    }
    else if (codifica[index] === 'a') {
    consolida += '1';
    }
    else if (codifica[index] === 'e') {
      consolida += '2';
    }
    else if (codifica[index] === 'i') {
      consolida += '3';
    }
    else if (codifica[index] === 'o') {
      consolida += '4';
    }
    else if (codifica[index] === 'u') {
      consolida += '5';
    }
  }
  return consolida;
}

function decode(decodifica) {
  // seu código aqui
  let consolida = '';
  for (let index = 0; index < decodifica.length; index += 1) {
    if (decodifica[index] !== '1' && decodifica[index] !== '2' && decodifica[index] !== '3' && decodifica[index] !== '4' && decodifica[index] !== '5') {
      consolida += (decodifica[index]);
    }
    else if (decodifica[index] === '1') {
      consolida += 'a';
    }
    else if (decodifica[index] === '2') {
      consolida += 'e';
    }
    else if (decodifica[index] === '3') {
      consolida += 'i';
    }
    else if (decodifica[index] === '4') {
      consolida += 'o';
    }
    else if (decodifica[index] === '5') {
      consolida += 'u';
    }
  }
  return consolida;
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
