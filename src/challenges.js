// Desafio 1
function compareTrue(a, b) {
//  meu codigo
//   if ( a > b && b < a){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// console.log(compareTrue(7, 1))

  if (a === true && b === true) {
    return true;
  } 
  else {
    return false;
  }
//  codigo da Danielen Cestari
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentenca) {
  let arreio = sentenca.split(' ');
  return arreio;
}

// Desafio 4
function concatName(nomes) {
  let valor1 = nomes[nomes.length - 1];
  let valor2 = nomes[0];
  let valorFinal = [valor1, valor2];
  return valorFinal.join(', ');
//  feito com o auxilio do codigo do Valdênio que esta no slack.
}

// Desafio 5
function footballPoints(vezesWins, vezesTies) {
  let wins = 3;
  let ties = 1;
  let totalWins = wins * vezesWins;
  let totalTies = ties * vezesTies;
  let pontos = totalWins + totalTies; 
  return pontos;
}
// Desafio 6
function highestCount(arreio) {
  let numeroMaior = Math.max.apply(null, arreio);
  let cont = 0;
  for (let i = 0; i < arreio.length; i ++) {
    if (arreio[i] === numeroMaior) {
      cont++;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let ratoGato1 = Math.abs(cat1 - mouse);
  let ratoGato2 = Math.abs(cat2 - mouse);

  if (ratoGato1 === ratoGato2) {
    return 'os gatos trombam e o rato foge';
  }
  else if (ratoGato1 < ratoGato2){
    return 'cat1';
  }
  else if (ratoGato2 < ratoGato1) {
    return 'cat2';
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
