

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
 let valuemax = Math.max.apply(null, arr);
 let cont = 0;
  for (let i = 0 ; i < arr.length; i += 1) {   
   if(valuemax === arr[i]){
      cont += 1
  } 
 }
 return (cont); 
} 
 

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));


/* Desafio 7
7 - Crie uma função de Caça ao Rato
Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2, e que ambos estão caçando um mesmo rato chamado mouse. Imagine que os animais estão em uma reta, cada um em uma posição representada por um número.

Sabendo disso, crie uma função chamada catAndMouse que, ao receber a posição de mouse, cat1 e cat2, nessa ordem, calcule as distâncias entre o rato e cada um dos gatos, em seguida, retorne qual dos felinos irá alcançar o rato primeiro (aquele que estiver mais perto do rato).

Exemplo: caso o gato cat2 esteja a 2 unidades de distância do rato, e cat1 esteja a 3 unidades, sua função deverá retornar "cat2".

Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string "os gatos trombam e o rato foge".

O que será verificado:

Retorne a string 'cat2' caso a função catAndMouse receba os parâmetros onde gato cat2 esteja a 2 unidades de distância do rato e cat1 esteja a 3 unidades de distância do rato

Retorne a string 'cat1' caso a função catAndMouse receba os parâmetros onde gato cat1 esteja a 6 unidades de distância do rato e cat2 esteja a 12 unidades de distância do rato

Retorne a string 'os gatos trombam e o rato foge' caso a função catAndMouse receba os parâmetros onde os gatos estejam na mesma distância do rato
*/
function catAndMouse(mouse,cat1,cat2) {
if(cat2 === cat1 ){
  return("os gatos trombam e o rato foge");
}else if(cat2 > cat1){
  return("cat1");
}else{
  return("cat2");
}
}

/* Desafio 8
8 - Crie uma função FizzBuzz
Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:

Para cada número do Array que seja divisível apenas por 3, apresente uma string "fizz";
Para cada número do Array que seja divisível apenas por 5, apresente uma string "buzz";
Caso o número seja divisível por 3 e 5, retorne a string "fizzBuzz";
Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";
Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"].

O que será verificado:

Retorne as strings ['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz'] quando é passado os parâmetros [2, 15, 7, 9, 45] para a função fizzBuzz

Retorne as strings ['bug!', 'fizz'] quando é passado os parâmetros [7, 9] para a função fizzBuzz

Retorne as strings ['fizz', 'buzz'] quando é passado os parâmetros [9, 25] para a função fizzBuzz
*/
function fizzBuzz(arr) {
 let emptyarr = []; 
 for (let i = 0; i < arr.length; i += 1) {     
  if(arr[i] % 15 === 0){
    emptyarr.push("fizzBuzz");     
  }else if(arr[i] % 5 === 0){
    emptyarr.push("buzz");
}else if(arr[i] % 3 === 0){
   emptyarr.push("fizz");
}else{
  emptyarr.push("bug!"); 
}

}
return(emptyarr)
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));


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
