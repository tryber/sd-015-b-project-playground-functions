// Desafio 1
function compareTrue(a,b) {
  if (a===true && b===true){
    return true
  }else{
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base*height)/2)
}

// Desafio 3
function splitSentence(string) {
  let split = string.split(" ");
  return split
}

// Desafio 4
function concatName(array) {
  let lastIten=array[array.length-1]
  let firstIten=array[0]
  return lastIten+', '+firstIten
  
}

// Desafio 5
function footballPoints(win,ties) {
  return ((win*3)+(ties*1))
}

// Desafio 6
function highestCount(array) {
  let reptedNumber=0;
  let numberConter=0;
  let indexReptedNumber=0;
  for(let index in array){
    let numberVerification=array[index];
    for(let index2 in array){
      if(numberVerification===array[index2]){
        numberConter+=1;
      }
    }
    if(numberConter>reptedNumber){
      reptedNumber=numberConter;
      indexReptedNumber=index;
    }
    numberConter=0;
  }
  return array[indexReptedNumber];
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let mouseCat1=cat1-mouse;
  let mouseCat2=cat2-mouse;
  let mouseCat22=Math.abs(mouseCat2)
  let mouseCat11=Math.abs(mouseCat1)
  if (mouseCat22===mouseCat11){
    return "os gatos trombam e o rato foge";
  }else if(mouseCat22>mouseCat11){
    return "cat1"
  }else{
    return 'cat2'
  }

}

// Desafio 8
function fizzBuzz(array) {
  let result=[];
  for(let index in array){
    let numero=array[index];
    if ((numero%3==0)&&(numero%5===0)){
      result.push('fizzBuzz')
    }else if (numero%5===0){
      result.push('buzz');
    }else if (numero%3===0){
      result.push('fizz'); 
    }else{
      result.push('bug!')
    }
   
  }
  return result;
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
