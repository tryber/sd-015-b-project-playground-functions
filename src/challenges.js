// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
       return true
    } else {
       return false
  }
}

// Desafio 2
function calcArea(base, altura) {
  let soma = (base * altura) / 2;
  return soma;
}

// Desafio 3
function splitSentence(str) {
  let separa = str.split(" ");
  return separa;
}

// Desafio 4
function concatName(str) {
  return ((str[str.length - 1]) + ', ' + (str[0]));
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = (wins * 3);
  let empates = ties;
  let pontos = (vitorias + empates);
  return pontos;
}

// Desafio 6
function countHighestNumberArray(highestNumber, arr) {
  let cont = 0;
  for (const key in arr) {
    if (arr[key] === highestNumber) {
      cont++;
    }
  }
  return cont;
}
function highestCount(arr) {
  let maior = arr[0];
    for (let key in arr) {
      if (arr[key] > maior) {
        maior = arr[key];           
      }
    }
    return countHighestNumberArray(maior, arr);
}

// Desafio 7
function catAndMouse(gato1, gato2, rato) {
  let g1 = Math.abs(gato1);
  let g2 = Math.abs(gato2);
  let r = Math.abs(rato);
  let distanciaGato1 = (r - g1);
  let distanciaGato2 = (r - g2);
  let cat1 = 'cat1';
  let cat2 = 'cat2';
  let trombam = 'os gatos trombam e o rato foge';

  if (distanciaGato1 < distanciaGato2) {
    return cat1;

  } else if (distanciaGato1 > distanciaGato2){
    return cat2;

  } else if (distanciaGato1 === distanciaGato2){
    return trombam;
  } 
}

// Desafio 8
function fizzBuzz(arr) {

  let novoArray = [];

  let fizz = 'fizz';
  let buzz = 'buzz';
  let fizzBuzz = 'fizzBuzz';
  let bug = 'bug!';

  let divisivelPor3 = false;
  let divisivelPor5 = false;

  for (const key in arr) { 
    divisivelPor3 = arr[key] % 3 === 0;
    divisivelPor5 = arr[key] % 5 === 0;
  
    if (divisivelPor3 === true && divisivelPor5 === false) {
      novoArray.push(fizz);
  
    } else if (divisivelPor5 === true && divisivelPor3 === false) {
      novoArray.push(buzz);
  
    } else if (divisivelPor5 === true && divisivelPor3 === true) {
      novoArray.push(fizzBuzz);
    } else {
      novoArray.push(bug);
    }
  }
  return novoArray;
}

// Desafio 9
function encode(text) {
  let str = text.split('')

  for (const key in str) {
    switch (str[key]) {
      case 'a':  
          str[key] = '1';  
        break;
      case 'e':  
          str[key] = '2';  
        break;
      case 'i':  
          str[key] = '3';  
        break;
      case 'o':  
          str[key] = '4';  
        break;
      case 'u':  
          str[key] = '5';  
        break;
    }
  }
  str = str.join('');
  return str;
}

function decode(text) {
  let str = text.split('')

  for (const key in str) {
    switch (str[key]) {
      case '1':  
          str[key] = 'a';  
        break;
      case '2':  
          str[key] = 'e';  
        break;
      case '3':  
          str[key] = 'i';  
        break;
      case '4':  
          str[key] = 'o';  
        break;
      case '5':  
          str[key] = 'u';  
        break;
    }
  }
  str = str.join('');
  return str;
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
