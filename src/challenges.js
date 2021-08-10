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
function highestCount(lista_de_numeros) {
  let maior_numero =lista_de_numeros[0];
  let contador = 0;
  for (let index=0; index < lista_de_numeros.length; index+=1) {
    if (lista_de_numeros[index] > maior_numero){
      maior_numero = lista_de_numeros[index]
    }
  }
  for (let index=0; index < lista_de_numeros.length; index+=1) {
    if (maior_numero === lista_de_numeros[index]) {
      contador+=1
    }
  }
  return contador
}
// Desafio 7
// Créiditos a Gabrielle Murat (Descobri a função Math.abs graças ao commit do projeto desta pessoa.)
function catAndMouse(mouse,cat1,cat2) {
  let distance_1 = Math.abs(mouse - cat1)
  let distance_2 = Math.abs(mouse - cat2)

  if (distance_1 === distance_2) {
    return 'os gatos trombam e o rato foge'
  }
  if (distance_1 < distance_2) {
    return 'cat1'
  }
  if (distance_1 > distance_2) {
    return 'cat2'
  }
}

// Desafio 8
function fizzBuzz(array_de_numeros) {
  let lista_fizz_buzz = [];

  for (let index=0; index < array_de_numeros.length; index+=1) {
    if (array_de_numeros[index] % 3 === 0 && array_de_numeros[index] % 5 !=0) {
      lista_fizz_buzz.push('fizz')
    }
    if (array_de_numeros[index] % 3 != 0 && array_de_numeros[index] % 5 === 0) {
      lista_fizz_buzz.push('buzz')
    }
    if (array_de_numeros[index] % 3 === 0 && array_de_numeros[index] % 5 === 0) {
      lista_fizz_buzz.push('fizzBuzz')
    }
    if (array_de_numeros[index] % 3 != 0 && array_de_numeros[index] % 5 != 0) {
      lista_fizz_buzz.push('bug!')
    }
  }
  return lista_fizz_buzz;
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
