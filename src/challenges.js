// Desafio 1
let vida = true;
let codar = false;
function compareTrue(vida, codar) {
  // seu código aqui
  if (vida && codar) {
    return true;
  } else {
    return false;
} 
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  calculo = (base * height) / 2;
  return calculo;
}

// Desafio 3
frase = 'go trybe'
function splitSentence(frase) {
  // seu código aqui
  sentenca = frase.split(" ");
  return sentenca;
}

// Desafio 4
let names = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
primeiroItem = []
ultimoItem = []
together = []

function concatName(names) {
  // seu código aqui
 for (let name in names) {
   primeiroItem = names[0];
 }
 //console.log(primeiroItem);
 for (let name in names) {
   ultimoItem = names[names.length - 1];
 }
 together = ultimoItem + ',' + ' ' + primeiroItem;

 
 //console.log(ultimoItem);
 return together;
}


// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontuacao = (wins * 3) + ties;
  return pontuacao;
}
//console.log(footballPoints(14, 8));

// Desafio 6
let numeros = [9, 1, 2, 3, 9, 5, 9];
function highestCount(numeros) {
  // seu código aqui
  let maiorNumero = 0;
  let cont = 0;
  for (let n of numeros) {
    if(n > maiorNumero) {
      maiorNumero = n;
    }     
  }
  for (let j of numeros) {
    if (j === maiorNumero) {
      cont += 1;
    }
  }
  return cont;     
}
//console.log (highestCount(numeros)) 



    
 
  
//}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distmc1 = mouse - cat1;
  let distmc2 = mouse - cat2;
  
  if (distmc1 < distmc2) {
    console.log("cat1");
  } else if (distmc2 < distmc1) {
    console.log("cat2");
  } else {
    console.log("os gatos trombam e o rato foge.");
  }
  return catAndMouse;
}


// Desafio 8
let numeros = [2, 15, 7, 9, 45]
function fizzBuzz(numeros) {
  // seu código aqui

 

console.log(fizzBuzz(numeros));




  


    if (numeros[n] % 5 === 0) {
      console.log('buzz')
    }
    if (numeros[n] % 3 === 0 && numeros[n] % 5 === 0) {
      console.log('fizzbuzz')
    }
  }
    
    
    
    else if (numeros[n] % 5 === 0) {
      console.log('buzz');
    }
    }

  }
    
    
    
    else if {
      (numeros[n] % 5 === 0) {
      console.log('buzz')
    }
  }
}
   
  
  

   else if (numeros % 5 === 0) {
      console.log('buzz');
    } else if (numeros % 3 === 0 && numeros % 3 === 5) {
      console.log('fizzbuzz');
    } else {
      console.log('bug!');
    }
  }
  return fizzBuzz;
}
console.log(fizzBuzz)

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
