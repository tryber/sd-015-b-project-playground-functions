// Desafio 1

function compareTrue(a ,b){

    if (a && b === true){
     return true
    } else {
        return false
    }

}
compareTrue(false, false)

// Desafio 2
function calcArea(base, height){
    return base * height / 2
}

calcArea(51, 1)

// Desafio 3
function splitSentence(a){
let x;
x = a.split(' ')

    return x
}

splitSentence('go Trybe')


// Desafio 4

function concatName(a){
   let xd = a;

   let xe = ''
   
   xe = xd[xd.length - 1] + ',' + ' ' + xd[0]
    
    return xe
 
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])


// Desafio 5 
function footballPoints(wins, ties){
    let pointTotal = wins * 3 + ties
    return pointTotal
}



// Desafio 6

function highestCount(a){

let quantidade = 0;
    for (let i = 0; i < a.length; i++){
 if (Math.max(...a) === a[i]) {
    quantidade++
}   
}

return quantidade

}




// Desafio 7 
 

function catAndMouse(mouse, cat1, cat2) {
    
    let negativeCat1 = cat1 - mouse;
    let negativeCat2 = cat2 - mouse;
    if (negativeCat1 < 0) {
      negativeCat1 = negativeCat1 * (-1);
    }
    
    if (negativeCat2 < 0) {
      negativeCat2 = negativeCat2 * (-1);
    }
    if (negativeCat1 < negativeCat2) {
      ProximeCat = 'cat1';
    } else if (negativeCat1 > negativeCat2) {
      ProximeCat = 'cat2';
    } else {
      ProximeCat = 'os gatos trombam e o rato foge';
    }
    let ProximeCat;
    return ProximeCat;
  }
// Desafio 8
function fizzBuzz(a){
    let newA = []


    for (let i = 0; i < a.length; i++){
        if (a[i] % 3 === 0 && a[i] % 5 !== 0){
            newA.push("fizz")
        } else if (a[i] % 5 === 0 && a[i] % 3 !== 0){
            newA.push("buzz")
        } else if (a[i] % 3 === 0 && a[i] % 5 === 0){
            newA.push("fizzBuzz")
        }else if (a[i] % 3 !== 0 && a[i] % 5 !== 0){
            newA.push("bug!")
        }
    }
    return newA
}


// // Desafio 9
function encode(a) {
    let AS = []
    
    for (let i = 0; i < a.length; i++){
        if (a[i] === "a"){
            AS.push(1)
        } else if (a[i] === "e"){
            AS.push(2)
    }else if (a[i] === "i"){
        AS.push(3)
    }else if (a[i] === "o"){
        AS.push(4)
    }else if (a[i] === "u"){
        AS.push(5)
    } else {
        AS.push(a[i])
    }
    
    }
  return AS.join('')
    
    }   
     encode("hi there!")


function decode(b) {
    let BS = []
   
    for (let i = 0; i < b.length; i++){
        if (b[i] == 1){
            BS.push("a")
        } else if (b[i] == 2){
            BS.push("e")
    }else if (b[i] == 3){
        BS.push("i")
    }else if (b[i] == 4){
        BS.push("o")
    }else if (b[i] == 5){
        BS.push("u")
    } else {
        BS.push(b[i])
    }
    
    }
   
   return BS.join('')

}
decode('h3 th2r2!')

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
