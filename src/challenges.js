

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
//Math.abs()
function catAndMouse(mouse,cat1,cat2) {
let result;
if(Math.abs((cat1 - mouse)) > Math.abs((cat2 - mouse))){
  result = "cat2" 
}else if(Math.abs((cat1 - mouse))  < Math.abs((cat2 - mouse))){
  result = "cat1" 
}else{
  result = ("os gatos trombam e o rato foge");
}
return(result); 
}



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



/*
9 - Crie uma função que Codifique e Decodifique
Crie duas funções: a primeira deverá se chamar encode e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

Ou seja, caso o parâmetro de encode seja "hi there!", o retorno deverá ser "h3 th2r2!".

A segunda função deverá se chamar decode e faz o contrário de encode - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de decode seja "h3 th2r2!", o retorno deverá ser "hi there!").

O que será verificado:

Retorne uma string codificada quando a função encode for utilizada

Retorne uma string decodificada quando a função decode for utilizada
*/
function encode(strin) {
  let emptyarr = []; 
  for (let index = 0; index < strin.length; index += 1 ) {
    switch(strin[index]){
      case "a":
        emptyarr.push("1");
        break;
      case "e":
        emptyarr.push("2")
        break;
      case "i":
        emptyarr.push("3")
        break;
      case "o":
        emptyarr.push("4")
        break;
      case "u":
        emptyarr.push("5")
        break;     
      default:
        emptyarr.push(strin[index])
        break;
    } 
     
    }
    return(emptyarr.join(""));      
    
  }
  console.log(encode("hi there!"))
function decode(strin) {
  let emptyarr = []; 
  for (let index = 0; index < strin.length; index += 1 ) {
    switch(strin[index]){
      case "1":
        emptyarr.push("a");
        break;
      case "2":
        emptyarr.push("e")
        break;
      case "3":
        emptyarr.push("i")
        break;
      case "4":
        emptyarr.push("o")
        break;
      case "5":
        emptyarr.push("u")
        break;     
      default:
        emptyarr.push(strin[index])
        break;
    } 
     
    }
    return(emptyarr.join(""));      
}
console.lo

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
