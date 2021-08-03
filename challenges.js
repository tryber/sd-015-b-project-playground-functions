function compareTrue(param1, param2) {
    return param1 && param2;
}

function calcArea(base, height) {
    return base * height / 2;
}

function splitSentence(string) {
    return string.split(" ");
}

function concatName(array) {
    return array[array.length - 1] + ", " + array[0];
}

console.log(compareTrue(false, false));