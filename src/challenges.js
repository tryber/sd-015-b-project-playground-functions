// Desafio 1
function compareTrue(bool1, bool2) {
  if ((bool1) && (bool2)) {
    return (true);
  } else {return (false);
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(stringSentence) {
  let arraySentence = stringSentence.split(' ');
  return (arraySentence);
}

// Desafio 4
function concatName(array1) {
  let string1 = array1[array1.length - 1] + ', ' + array1[0];
  return (string1);
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties);
  return (points);
}

// Desafio 6
function highestCount(array2) {
  let biggest = Math.max.apply(null, array2);
  let count = 0;
  for(let index = 0; index < array2.length; index+=) {
    if (biggest === array2[index]) {
      count+=;
    }
  } return (count);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = cat1 - mouse;
  let dist2 = cat2 - mouse;
  let message = 'os gatos trombam e o rato foge';
  if (dist1 + dist2 === 0) {
    return (message);
  }
  else if (dist1 > dist2) {
    return ('cat2');
  }
  else {return ('cat1');
  }
}

// Desafio 8
function fizzBuzz(array3) {
  let frase = [];
  for (let index = 0; index < array3.length; index+=) {
    if (array3[index] % 3 === 0 && array3[index] % 5 === 0) {
      frase.push('fizzBuzz');
    } 
    else if (array3[index] % 3 === 0) {
      frase.push('fizz');
    } 
    else if (array3[index] % 5 === 0) {
      frase.push('buzz');
    } 
    else {
      frase.push('bug!');
    }   
  }

  return (frase);
}

// Desafio 9
function encode(stringer) {
  stringer = stringer.replace(/a/gi, '1');
  stringer = stringer.replace(/e/gi, '2');
  stringer = stringer.replace(/i/gi, '3');
  stringer = stringer.replace(/o/gi, '4');
  stringer = stringer.replace(/u/gi, '5');
  return (stringer);
}
function decode(stringer2) {
  stringer2 = stringer2.replace(/1/gi, 'a');
  stringer2 = stringer2.replace(/2/gi, 'e');
  stringer2 = stringer2.replace(/3/gi, 'i');
  stringer2 = stringer2.replace(/4/gi, 'o');
  stringer2 = stringer2.replace(/5/gi, 'u');
  return (stringer2);
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
