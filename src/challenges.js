

function compareTrue(value1,value2) {
  if (value1 && value2 === true){
    return(true)
  }else {
    return(false)
  }
}


function calcArea(base,height) {
    area = (base * height) / 2;
  return("A area do seu triangulo é : ", area);
}



function splitSentence(strin) {
  let arraystr = strin.split(" ");  
  return(arraystr);
}


//ex-4
function concatName(arraystring) {
    
   let storelaf = []; 
   storelaf.push(arraystring[arraystring.length - 1], arraystring[0]);
   let storelafr = storelaf.join(", ")
   return(storelafr);
  }
  
//ex-5
function footballPoints(wins,ties) {
  let contw = (3 * wins);
  let contt = ties;
  let pontos = (contw + contt);
  return(pontos);   
}

/* Desafio 6 
 - Crie uma função que calcule a repetição do maior número
Escreva uma função chamada highestCount que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete.

Exemplo: caso o parâmetro de highestCount seja uma array com valores [9, 1, 2, 3, 9, 5, 7], a função deverá retornar 2, que é a quantidade de vezes que o número 9 (maior número do array) se repete.

O que será verificado:

Retorne 2 quando o parâmetro passado na função highestCount seja [9, 1, 2, 3, 9, 5, 7]

Retorne 1 quando o parâmetro passado na função highestCount seja [0, 4, 4, 4, 9, 2, 1]

Retorne 3 quando o parâmetro passado na função highestCount seja [0, 0, 0] 
If (num > save) {
  save = num
  count = 0
}*/

function highestCount(arr) {
  for(let i = 0;i < arr.length; i += 1){
    let saveBigNamber = 0;
    let counter = 0;    
    if(arr[i] > saveBigNamber){
        saveBigNamber = arr[i];
    }else if (saveBigNamber === arr[i]){
      
    }else{
     saveBigNamber = saveBigNamber;   
    }   
    }
    return(counter);
  }
// Desafio 7

function catAndMouse(mouse,cat1,cat2) {
if(cat2 === cat1){
  return("os gatos trombam e o rato foge");
}else if(cat2 > cat1){
  return("cat1");
}else{
  return("cat2");
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
