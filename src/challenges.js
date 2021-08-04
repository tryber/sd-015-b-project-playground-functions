// Desafio 1

function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 === true && param2 === true) {
    
    return true;

  } else {

    return false;

  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  area = (base * height)/2;

  return area;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  var space = ' ';
  var arrayOfStrings = string.split(space);
  //console.log(arrayOfStrings);// [DEBUG]
  return arrayOfStrings;
}
 // splitSentence("O Rato Roeu a Roupa do Rei de Roma"); // [DEBUG]

// Desafio 4
function concatName(obj) {
  // seu código aqui

  let comparar = Array.isArray(obj);
  //console.log(comparar);
  var tamanho = Object.keys(obj).length;
  //console.log(tamanho);

  if ( comparar == true )
  {
    let concatenacao = obj[tamanho - 1] + ', ' + obj[0];
    // console.log(concatenacao); // [DEBUG]
    return concatenacao;
  }

}
// Teste = [1, 2, 3, 4, 5]; // [DEBUG]
// concatName(Teste); // [DEBUG]

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  // retorna 50 quando 14 vitórias/ 08 empates
  // 50 = x * 14 + y * 08
  // 50 = 14x + 8y

  // retorna 05 quando 01 vitórias/ 02 empates
  // 5 = x * 01 + y * 02
  // 5 = 1x + 2y

  // retorna 00 quando 00 vitórias/ 00 empates
  // 0 = x * 00 + y * 00
  // 0 = 0x + 0y

  // 55 = (14x + 8y) + (1x + 2y)
  // 55 = (15x + 10y)
  // 55 = (15x + 10y)
  // 55 = 15*3 + 10 * 1
  // x = 3
  // y = 1
  return ( (wins * 3) + ties);

}

function defineMaior(array) {

  let maior = Number.NEGATIVE_INFINITY;

  for (let number of array)
  {
    if (number > maior)
    {

      maior = number;
    }
  }
  // console.log("Maior Número [DENTRO DA FUNÇÃO SECUNDÁRIA]: " + maior); // [DEBUG]
  return maior;

}
// Desafio 6
function highestCount(arrayNumeros) {
  // seu código aqui
  let maiorNumero = defineMaior(arrayNumeros);
  let contadorDoMaior = 0;
  // .log("Maior Número: " + maiorNumero); // [DEBUG]

  for (number of arrayNumeros)
  {
    if (number == maiorNumero)
    {
      contadorDoMaior +=1;
    }
  }
  // console.log("Contador do Maior Número: " + contadorDoMaior); // [DEBUG]
  return contadorDoMaior;
}
// meuArray = [10, 8, 7, 3, 5, 4, 1, 9, 10, 10];
// highestCount(meuArray); //[DEBUG]

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  // seu código aqui
  let distanciaGato1 = Math.abs(cat1 - mouse);
  let distanciaGato2 = Math.abs(cat2 - mouse);

  if (distanciaGato1 < distanciaGato2)
  {
    return 'cat1';
  } else if (distanciaGato1 > distanciaGato2)
  {
    return 'cat2';
  } else if (cat1 === cat2)
  {
    return 'os gatos trombam e o rato foge';
  }
  else
  {
    return 0;
  }
  /*
  if ( Math.abs(cat1 - rat) < Math.abs(cat2 - rat) )
  {
    return 'cat1';

  } else if ( Math.abs(cat1 - rat) > Math.abs(cat2 - rat) )
  {
    return 'cat2';

  } else 
  {
    return 'os gatos trombam e o rato foge';
  }
  */
}

function verificaTermo(number)
{
  let resultado;

  if (number % 3 === 0 && number % 5 === 0)
  {
    resultado = 'fizzBuzz';
  } else if (number % 3 === 0 )
  {
    resultado = 'fizz';
  } else if (number % 5 === 0 )
  {
    resultado = 'buzz';
  } else
  {
    resultado = 'bug!';
  }
  return resultado;
}
// Desafio 8
function fizzBuzz(arrayNumeros) {
  // seu código aqui
  let result = [];
  for (let number of arrayNumeros)
  {
    result.push(verificaTermo(number) );
  }
  return result;
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
