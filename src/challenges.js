// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  return ((base * height) / 2)
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ")
}

// Desafio 4
function concatName(vetorPalavras) {
  return vetorPalavras[vetorPalavras.length -1] + ", " + vetorPalavras[0]
}

// Desafio 5
function footballPoints(wins,ties) {
  return (wins * 3) + ties
}

// Desafio 6
function highestCount(vetorMaiorRepeticao) {
  let maior = Math.max.apply(null,vetorMaiorRepeticao);
  let contadorMaior = 0;
  for (index = 0; index < vetorMaiorRepeticao.length; index +=1){
    if (maior === vetorMaiorRepeticao[index]) {
      contadorMaior += 1
    }
  }return contadorMaior
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);
  if (distanciaCat1 < distanciaCat2){
    return "cat1"
  }else if(distanciaCat2 < distanciaCat1){
    return "cat2"
  }else{
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(palavras) {
  let vetorPalavras = [];
  for (let index = 0; index < palavras.length; index++) {
    if (palavras[index] % 3 === 0 && palavras[index] % 5 === 0){
      vetorPalavras.push("fizzBuzz")   
    }else if (palavras[index] % 3 === 0) {
      vetorPalavras.push("fizz");
    }else if (palavras[index] % 5 === 0){
      vetorPalavras.push("buzz")
    }else{
      vetorPalavras.push("bug!")
    }
  }return vetorPalavras
}

// Desafio 9
function encode(frase) {
  let fraseCodificada = [];
  for (let index = 0; index < frase.length; index++) {
    switch (frase[index]) {
        case "a":
            fraseCodificada[index] = "1";
            break;

        case "e":
            fraseCodificada[index] = "2";
            break;
        
        case "i":
            fraseCodificada[index] = "3";
            break;

        case "o":
            fraseCodificada[index] = "4";
            break;

        case "u":
            fraseCodificada[index] = "5";
            break;

        default:
          fraseCodificada[index] = frase [index]
            break;
    }
  }return fraseCodificada.join("")
}
function decode(frase) {
  let fraseCodificada = [];
  for (let index = 0; index < frase.length; index +=1) {
      switch (frase[index]) {
          case "1":
              fraseCodificada[index] = "a";
              break;
  
          case "2":
              fraseCodificada[index] = "e";
              break;
          
          case "3":
              fraseCodificada[index] = "i";
              break;
  
          case "4":
              fraseCodificada[index] = "o";
              break;
  
          case "5":
              fraseCodificada[index] = "u";
              break;
  
          default:
            fraseCodificada[index] = frase [index]
              break;
      }
    }return fraseCodificada.join("")
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