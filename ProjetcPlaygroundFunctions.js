1

function compareTrue(a ,b){

    if (a && b === true){
     console.log(true)
    } else {
        console.log(false)
    }

}
compareTrue(false, false)

2 
function calcArea(base, height){
    console.log(base * height / 2)
}

calcArea(51, 1)

3 
function splitSentence(a){
let x;
x = a.split(' ')

    console.log(x)
}

splitSentence('go Trybe')

4 

function concatName(a){
   let xd = a;

   let xe = ''
   
   xe = xd[xd.length - 1] + ',' + ' ' + xd[0]
    
    console.log(xe)
 
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])

5 
function footballPoints(wins, ties){
    let pointTotal = wins * 3 + ties
    console.log(pointTotal)
}
footballPoints(0, 0)

6

function highestCount(a){

let quantidade = 0;
    for (let i = 0; i < a.length; i++){
 if (Math.max(...a) === a[i]) {
    quantidade++
}   
}

console.log(quantidade)

}

highestCount([00, 00, 00, 0])

7 

function catAndMouse(mouse, cat1, cat2){
    let DistanceCat1 = mouse - cat1
    let DistanceCat2 = mouse - cat2
    if (DistanceCat1 < DistanceCat2){
        console.log("cat1")
    } else if (DistanceCat1 > DistanceCat2){ 
        console.log("cat2")
    } else { 
        console.log("os gatos trombam e o rato foge")
}
}
catAndMouse(8, 2, 2);

8 
function fizzBuzz(a){
    let newA = []


    for (let i = 0; i < a.length; i++){
        if (a[i] % 3 === 0){
            newA.push(a[i])
        }
    }
    console.log(newA)
}
fizzBuzz()