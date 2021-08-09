function compareTrue (boolean1, boolean2){
    if(boolean1 === boolean2 && boolean1 !== false){
        return console.log(true)
    }else{
        return console.log(false)
    }
}

let boolean1 = false
let boolean2 = false
console.log(compareTrue(boolean1, boolean2));