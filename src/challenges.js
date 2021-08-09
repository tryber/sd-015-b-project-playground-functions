/* para realizar alguns dos exercicios eu fiz varias pesquisas pois estava com muitas duvidas, consultei o mozila developer e alguns commits de estudantes, mas só utilizei os codigos apos entender como os memso funcionam" */
// Desafio 1
function compareTrue (boolean1, boolean2){
  if(boolean1 === boolean2 && boolean1 === true){
      return true
  }else{
      return false
  }
}

// Desafio 2
function calcArea(base, height){
  return ((base * height)/2)
}
// Desafio 3
function splitSentence (frase){
  return frase.split(' ');
}

// Desafio 4
function concatName (arrayString){
  let ultimo = (arrayString.length -1);
  return arrayString[ultimo] + ", " + arrayString[0];
}

// Desafio 5
function footballPoints(wins, ties){
  let winValue = 3;
  let tiesValue = 1;
  return (wins * winValue) + (ties * tiesValue);
}

// Desafio 6
function highestCount (numArray){
  let numMax =  Math.max.apply(null, numArray);
  let cont = 0
  for(let i = 0; i < numArray.length; i += 1){
      if(numMax === numArray[i]){
      cont += 1;
      }
  }
  return cont;
  } 

// Desafio 7
function catAndMouse (mouse, cat1, cat2){
  let winCat1 = 0;
  let winCat2 = 0;

  if(mouse < cat1){
      for(let i = cat1; i >= mouse; i -= 1){
          winCat1 += 1;

      }
  }else if(mouse > cat1){
      for(let j = cat1; j <= mouse;j += 1){
          winCat1 +=1
      }
  }

  if(mouse < cat2){
      for(let k = cat2; k >= mouse; k -= 1){
          winCat2 += 1;

      }
  }else if(mouse > cat2){
      for(let l = cat2; l <= mouse;l += 1){
          winCat2 +=1
      }
  }
  if(winCat1 < winCat2){
      return "cat1"
  }else if(winCat1 > winCat2){
      return "cat2"
  }else if(winCat1 === winCat2){
      return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(sequencia) {
  let resultado = [];
  for(let i = 0;i < sequencia.length; i += 1){
    if(sequencia[i] % 3 === 0 && sequencia[i] % 5 === 0) {
      resultado.push("fizzBuzz");
    }else if(sequencia[i] % 3 === 0) {
      resultado.push("fizz");
    }else if(sequencia[i]% 5 === 0) {
      resultado.push("buzz");
    }else {
      resultado.push("bug");
    }
  }
  return resultado;
}

// Desafio 9
function encode(codifica) {
 for(let i in codifica){
  codifica = codifica.replace("a", "1");
  codifica = codifica.replace("e", "2");
  codifica = codifica.replace("i", "3");
  codifica = codifica.replace("o", "4");
  codifica= codifica.replace("u", "5")
 }
 
  return codifica;
  }

function decode(decodifica) {
  for(let i in decodifica){
    decodifica = decodifica.replace("1", "a");
    decodifica = decodifica.replace("2", "e");
    decodifica = decodifica.replace("3", "i");
    decodifica = decodifica.replace("4", "o");
    decodifica = decodifica.replace("5", "u")
   }
   
    return decodifica;
    }

let texto = " a e i o u"
console.log(codifica(texto));

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


 /*codifica.replace(/(a)/g, "1")
   codifica.replace(/(e)/g, "2")
   codifica.replace(/(i)/g, "3")
   codifica.replace(/(o)/g, "4")
   codifica.replace(/(u)/g, "5")
return codifica;*/