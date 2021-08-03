// 1 - Crie uma função usando o operador &&



//2 - Crie uma função que calcule a área de um triângulo

function calcArea(base, height) {
    console.log((base * height) / 2);
};

calcArea(10, 50);
calcArea(5, 2);
calcArea(51, 1);

//3 - Crie uma função que divida a frase

function splitSentence(text) {
    let  concat = text.split(' ');
    console.log(concat);
};

splitSentence('go trybe');
splitSentence('vamo que vamo');
splitSentence('foguete');