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
    if (a.tech < b.tech) {
      return -1;
    } else {
      return true;
    }
  });
  return arrayDeObj;
}

// Desafio 11
function isSubZeroOverSize(arr) {
  let result = false;
  
  for (let i in arr) {
    if (arr[i] < 0 || arr[i] > 9) {
      result = true;
    }
  }
  return result;
}

function isLengthNotOk(arr) {
  let result = false;

  if (arr.length !== 11) {
    result = true;
  }
  return result;
}

// https://www.guj.com.br/t/quantas-vezes-o-numero-se-repete-em-um-vetor/69313/5
function isRepetitive(arr) {
  let result = false;
  let repeticao = 0;
  
  for(let i = 0; i<arr.length; i++) {
    repeticao = 0;
    for(let j = 0; j<arr.length; j++) {
		  if (arr[i] == arr[j]) {
        repeticao++;
      }
		}
    if (repeticao >= 3) {
      result = true;
    }
  }
  return result;
}

function generatePhoneNumber(arr) {
  let result = '';
  let str = '';

  if (isLengthNotOk(arr)) {
    result = "Array com tamanho incorreto."
  } else if (isSubZeroOverSize(arr) || isRepetitive(arr)) {
     result = "não é possível gerar um número de telefone com esses valores";
   } else {
    str = arr.join('');
    result = '(' + str[0] + str[1] + ') ' + str[2] + str[3] + str[4] + str[5] + str[6] + '-' + str[7] + str[8] + str[9] + str[10];
  }  
  return result;
}

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
  return lado1MenorQSomaDOutros(a, b, c) && lado1MaiorQDiferencaDOutros(a, b, c);
}

// Desafio 13
function stingToInt(str) {
  for (i = 0; i<str.length; i++) {
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

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
