// Desafio 1
function compareTrue(item1, item2) {
  // seu código aqui
  return (item1 && item2);
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  return ((base * altura) / 2);
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  return (frase.split(' '));
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let tamanho = array.length;
  let primeiro = array[0];
  let ultimo = array[tamanho - 1];
  return (`${ultimo}, ${primeiro}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3 + ties);
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maior = array[0];
  let contador = 0;
  for (let valor of array) {
    if (valor > maior) {
      maior = valor;
      contador = 0;
      contador += 1;
    } else if (valor === maior) {
      contador += 1;
    }
  }
  return (contador);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distancia1 = Math.abs(mouse - cat1);
  let distancia2 = Math.abs(mouse - cat2);
  if (distancia1 < distancia2) {
    return ('cat1');
  }
  if (distancia1 > distancia2) {
    return ('cat2');
  }
  return ('os gatos trombam e o rato foge');
}

// Desafio 8
function dividePelosDois(item) {
  return (item % 3 === 0 && item % 5 === 0);
}

function dividePorAlgum(item, numero) {
  return (item % numero === 0);
}

function checaPalavra(item) {
  let palavra = '';
  if (dividePelosDois(item)) {
    palavra = 'fizzBuzz';
  } else if (dividePorAlgum(item, 3)) {
    palavra = 'fizz';
  } else if (dividePorAlgum(item, 5)) {
    palavra = 'buzz';
  } else {
    palavra = 'bug!';
  }
  return (palavra);
}

function fizzBuzz(array) {
  // seu código aqui -- Códio inspirado em algum aluno da turma, hoje o slack tá agitado então perdi o nome do colega
  let novoArray = [];
  for (let item of array) {
    novoArray.push(checaPalavra(item));
  }
  return (novoArray);
}

// Desafio 9
function trocaLetra(letra) {
  let lista = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5 };
  for (let key in lista) {
    if (key === letra) {
      letra = lista[key];
    }
  }
  return (letra);
}

function encode(texto) {
  // seu código aqui
  let novoTexto = '';
  for (let letra of texto) {
    novoTexto += trocaLetra(letra);
  }
  return (novoTexto);
}

function trocaNumero(numero) {
  let lista = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u' };
  for (let key in lista) {
    if (key === numero) {
      numero = lista[key];
    }
  }
  return (numero);
}

function decode(texto) {
  // seu código aqui
  let novoTexto = '';
  for (let letra of texto) {
    novoTexto += trocaNumero(letra);
  }
  return (novoTexto);
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
