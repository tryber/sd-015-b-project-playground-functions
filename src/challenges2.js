// Desafio 10
function techList(arr, str) {
  let resp;
  if (arr.length === 0) {
    resp = 'Vazio!';
  } else {
    let aux = arr.sort();
    resp = [];
    for (let i of aux) {
      resp.push({
        tech: i,
        name: str,
      });
    }
  }
  return resp;
}

// let arr = ["React", "Jest", "HTML", "CSS", "JavaScript"]; // teste 1
// let name = 'André'; // teste 1
// console.log(techList(arr, name)); // teste 1
// console.log(techList([], 'André')); // teste 2

// Desafio 11
function generatePhoneNumber(arr) {
  let number = '';
  let conf = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  if (arr.length === 11) {
    number += '(' + arr[0] + arr[1] + ') ';
    number += arr.slice(2, 7).join('') + '-';
    number += arr.slice(7, 11).join('');
    for (let i of arr) {
      conf[i] += 1;
      if (i < 0 || i > 9 || conf[i] >= 3) {
        number = 'não é possível gerar um número de telefone com esses valores';
      }
    }
  } else {
    number += 'Array com tamanho incorreto.';
  }
  return number;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 9])); // teste 1
console.log(generatePhoneNumber([1, 2, 3, 4, 5, -1, 7, 8, 9, 0, 1])); // teste 2
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 10, 9, 0, 1])); // teste 3
console.log(generatePhoneNumber([1, 2, 2, 2, 5, 6, 7, 8, 9, 0, 1])); // teste 4
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])); // teste 5

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let resp = true;
  // condição lineA
  let aux1 = (lineA < lineB + lineC);
  let aux2 = (lineA > Math.abs(lineB - lineC));
  let aux3 = (lineA > 0);
  resp = resp && aux1 && aux2 && aux3;
  return resp;
}

// console.log(triangleCheck(1, 2, 5)); // teste 1
// console.log(triangleCheck(5, 20, 12)); // teste 2
// console.log(triangleCheck(5, 13, 12)); // teste 3

// Desafio 13
function hydrate(str) {
  let aqua = 0;
  let aux = str.split(' ');
  for (let i in aux) {
    let number = parseInt(aux[i], 10);
        if (number == aux[i]) {
      aqua += number;
    }
  }
  if (aqua === 1) {
    return aqua + ' copo de água';
  } else if (aqua > 1) {
    return aqua + ' copos de água';
  }
}

// console.log(hydrate("1 cerveja")); // teste 1
// console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho")); // teste 2
// console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho")); // teste 3

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
