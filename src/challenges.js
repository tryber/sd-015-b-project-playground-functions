// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 && valor2 === true) return true;

  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui

  return base * height / 2;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  return str.split(" ");
}

// Desafio 4

function concatName(array) {
  // seu código aqui
  return array[array.length-1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(times) {
  // seu código aqui
  let higher = -999999;
  let times2 = 0;
  for (let count = 0; count <= times.length; count += 1) {
    if(times[count] > higher) higher = times[count];
  }
  for (let count = 0; count <= times.length; count += 1){
    if(times[count] === higher) times2 = times2 + 1;
  }
return times2;
}

// Desafio 7  
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let poscat1 = 0;
  let poscat2 = 0;
  if(mouse > cat1){
    poscat1 = mouse - cat1; 
  } else if(cat1 > mouse){
    poscat1 = cat1 - mouse;
  }
  if(mouse > cat2){
    poscat2 = mouse - cat2; 
  } else if(cat2 > mouse){
    poscat2 = cat2 - mouse;
  }
  if(poscat1 > poscat2){
    return 'cat2';
  } else if(poscat1 < poscat2){
    return 'cat1';
  } else{
    return 'os gatos trombam e o rato foge';
  }
}


// Desafio 8  
function fizzBuzz(array) {
  // seu código aqui
  let bug = [];
  for (let count = 0; count < array.length; count += 1){
    if (array[count] % 3 ===0 && array[count] % 5 === 0){
      bug.push('fizzBuzz');
    } else if(array[count] % 3 === 0){
      bug.push('fizz');
    } else if(array[count] % 5 === 0){
      bug.push('buzz');
    } else {
      bug.push('bug!');
    }
  }
  return bug;
}

// Desafio 9
function encode(str) {
  // seu código aqui
  str = str.split("");
  for(let count = 0; count <= str.length; count += 1){
    if(str[count] === 'a'){
      str[count] = '1';
    } else if(str[count] === 'e'){
      str[count] = '2';
    } else if(str[count] === 'i'){
      str[count] = '3';
    } else if(str[count] === 'o'){
      str[count] = '4';
    } else if(str[count] === 'u'){
      str[count] = '5';
    }
  }
  str = str.join('');
  return str;
}

function decode(str) {
  // seu código aqui
  str = str.split("");
  for(let count = 0; count <= str.length; count += 1){
    if(str[count] === '1'){
      str[count] = 'a';
    } else if(str[count] === '2'){
      str[count] = 'e';
    } else if(str[count] === '3'){
      str[count] = 'i';
    } else if(str[count] === '4'){
      str[count] = 'o';
    } else if(str[count] === '5'){
      str[count] = 'u';
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
