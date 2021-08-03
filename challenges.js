function compareTrue(param1, param2) {
    if (param1 == true && param2 == true) {
        return true;
    } else {
        return false;
    }
}

function calcArea(base, height) {
    return base * height / 2;
}

function splitSentence(string) {
    return string.split(" ");
}

console.log(splitSentence("foguete"));