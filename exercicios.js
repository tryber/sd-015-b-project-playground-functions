let value = true;
function compareTrue(n1,n2){
if (n1 === n2){
    return value;
} else {
    value = false;
    return value;
}
}
console.log(compareTrue(3,3))