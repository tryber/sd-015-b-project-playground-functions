// Considerando isso, implemente na função compareTrue, um código que ao receber dois parâmetros booleanos deve:

// Retornar true se ambos os valores forem verdadeiros;
// Retornar false se um ou ambos os parâmetros forem falsos.
function compareTrue(a, b){
    if(a == true && b == true){
        return true
    }
    else{
        return false
    }
}
console.log(compareTrue(false, true));