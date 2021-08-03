// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a == true && b == true) {
    return true;
  }
  else {
    return false;
  }
}// Fiz uma funcao simples... apenas comparando valores booleanos

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}// Fiz calculo ja no return, para diminuir o tamanho da funcao

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let worlds = frase.split(' ');
  return worlds;
}// Utilizei o split() para separar a string em substrings, passando um parametro para separar a cada espaco ' '.

// Desafio 4
function concatName(lista) {
  // seu código aqui
  return lista[lista.length -1] + " " + lista[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}// outra funcao simples, passando o calculo ja no return

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
}// Aqui utilizei um metodo que econtrei na documentacao, que compara cada valor para retornar o maior (dentro de uma array). Econtrei outros como o getMaxOfArray mas achei ele complexo... creio que o array.reduce() fique mais simplificado de entender no codigo.

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
function fizzBuzz(lista) {
  // seu código aqui
  let index = 0;
  while (index < lista.length) {
    if ((lista[index] % 3 == 0) && (lista[index] % 5 != 0)) {
      lista[index] = "fizz";
    }
    else if ((lista[index] % 3 != 0) && (lista[index] % 5 == 0)) {
      lista[index] = "buzz";
    }
    else if ((lista[index] % 3 == 0) && (lista[index] % 5 == 0)) {
      lista[index] = "fizzBuzz";
    }
    else if ((lista[index] % 3 != 0) && (lista[index] % 5 != 0)) {
      lista[index] = "bug!";
    }
    index ++;
  }
  return lista;
}// Aqui eu utilizei o while, pois o meu loop com o for estava infinito... bom demorei um pouco para entender as condicoes, mas utilizei uma calculadora para encontrar um padrao, e este padrao foi o numero 0.

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
