1

function compareTrue(a ,b){

    if (a && b === true){
     return true
    } else {
        return false
    }

}
compareTrue(false, false)

2 
function calcArea(base, height){
    return base * height / 2
}

calcArea(51, 1)

3 
function splitSentence(a){
let x;
x = a.split(' ')

    return x
}

splitSentence('go Trybe')

4 

function concatName(a){
   let xd = a;

   let xe = ''
   
   xe = xd[xd.length - 1] + ',' + ' ' + xd[0]
    
    return xe
 
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])

5 
function footballPoints(wins, ties){
    let pointTotal = wins * 3 + ties
    return pointTotal
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

return quantidade

}

highestCount([00, 00, 00, 0])

7 

function catAndMouse(mouse, cat1, cat2){
    let DistanceCat1 = mouse - cat1
    let DistanceCat2 = mouse - cat2
    if (DistanceCat1 < DistanceCat2){
        return "cat1"
    } else if (DistanceCat1 > DistanceCat2){ 
        return "cat2"
    } else { 
        return "os gatos trombam e o rato foge"
}
}
catAndMouse(8, 2, 2);

8 
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
fizzBuzz([7, 9])

9 

function encode(a){
    let AS = [];
    for (let i = 0; i <= a.length; i ++){
        if (a[i] === "a") {
            AS.push(1)
        } else if (a[i] === "e"){
            AS.push(2)
        } else if (a[i] === "i"){
            AS.push(3)
        } else if (a[i] === "o"){
            AS.push(4)
        } else if (a[i] === "u"){
            AS.push(5)
    }
   console.log(AS)
}
}

encode("aeixdxdouxd")