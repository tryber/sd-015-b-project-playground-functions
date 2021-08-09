// Desafio 10
function techList (techList, name){
techList.sort()
  let technologies = []
var technologiesAndName = technologies.sort()
if (techList.length === 0){
  return 'Vazio!'
} else {
for(let i = 0; i < techList.length; i += 1){
   let objctTech = {
     tech: techList[i],
     name: name
   };
   technologies.push(objctTech);
}
}
  return technologiesAndName;
}
// Desafio 11
//arrayNumeros.length - 1 === 11

function generatePhoneNumber(input){

var repeated = 0;

let repeated = counting;

if(input.length !== 11){
  return 'Array com tamanho incorreto.';
} else {
for(let i of input){
  if(input[i] < 0 || input[i] > 9 || repeated > 2){
   return 'não é possível gerar um número de telefone com esses valores'
}
}
}
}
// console.log(generatePhoneNumber([1, 1, 3 ,3 ,3, 3 ,4 ,4 ,5,6,7]))
  // Desafio 12
function triangleCheck (lineA, lineB,lineC){
  if(lineA + lineB > lineC && lineC > Math.abs(lineA - lineB) || lineC + lineB > lineA && lineA > Math.abs(lineC - lineB) || lineA + lineC > lineB && lineB > Math.abs(lineA - lineC)){
    return true;
  } else {
    return false;
  }
}
console.log(triangleCheck(123, 12, 11))

// Desafio 13
function hydrate (input){
const rawArray = input.match(/\d+/g);
var numArray = [];
var waterCup = 0;
for (let i = 0; i < rawArray.length; i += 1) {
  numArray.push(parseInt(rawArray[i]));
  waterCup = waterCup + numArray[i];
} 
if (waterCup === 1){
  return waterCup + ' copo de água';
} else { return waterCup + ' copos de água' }
}


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck
}
