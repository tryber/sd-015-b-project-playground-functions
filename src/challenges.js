// Desafio 1
function compareTrue(par1,par2) {
  if (par1 === true && par2 === true){
    return true
  }
  else{
    return false
  }
}

// Desafio 2
function calcArea(base,height) {
  area = base*height/2
  return area
}

// Desafio 3
function splitSentence(str) {
  separaString =  str.split(" ")
  return separaString
}

// Desafio 4

function concatName(vetor) {
  let resultado = [];
  qun = vetor.length-1;
  for (let index = 0 ; index<=vetor.length-1;index+=1){
    if (index === 0){
      resultado.push(vetor[index])
    }
    else if (index === vetor.length-1 ){
      resultado.push(vetor[index])
    }
  }
  return resultado
}

// Desafio 5
function footballPoints(wins,ties) {
  pontos = wins*3 + ties
  return pontos
}

// Desafio 6
// function highestCount(vetor) {
//   let contagem = {}
//   let maior = -2
//     for (key in vetor) {
//         count = 0
//         for (number of vetor){
//             if(vetor[key] === number){
//                 count+=1
//                 contagem[vetor[key]] = count
//             }
//         }       
//     }
//   return count
// }
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  if (cat1> mouse) {
    distCat1 = cat1-mouse
    if (cat2>mouse) {
      distCat2 = cat2-mouse
      if (distCat1>distCat2) {
        return 'cat2'
      }
      else if (distCat1<distCat2){
        return 'cat1'
      }
      else {
        return 'os gatos trombam e o rato foge'
      }
    }
    else if (cat2<mouse) {
      distCat2 = mouse-cat2
      if (distCat1>distCat2) {
        return 'cat2'
      }
      else if (distCat1<distCat2){
        return 'cat1'
      }
      else {
        return 'os gatos trombam e o rato foge'
      }
    }
  }
  else if (cat1<mouse) {
    distCat1 = mouse-cat1
    if (cat2>mouse) {
      distCat2 = cat2-mouse
      if (distCat1>distCat2) {
        return 'cat2'
      }
      else if (distCat1<distCat2){
        return 'cat1'
      }
      else {
        return 'os gatos trombam e o rato foge'
      }
    }
    else if (cat2<mouse) {
      distCat2 = mouse-cat2
      if (distCat1>distCat2) {
        return 'cat2'
      }
      else if (distCat1<distCat2){
        return 'cat1'
      }
      else {
        return 'os gatos trombam e o rato foge'
      }
    }
  }
}
console.log(catAndMouse(0,3,3));

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
