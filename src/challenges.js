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
  console.log(arrayOfStrings);// [DEBUG]
  //return arrayOfStrings;
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
    //console.log(concatenacao);
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
