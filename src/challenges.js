// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if(valor1 === true && valor2 === true){
    return true;
  }
  else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(arrayStrings) {
  // seu código aqui
 return arrayStrings[arrayStrings.length - 1] + ", " + arrayStrings[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (3 * wins) + ties;
}

// Desafio 6
function highestCount(arrayNumeros) {
  // seu código aqui
  let quant = 0;
  let maior = arrayNumeros[0];
  for(let index = 0; index < arrayNumeros.length; index += 1){
     if( arrayNumeros[index] > maior){
       maior = arrayNumeros[index];
     }
  }
  for(let index = 0; index < arrayNumeros.length; index += 1){
    if(maior==arrayNumeros[index]){
      quant += 1;
    }
  }
    return quant;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let x = cat1 - mouse;
  let y = cat2- mouse;
  if(x < 0){
    x = -1 * (cat1 - mouse);
  }
  if(y < 0){
    y = -1 * (cat2 - mouse); 
  }
  if(x < y){
    return "cat1";
  }
   if(x == y) {
    return 'os gatos trombam e o rato foge'; 
  }    
     else {
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz(arrayDeNumeros) {
  // seu código aqui
  let array=[];
for( let index = 0; index < arrayDeNumeros.length; index += 1 ){
  if(arrayDeNumeros[index] % 3 == 0 && arrayDeNumeros[index] % 5 == 0){
    array.push("fizzBuzz");
  }
  else if( arrayDeNumeros[index] % 3 == 0){
    array.push("fizz");
  }
  else if( arrayDeNumeros[index] % 5 == 0){
    array.push("buzz");
  }
  if(arrayDeNumeros[index] % 3 !== 0 && arrayDeNumeros[index] % 5 !== 0){
    array.push("bug!");
  }
}
return array;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let newString = "";
  for (let index = 0; index < string.length; index += 1)
  {
    if (string[index] == 'a')
    {
      newString = newString + 1;
    }
    else if (string[index] == 'e')
    {
      newString = newString + 2;
    }
    else if (string[index] == 'i')
    {
      newString = newString + 3;
    }
    else if (string[index] == 'o')
    {
      newString = newString + 4;
    }
    else if (string[index] == 'u')
    {
      newString = newString + 5;
    }
    else
    {
      newString = newString + string[index];
    }
  }
  return newString;
}

function decode(string) 
{
  // seu código aqui
  let newString = "";
  for (let index = 0; index < string.length; index += 1)
  {
    if (string[index] == 1)
    {
      newString = newString + 'a';// Desafio 11
      function generatePhoneNumber(numeroDeTelefone) {
        // seu código aqui
        let cont = 0;
      if(numeroDeTelefone.length !== 11){
        return "Array com tamanho incorreto."
      }
      for(let index = 0; index < numeroDeTelefone.length; index += 1){
        if(numeroDeTelefone[index] < 0 | numeroDeTelefone[index] > 9){
          return "não é possível gerar um número de telefone com esses valores"
        }
      }
      return "(" + numeroDeTelefone[0] + numeroDeTelefone[1] + ") " + numeroDeTelefone[2] + numeroDeTelefone[3] + numeroDeTelefone[4] + numeroDeTelefone[5] + numeroDeTelefone[6] + "-"  + numeroDeTelefone[7] + numeroDeTelefone[8] + numeroDeTelefone[9] + numeroDeTelefone[10];
      }
      
    }
    else if (string[index] == 4)
    {
      newString = newString + 'o';
    }
    else if (string[index] == 5)
    {
      newString = newString + 'u';
    }
    else
    {
      newString = newString + string[index];
    }
  }
  return newString;
}

console.log(decode("h2ll4"));


 
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
