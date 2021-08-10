// Desafio 1
function compareTrue(a, b) {
  return a && b;
}
compareTrue(true, true);

// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(name) {
  let first = [0];
  let last = name.length - 1;
  return name [last] + ', ' + name[first];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount (array) {
  let maiorNum = array[0];
  let count = 0;
    for (i = 0; i < array.length; i += 1) {
  if (array[i] > maiorNum) {
      maiorNum = array[i];
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === maiorNum) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

    let distanciaDoGato1 = mouse - cat1;
    let distanciaDoGato2 = mouse - cat2;

    if (Math.abs(mouse - cat1) === Math.abs( mouse -cat2)){
        return ('os gatos trombam e o rato foge')
    }
    else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
      return 'cat1';
  }
    else {
      return 'cat2';
  }
}

// Desafio 8
function fizzBuzz (arrayNumeros) {
    let string = []
    let number = 0
    for(let index = 0; index < arrayNumeros.length; index += 1){
        number = arrayNumeros[index]
        if(number % 5 === 0 && number % 3 === 0) {
            string.push ('fizzBuzz');
        }
        else if(number % 5 === 0) {
            string.push ('buzz');
        }
        else if(number % 3 === 0) {
            string.push ('fizz');
        }
        else {
           string.push ('bug!');
   }
  }
 return string;
}

// Desafio 9
function encode (string) {
    let saida = '';
    for(let i = 0; i < string.length; i++) {
        switch(string[i].toLowerCase()) {
            case 'a':
                saida += 1;
                break;
            case 'e':
                saida += 2;
                break;
            case 'i':
                saida += 3;
                break;
            case 'o':
                saida += 4;
                break;
            case 'u':
                saida += 5;
                break;
            default: 
                saida += string[i];
                break;
} 
 }

 return saida;
}

function decode (string) {
    let saida = '';
    for(let i = 0; i < string.length; i++) {
        switch(string[i].toLowerCase()) {
            case '1':
                saida += 'a';
                break;
            case '2':
                saida += 'e';
                break;
            case '3':
                saida += 'i';
                break;
            case '4':
                saida += 'o';
                break;
            case '5':
                saida += 'u';
                break;
            default: 
                saida += string[i];
                break;
        } 
    }

    return saida;
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
