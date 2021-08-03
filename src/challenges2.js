// Desafio 10
function techList(arr, name) {
  if (arr.length === 0) {
    return 'Vazio!'
  } else {
    let aux = arr.sort();
    let resp = [];
    for (let i of aux) {
      resp.push( {tech: i, name: name} );
  }
  return resp;  
  }
}

// let arr = ["React", "Jest", "HTML", "CSS", "JavaScript"]; // teste 1
// let name = 'André'; // teste 1
// console.log(techList(arr, name)); // teste 1
// console.log(techList([], 'André')); // teste 2

// Desafio 11
function generatePhoneNumber(arr) {
  let aux = true;
  let number = '';
  let conf = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < arr.length; i++) {
    conf[arr[i]] += 1;
    if (arr[i] < 0 || arr[i] > 9) {
      aux = false;
    } else {
      if (i === 0) {
        number += '(' + arr[i];
      } else if (i == 1) {
        number += arr[i] + ')';
      } else if (i <= 6) {
        number += arr[i];
      } else if (i === 7) {
        number += '-' + arr[i];
      } else {
        number += arr[i];
      }
    }
  }
  for (let i of conf) {
    if (i >= 3) {
      aux = false;
    }
  }
  if (arr.length != 11) {
    return 'Array com tamanho incorreto.';
  } else if (aux === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  } else {
    return number;
  }
}

// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 9])); // teste 1
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, -1, 7, 8, 9, 0, 1])); // teste 2
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 10, 9, 0, 1])); // teste 3
// console.log(generatePhoneNumber([1, 2, 2, 2, 5, 6, 7, 8, 9, 0, 1])); // teste 4
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])); // teste 5


// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
