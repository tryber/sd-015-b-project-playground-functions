// Desafio 1
function compareTrue(a, b) {
  return a === true && b === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2; 
}
console.log(calcArea(50, 10));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
console.log(splitSentence('Vamos que vamos!'));

// Desafio 4
function concatName(array) {
  return array[array.length-1] + ', ' + array[0];
}
array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
console.log(concatName(array))

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties)
}
console.log(footballPoints(10, 3))

// Desafio 6
function highestCount(array_numbers) {
  let order_array = array_numbers.sort()
  let highest_number = order_array[order_array.length - 1]
  let contador = 0
  for (index = 0; index < array_numbers.length; index +=1) {
    if (array_numbers[index] === highest_number)
      contador += 1
  }
  return contador
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

// Desafio 7
function catAndMouse() {
  let cat1
  if ((cat1 - mouse) == (cat2 - mouse)){
    return 'os gatos trombam e o rato foge';
  }
  else if ((cat1 - mouse) < (cat2 - mouse)){
      return 'cat1'
  } 
  else{
      return 'cat2'
  }       
console.log(catAndMouse(3,6,4))

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode(texto) {
  var novoTexto = texto.replace("a", "1"); 
  var novoTexto1 = texto.replace("e", "2"); 
  var novoTexto2 = texto.replace("i", "3"); 
  var novoTexto3 = texto.replace("o", "4"); 
  var novoTexto4 = texto.replace("u", "5");
  return novoTexto4
}
console.log(encode('string teste'))


function decode() {
  var novoTexto = texto.replace("1", "a"); 
  var novoTexto = texto.replace("2", "e"); 
  var novoTexto = texto.replace("3", "i"); 
  var novoTexto = texto.replace("4", "o"); 
  var novoTexto = texto.replace("5", "u");
  return novoTexto
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
}
}
