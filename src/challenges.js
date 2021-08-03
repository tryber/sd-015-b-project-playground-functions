// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base* height)/2;
}

// Desafio 3
function splitSentence(s) {
  return s.split(" ");
}

// Desafio 4
function concatName(nome) {
  let tamanho = nome.length;
  return `${nome[tamanho-1]}, ${nome[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3)+(ties * 1));
}

// Desafio 6
function highestCount(v) {
  let maior = 0;
  let cont = 0;
  let menorQueZero = false;
  for (let i of v) {
    if(i < 0) {
      menorQueZero = true;
      if (maior === 0) {
        maior = i*-1;
      } else {
        if (i*-1 < maior) {
          maior = i*-1;
        } 
      }
    } else {
        if(i > maior) {
          maior = i;
        }
      }
  }
  for (let j of v) {
    console.log(maior, j*-1)
    if (menorQueZero === true) {
      if (j*-1 === maior) {
        cont += 1;
      }
    } else {
    if (j === maior) {
        cont += 1;
      }
    }
  }
  return cont;  
}
 
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if( Math.abs(Math.abs(mouse) - Math.abs(cat1)) < Math.abs(Math.abs(mouse) - Math.abs(cat2)) ) {
    return "cat1"
  }
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return "os gatos trombam e o rato foge"
  }
  return "cat2"
}

// Desafio 8
function fizzBuzz(numeros) {
  let ar = [];
  for (let i of numeros) {
    if (i % 3 === 0 && i % 5 === 0) {
      ar.push("fizzBuzz");
    } else if (i % 3 === 0) {
      ar.push("fizz");
    } else if (i % 5 === 0) {
      ar.push("buzz");
    } else {
      ar.push("bug!");
    }
  }
  return ar
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
