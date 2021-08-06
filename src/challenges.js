// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// Desafio 3
function splitSentence(parametro) {
  return parametro.split(' ');
}

// Desafio 4
function concatName(arrayTeste) {
  let novaLista =
    arrayTeste[arrayTeste.length - 1] + ', '.concat(arrayTeste[0]);
  return novaLista;
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = wins * 3 + ties;
  return resultado;
}

// Desafio 6
function highestCount(number) {
  let contador = 0;
  let maiorNumero = Math.max(...number);
  for (let index = 0; index < number.length; index += 1) {
    if (number[index] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}
/*Imagine que existem dois gatos, os quais chamaremos de `cat1` e `cat2`, e que ambos estão caçando um mesmo rato chamado `mouse`. Imagine que os animais estão em uma reta, cada um em uma posição representada por um número.

Sabendo disso, crie uma função chamada `catAndMouse` que, ao receber a posição de `mouse`, `cat1` e `cat2`, **nessa ordem**, calcule as distâncias entre o rato e cada um dos gatos, em seguida, retorne qual dos felinos irá alcançar o rato primeiro (aquele que estiver mais perto do rato).

Exemplo: caso o gato `cat2` esteja a 2 unidades de distância do rato, e `cat1` esteja a 3 unidades, sua função deverá retornar `"cat2"`.

Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string `"os gatos trombam e o rato foge"`.*/
//Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posicaoCat1 = Math.abs(cat1 - mouse);
  let posicaoCat2 = Math.abs(cat2 - mouse);

  if (posicaoCat1 > posicaoCat2) {
    return 'cat2';
  } else if (posicaoCat1 < posicaoCat2) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let novaArray = [];

  for (num of arrayNumeros) {
    if (num % 3 === 0 && num % 5 !== 0) {
      novaArray.push('fizz');
    } else if (num % 5 === 0 && num % 3 !== 0) {
      novaArray.push('buzz');
    } else if (num % 5 === 0 && num % 3 === 0) {
      novaArray.push('fizzBuzz');
    } else {
      novaArray.push('bug!');
    }
  }
  return novaArray;
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
