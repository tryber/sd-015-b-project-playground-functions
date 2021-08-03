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
function footballPoints() {
  // seu código aqui
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
