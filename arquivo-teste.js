// 1 - Crie uma função usando o operador &&

function compareTrue(a,b){ 
    if (a === 'false' && b === 'true') {
        console.log('true');
    } else{
        console.log('false');
    }
}

compareTrue('false');
compareTrue(1, 11);


//2 - Crie uma função que calcule a área de um triângulo

function calcArea(base, height) {
    let soma = ((base * height) / 2);
    return soma;
};

calcArea(10, 50);
calcArea(5, 2);
calcArea(51, 1);

//3 - Crie uma função que divida a frase

function splitSentence(text) {
    let  separa = text.split(' ');
    return separa;
};

splitSentence('go trybe');
splitSentence('vamo que vamo');
splitSentence('foguete');

//4 - Crie uma função que use concatenação de strings

let list = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
let first = 0;
let last = 0;

for (let index = 0; index < list.length; index += 1){
    if (list.length > 0){
        last = list.length[index];
    } else {
        first = list.length[0];
    }
};

console.log(last + ', ' + first);

