// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 && bool2){
    return (true);
  } else {
    return (false);
  }
}

// Desafio 2
function calcArea(base, height) {
  return  ((base * height) / 2)
}

// Desafio 3
function splitSentence(str) {
  return (str.split(" "));
}

// Desafio 4
function concatName(nome) {
  return nome[nome.length -1] + ', ' + nome[0]
  }

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (3 * wins) + (1 * ties);
  return (pontos)
}

// Desafio 6
function highestCount(numbers) {
  let maior_numero = 0;
  let contador = 0;

  for (let index=0; index < numbers.length; index+=1) {
    if (numbers[index] > maior_numero) {
      maior_numero = numbers[index]
    }
  } if (numbers[index] === maior_numero) {
    contador+=1
  }
  
}
  return (contador)
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 === cat2 && cat2 === cat1) {
    return ('os gatos trombam e o rato foge');
  }
  if (cat1 > cat2){
    return ('cat2')
  } else if ( cat1 < cat2) {
    return ('cat1')
  }
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
