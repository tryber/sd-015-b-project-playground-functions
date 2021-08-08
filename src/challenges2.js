// Desafio 10
function arrayToObjectArray(arr, name) {
  let arrayDeObj = [];

  for (const value of arr) {
    let obj = {};
    obj.tech = value;
    obj.name = name;        
    arrayDeObj.push(obj);
  }
  return arrayDeObj;
}

function techList(arr, name) { 
  let arrayDeObj = arrayToObjectArray(arr, name);

  if (arr.length > 0) {
    arrayDeObj;
  } else {
    return 'Vazio!';
  }
   // https://www.horadecodar.com.br/2021/01/11/como-ordenar-um-array-de-objetos-em-javascript/
  arrayDeObj.sort(function(a, b,) {
    if(a.tech < b.tech) {
      return -1;
    } else {
      return true;
    }
  });
  return arrayDeObj;
}

// Desafio 11
 function generatePhoneNumber() {
//   arr.split('-', 3)//.join('');
//   return arr;
}
//console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))
// Desafio 12
function lado1MenorQSomaDOutros(a, b, c) {
  let verificaSoma = (a < (b + c)) && (b < (a + c)) && (c < (a + b));
  return verificaSoma;
}

function lado1MaiorQDiferencaDOutros(a, b, c) {
  let verificaDiferenca = (a > Math.abs(b - c)) && (b > Math.abs(a - c)) && (c > Math.abs(a - b));
  return verificaDiferenca;
}
function triangleCheck(a, b, c) {
  return lado1MenorQSomaDOutros(a, b, c) && lado1MaiorQDiferencaDOutros(a, b, c)
}

// Desafio 13
function stingToInt(str) {
  for (i=0; i<str.length; i++){ 
    str[i] = parseInt(str[i]); 
  }
}

function sumArray(str) {  
  let soma = 0;

  for (let valor of str) {
    soma += valor;
  }
  return soma;
}

function intToStr(int) {
  let quantidade = int.toString();
  let copoAgua = '';
  if (quantidade === '1') {
    copoAgua = ' copo de água';
  } else {
    copoAgua = ' copos de água';
  }
  return quantidade + copoAgua;
}

function hydrate(str) {
  let regex = /\d+/g;
  let copos = str.match(regex);

  stingToInt(copos);
  
  return intToStr(sumArray(copos));
}
console.log(hydrate("1 cerveja, 2 vinho"))
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
