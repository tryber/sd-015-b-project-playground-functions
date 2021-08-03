// Desafio 1
function compareTrue(valor1, valor2) {
  
    if (valor1 && valor2 === true){
        let comparar = true
    
        console.log(comparar)
        
        return comparar
    } else{
        
        let comparar = false 
    
        console.log(comparar)
    
        return comparar
    }
    }
     compareTrue(true, false)

// Desafio 2
function calcArea(base, height) {
    let calcular = (base * height) / 2
    return calcular
    }
    
// Desafio 3
function splitSentence(string) 
{
  let separacao =  string.split(' ')
  return separacao
  
}



// Desafio 4
function concatName(ArrayDeStrings) {  
let primeiro = ArrayDeStrings[0];
let ultimo = ArrayDeStrings[ArrayDeStrings.length-1];
let results = ultimo+', '+primeiro;
return results ;
}



// Desafio 5
function footballPoints(wins , ties) {
  let vitorias = wins * 3;
  resultado = vitorias + ties
  return resultado
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
