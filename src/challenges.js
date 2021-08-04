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
 

function catAndMouse(mouse, cat1, cat2){
    let DistanceCat1 = mouse - cat1
    let DistanceCat2 = mouse - cat2
    
    if (DistanceCat1 <  DistanceCat2 && cat1 > 0 && cat2 > 0){
        return "cat1"
    } else if (DistanceCat1 > DistanceCat2 && cat1 > 0 && cat2 > 0){ 
        return "cat2"
    } 
    let GatoNegativo = cat1 - mouse;
   if (GatoNegativo < 0){
       GatoNegativo = GatoNegativo * (-1)
   } 
   let GatoNegativo2 = cat2 - mouse;
    if (GatoNegativo2 < 0) {
        GatoNegativo2 = GatoNegativo2 * (-1)
    } else if (GatoNegativo > GatoNegativo2){
        return 'cat2'
    } else if (GatoNegativo < GatoNegativo2){
        return'cat1'
    }
   
   else { 
        return "os gatos trombam e o rato foge"
}
}

catAndMouse(-2, -4, -5)
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
