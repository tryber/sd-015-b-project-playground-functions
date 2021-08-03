// Desafio 1 - CHECK
function compareTrue(bool1, bool2) {
  // seu código aqui
  if(bool1 && bool2){
    return true;
  }else{
    return false;
  }
}

// Desafio 2 - CHECK
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2;
}


// Desafio 3 - CHECK
function splitSentence(orignalString) {
  // seu código aqui
  let splited = [];
  splited = orignalString.split(" ");
  return splited;
}

// Desafio 4 - CHECK
function concatName(stringsArray) {
  // seu código aqui
  let concat = stringsArray.pop() +", "+ stringsArray.shift(); //
  return concat;
}

// Desafio 5 - CHECK
function footballPoints(wins, ties) {
  // seu código aqui
  let score = (wins*3) + ties;
  return score;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  //1 - descobrir qual o maior número;
 //2 - contar quantas vezes ele se repete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;

  if(distanceCat1 <0){
    distanceCat1 = distanceCat1*(-1);
  }
  if(distanceCat2 < 0){
    distanceCat2 = distanceCat2*(-1);
  }
  if(distanceCat2 === distanceCat1){
    return 'os gatos trombam e o rato foge';
  }else if(distanceCat1 > distanceCat2){
    return 'cat1';
  }else{
    return 'cat2';
  }

}

// Desafio 8 - CHECK
function fizzBuzz(numbersArray) {
  // seu código aqui
  let fizzBuzzBug = [];
  
  for(var i = 0; i < numbersArray.length; i ++){
    if(numbersArray[i] % 3 === 0 && numbersArray[i]%5 === 0 ){
      fizzBuzzBug.push('fizzBuzz');
    }else if(numbersArray[i]%3 === 0){
      fizzBuzzBug.push('fizz');
    } else if( numbersArray[i]%5 === 0){
      fizzBuzzBug.push('buzz');
    } else{
      fizzBuzzBug.push('bug!');
    }
  }
  return fizzBuzzBug;
}


// Desafio 9
function encode(phrase) {
  // seu código aqui
  let encodedPhrase = '';
  for( let i = 0; i < phrase.length; i++){
    switch(phrase[i]){
      case 'a': encodedPhrase += '1';
      break;
      case 'e': encodedPhrase += '2';
      break;
      case 'i': encodedPhrase += '3';
      break;
      case 'o': encodedPhrase += '4';
      break;
      case 'u': encodedPhrase += '5';
      break;
      default: encodedPhrase += phrase[i];
      break;
    }
  }
  return encodedPhrase;
}
function decode(encoded) {
  // seu código aqui
  let decoded = '';

  for( let i = 0; i < encoded.length; i++){
    switch(encoded[i]){
      case '1': decoded += 'a';
      break;
      case '2': decoded += 'e';
      break;
      case '3': decoded += 'i';
      break;
      case '4': decoded += 'o';
      break;
      case '5': decoded += 'u';
      break;
      default: decoded += encoded[i];
      break;
    }
  }
  return decoded;
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
