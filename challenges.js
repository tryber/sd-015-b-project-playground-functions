function compareTrue(param1, param2){
    if (param1 && param2 % 2 === 0){
        return true
    } else {
        return false
    }
}

console.log(compareTrue(3, 3))

function calcArea (base, height){
    return (base * height) / 2
}

console.log(calcArea(51, 1))