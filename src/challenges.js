// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2 === true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" "); 
}

// Desafio 4
function concatName(arrey) {
  let firstElement = arrey[0];
  let lastElement = arrey[arrey.length - 1];
  return lastElement + ', ' + firstElement;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = 3;
  let empate = 1;
  return (wins * vitorias) + (ties * empate);
}

// Desafio 6
function highestCount(numeros) {
  let maiorNumero;
  let contador = 0;
  maiorNumero = Math.max(...numeros);
  
  console.log(maiorNumero)

  for(let count = 0; count < numeros.length; count++){
    if(maiorNumero === numeros[count]){
      contador += 1;
    }
  }
  console.log(contador);
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1 = (cat1 - mouse);
  let distanciaGato2 = (cat2 - mouse);
  if(distanciaGato1 < 0){
    distanciaGato1 *= -1;
  }

  if(distanciaGato1 < distanciaGato2){
    return 'cat1';
  }else if (distanciaGato2 < distanciaGato1){
    return 'cat2';
  }else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  array = [];
  for(let count = 0; count < numeros.length; count++){
    if((numeros[count] % 3 === 0) && (numeros[count] % 5 === 0)){
      array.push('fizzBuzz');
    }else{
      if(numeros[count] % 3 === 0){
        array.push('fizz');
      }else if (numeros[count] % 5 === 0){
        array.push('buzz');
      }else{
        array.push('bug!');
      }
    }
  }
  return array;
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
