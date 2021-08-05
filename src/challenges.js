// Desafio 1
function compareTrue(valorA, valorB) {
  if (valorA===true && valorB === true) {
    return true
    } else {
    return false
    }
}
//console.log(compareTrue( 1===1, 2===2))


// Desafio 2
function calcArea(base , height) {
  
    let area = ((base * height)/2);
    return area; 
}
//console.log(calcArea(10, 50));


// Desafio 3
function splitSentence(frase) {
  let palavras = frase;
  return palavras.split(' ');
}
//console.log(splitSentence("vamo que vamo"));


// Desafio 4
function concatName(array) {
  let {length, 0: first, [length-1]: last} = array;
  return last+ ', '+first;
}
//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));


// Desafio 5
function footballPoints(wins , ties) {
  let pontos = ((wins*3)+(ties*1));
  return pontos;
}
//console.log(footballPoints(14, 8));


// Desafio 6
function highestCount(numbers) {
  let numMaior = -2147483648;
  let contador = 0;
    for (let index=0; index < numbers.length; index += 1) {
      if(numbers[index] > numMaior) {
      numMaior = numbers[index];
      }
    }
    for (let index=0; index < numbers.length; index += 1) {
      if (numbers[index] === numMaior) {
      contador = contador + 1 ;
      } 
    }
  return contador;
}
//console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
 /* let positioncat1 = ((cat1 - mouse)**2);
  let positioncat2 = ((cat2 - mouse)**2);
  let resposta = [];

  if (positioncat1 < positioncat2) {
      resposta.push = ("cat1");
  } else if (positioncat2 < positioncat1) {
    resposta.push = ("cat2");
  } else if (positioncat1 || positioncat2 === mouse) {
    resposta.push = ("os gatos trombam e o rato foge");
  } else if (positioncat1 === positioncat2) {
    resposta.push = ("os gatos trombam e o rato foge");   
  } else {resposta.push
  }
    return resposta**/
}



// Desafio 8
function fizzBuzz(array) {
  let fizzBuzz =[];
  for (let index=0; index < array.length; index += 1) {
    if(array[index] % 15 === 0) {
    fizzBuzz.push("fizzBuzz"); 
    } else if (array[index] % 5 === 0) {
    fizzBuzz.push("buzz");
    } else if (array[index] % 3 === 0) {
    fizzBuzz.push("fizz");
    } else 
    fizzBuzz.push("bug!");
    
  }
  return fizzBuzz
} 

//console.log(fizzBuzz([25, 9]))



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
