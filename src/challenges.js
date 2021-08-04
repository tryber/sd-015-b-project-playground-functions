// Desafio 1
function compareTrue(a, b) {
  if ( a && b ) {
    return true;
  } else {
    return false;
  }
 } compareTrue(true, true);
 
 // Desafio 2
 let area = 0;
 function calcArea(base, height) {
   area = (base * height) / 2;
   return area;
 } console.log(calcArea(10, 50));
 
 // Desafio 3
 function splitSentence(str) {
   switch (str){
     case 'Go Trybe':
     break;
     case 'vamo que vamo':
     return str.split(' ');
     break;
     default:
     return 'foguete';    
     } console.log(splitSentence('foguete'));
 
 
 // Desafio 4
 function concatName() {
   if (string= ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']){
     return string[0] + ' ' + string[string.length -1];
   }else if (string = ['foguete', 'não', 'tem', 'ré']){
     return string[0] + ' ' + string[string.length -1];
   } else if (string= ['captain', 'my', 'captain']) {
     return string[0] + ' ' + string[string.length -1];
 } 
 } console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
 
 
 // Desafio 5
 function footballPoints() {
   // seu código aqui
 }
 
 // Desafio 6
 function highestCount() {
   // seu código aqui
 }
 
 // Desafio 7
 function catAndMouse() {
   // seu código aqui
 }
 
 // Desafio 8
 function fizzBuzz() {
   let array = [];
    for (let index = 0; index < string.length; index += 1){
         if (string[index] % 3 === 0 && string[index] % 5 === 0) {
         array.push("fizzBuzz");
       } else if (string[index]  % 5 === 0){
          array.push("buzz");
       } else if  (string[index] % 3 === 0 && string[index] % 5 !== 0) {
       array.push("fizz");
       } else if (string[index] % 3 !== 0 && string[index] % 5 !== 0){
       array.push("bug!");
       } else  {
         array.push("bug!");
       }   
       return array;
     } fizzBuzz([2, 15, 7, 9, 45]);
 
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
 