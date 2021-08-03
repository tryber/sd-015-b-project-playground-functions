// Considerando isso, implemente na função compareTrue, um código que ao receber dois parâmetros booleanos deve:

// Retornar true se ambos os valores forem verdadeiros;
// Retornar false se um ou ambos os parâmetros forem falsos.
function compareTrue(a, b) {
    if (a === true && b === true) {
        return true;
    }
    else if (a === true && b === false) {
        return false;
    }
    else {
        return false;
    }
}

// Escreva uma função com o nome calcArea que receba um valor de base (chamado base) e outro de altura (chamado height) de um triângulo e retorne o cálculo da sua área.
function calcArea(base, height) {
    return (base * height) / 2;
}
console.log(calcArea(51, 1))