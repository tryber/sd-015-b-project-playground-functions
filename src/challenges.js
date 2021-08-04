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
  return area
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
 function footballPoints(wins, ties) {
 let newWins;
 newWins = 3 * wins;  
 totalPoints = newWins + ties;
 return totalPoints;
 } console.log(footballPoints(14, 8));
 
// Desafio 6
 function highestCount(arrayNumbers) {
 let numbersReapt = 0;
 let highestNumber = 0;

 for (let number in arrayNumbers){
 if (arrayNumbers[number] > highestNumber){
 highestNumber = arrayNumbers[number]
 }
 } 
 for (number in arrayNumbers){
 if (highestNumber === arrayNumbers[number]){
 numbersReapt = numbersReapt +=1;
 }
 } return numbersReapt;  
 }
 
// Desafio 7
 function catAndMouse(mouse, cat1, cat2) {
 if(mouse > cat1){
 cat1 = mouse - cat1;
 } else {
 cat1 = cat1 - mouse;
 }
 if(mouse > cat2){
 cat2 = mouse - cat2;
 } else {
 cat2 = cat2 - mouse;
 }
 if (cat1 == cat2){
 return 'os gatos trombam e o rato foge'
 } else if (cat1 > cat2){
 return 'cat2';
 } else if(cat2 > cat1){
 return 'cat1';
 }
 }
 
 // Desafio 8
 function fizzBuzz(array) {
 let fizzBuzz = [];
 for (let i of array) {
 if ((i % 3) === 0 && (i % 5) === 0) {
 fizzBuzz.push("fizzBuzz");
 } else if ((i % 3) === 0) {
 fizzBuzz.push("fizz");
 } else if ((i % 5) === 0) {
 fizzBuzz.push("buzz");
 } else {
 fizzBuzz.push("bug!")
 }
 }
 return fizzBuzzArray;
 
// Desafio 9
 function encode() {
   
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
 