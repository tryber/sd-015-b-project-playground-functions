// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui  
  if (valor1 === true && valor2 === true) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
    return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentenca) {
  // seu código aqui
  return sentenca.split(' ');
}

// Desafio 4
function concatName(arrayStrings) {
  // seu código aqui
  return arrayStrings[(arrayStrings.length) -1] + ", " + arrayStrings[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + (ties * 1);
}

// Desafio 6
let maior = 0;
let contador = 0;
    for (let index of arrayNumeros) {
        if (index > maior){
            maior = index;
        }
    }  
     for (let index2 of arrayNumeros){
        if (maior === index2) {
            contador += 1;
        }
    }
    console.log(maior)
    console.log(contador)
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaCat1 = cat1 - mouse;
  let distanciaCat2 = cat2 - mouse;
  if (distanciaCat1 < 0) {
    distanciaCat1 *= (-1);
  }
  if (distanciaCat2 < 0) {
    distanciaCat2 *= (-1);
  }
  if (distanciaCat1 > distanciaCat2) {
    return "cat2";
  }
  else if (distanciaCat1 < distanciaCat2) {
    return "cat1";
  }
  else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  // seu código aqui
  let contador = [];
  for (let posicao in arrayNumeros){
    if (arrayNumeros[posicao] % 3 === 0 && arrayNumeros[posicao] % 5 === 0) {
      contador.push("fizzBuzz");
    }
    else if (arrayNumeros[posicao] % 3 === 0) {
      contador.push("fizz");
    }
    else if (arrayNumeros[posicao] % 5 === 0) {
      contador.push("buzz");
    }
    else {
      contador.push("bug!");
    }
  }
  return contador;
}

// Desafio 9
function encode(stringParametro) {
  // seu código aqui
let fraseSeparada = stringParametro.split('');
let fraseComEncode = [];
for(let contador = 0; contador < fraseSeparada.length; contador++) {
  if (fraseSeparada[contador] === "a"){
    fraseComEncode.push(1);
  }
  else if (fraseSeparada[contador] === "e"){
    fraseComEncode.push(2);
  }
  else if (fraseSeparada[contador] === "i"){
    fraseComEncode.push(3);
  }
  else if (fraseSeparada[contador] === "o"){
    fraseComEncode.push(4);
  }
  else if (fraseSeparada[contador] === "u"){
    fraseComEncode.push(5);
  }
  else {
    fraseComEncode.push(fraseSeparada[contador]);
  }
}
let fraseComNumero = fraseComEncode.join('');
return fraseComNumero;
}
function decode(stringParametro) {
  // seu código aqui
  let fraseSeparada = stringParametro.split('');
  let fraseComEncode = [];
  for(let contador = 0; contador < fraseSeparada.length; contador++) {
    if (fraseSeparada[contador] === "1"){
      fraseComEncode.push("a");
    }
    else if (fraseSeparada[contador] === "2"){
      fraseComEncode.push("e");
    }
    else if (fraseSeparada[contador] === "3"){
      fraseComEncode.push("i");
    }
    else if (fraseSeparada[contador] === "4"){
      fraseComEncode.push("o");
    }
    else if (fraseSeparada[contador] === "5"){
      fraseComEncode.push("u");
    }
    else {
      fraseComEncode.push(fraseSeparada[contador]);
    }
  }
  let fraseSemNumero = fraseComEncode.join('');
  return fraseSemNumero;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
