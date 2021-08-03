// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 && boolean2 === true) {
    return true;
  }
  else {
    return false;
  }
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
  // seu código aqui
}

// Desafio 3
function splitSentence(string) {
  let splitString = string.split(" ");
  return splitString;
  // seu código aqui
}
// Desafio 4
function concatName(array) {
  for (i=0 ; i<array.length ; i +=1) {
    let name =array[array.length-1] + ", " + array[0];
    return name;
  }
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties * 1);
  return pontos;
  // seu código aqui
}

// Desafio 6
function highestCount(array) {
  let initialNumber = array[0];
  let countRepeats = 0;
  for (i = 0 ; i < array.length ; i += 1) {
    if (array[i] > initialNumber) {
      initialNumber = array[i];
    }
  }
  for (k = 0 ; k <array.length ; k += 1 ) {
    if (array[k] === initialNumber) {
      countRepeats +=1;
    }
  }
    return countRepeats; 
  // seu código aqui}
}

// Desafio 7
// Funcao Math.abs retirada da documentacao (Link:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)
function catAndMouse(mouse, cat1, cat2) {
 let distanciaCat1 = Math.abs(cat1-mouse);
 let distanciaCat2 = Math.abs(cat2-mouse);

 if(distanciaCat1 < distanciaCat2) {
   return "cat1";
 }
 else if(distanciaCat2 < distanciaCat1) {
   return "cat2";
 }
 else {
   return "os gatos trombam e o rato foge";
 }
      // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
  let  num = [];
  for (i = 0 ; i < array.length ; i += 1 )
  if (array[i] % 3 === 0 && array[i] % 5 === 0) {
    num.push("fizzBuzz");
  }
  else if (array[i] % 5 === 0) {
    num.push("buzz");
  }
  else if (array[i] % 3 === 0)
    num.push("fizz")
  else {
    num.push("bug!");
  }
  return num
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
