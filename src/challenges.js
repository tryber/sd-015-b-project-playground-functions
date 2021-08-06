// Desafio 1(conseguir)
function compareTrue(valor1, valor2) {
  if (valor1 && valor2 === true) {
    let comparar = true;

    return comparar;
  } let comparar = false;

  return comparar;
}
compareTrue(true, false);

// Desafio 2(conseguir)
function calcArea(base, height) {
  let calcular = (base * height) / 2;
  return calcular;
}

// Desafio 3(conseguir)
// usei esse video https://www.youtube.com/watch?v=3d-wAbwJKtk para enteder como o split funciona
function splitSentence(string) {
  let separacao = string.split(' ');
  return separacao;
}

// Desafio 4(conseguir)
function concatName(ArrayDeStrings) {
  let primeiro = ArrayDeStrings[0];
  let ultimo = ArrayDeStrings[ArrayDeStrings.length - 1];
  let results = `${ultimo}, ${primeiro}`;
  return results;
}

// Desafio 5(conseguir)
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  resultado = vitorias + ties;
  return resultado;
}

// Desafio 6( consegui)
function highestCount(ArrayDeNumeros) {
  let Maior = ArrayDeNumeros[0];
  let Repitcao = 0;
  for (let i = 0; i < ArrayDeNumeros.length; i++) {
    if (Maior == ArrayDeNumeros[i]) {
      Repitcao += 1;
    } else if (Maior < ArrayDeNumeros[i]) {
      Maior = ArrayDeNumeros[i];
      Repitcao = 1;
    }
  }
  return Repitcao;
}

// Desafio 7(consegir)
function catAndMouse(mouse, cat1, cat2) {
  let gato2 = cat2 - 2;
  if (cat1 < gato2) {
    return 'cat1';
  }
  if (cat2 < cat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}
// Desafio 8(conseguir)
// peguei nesse site https://www.geeksforgeeks.org/check-large-number-divisible-3-not/ para saber como o número 3 se torna divisivel
function fizzBuzz(Array) {
  let fizzBuzz = [];
  for (let i = 0; i < Array.length; i += 1) {
    if (Array[i] % 3 == 0 && Array[i] % 5 === 0) {
      fizzBuzz.push('fizzBuzz');
    } else if (Array[i] % 3 === 0) {
      fizzBuzz.push('fizz');
    } else if (Array[i] % 5 === 0) {
      fizzBuzz.push('buzz');
    } else {
      fizzBuzz.push('bug!');
    }
  }
  return fizzBuzz;
}

// Desafio 9
function encode(codigo) {
  let encode = [];
  for (let index = 0; index < codigo.length; index++) {
    if (codigo[index] == 'a') {
      encode.push('1');
    } else if (codigo[index] == 'e') {
      encode.push('2');
    } else if (codigo[index] == 'i') {
      encode.push('3');
    } else if (codigo[index] == 'o') {
      encode.push('4');
    } else if (codigo[index] == 'u') {
      encode.push('5');
    } else {
      encode.push(codigo[index]);
    }
  }

  return (encode.join(''));
}
encode('hello');
function decode(codigo) {
  let decode = [];
  for (let index = 0; index < codigo.length; index++) {
    if (codigo[index] == 1) {
      decode.push('a');
    } else if (codigo[index] == 2) {
      decode.push('e');
    } else if (codigo[index] == 3) {
      decode.push('i');
    } else if (codigo[index] == 4) {
      decode.push('o');
    } else if (codigo[index] == 5) {
      decode.push('u');
    } else {
      decode.push(codigo[index]);
    }
  }
  return (decode.join(''));
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
