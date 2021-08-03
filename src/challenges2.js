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
  let ver = true;
  let conf = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  if (arr.length === 11) {
    for (let i of arr) {
      conf[i] += 1;
      if ( i < 0 || i > 9) {
        ver = false;
      } 
    }
    for (let i of conf) {
      if ( i >= 3 ) { ver = false; }
    }
    let number = '(' + arr[0] + arr[1] + ')' + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + '-' + arr[7] + arr[8] + arr[9]+ arr[10];
    if (ver === false) {
      return 'não é possível gerar um número de telefone com esses valores';
    } else {
      return number;
    }
  } else {
    return 'Array com tamanho incorreto.';
  }
}

// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 9])); // teste 1
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, -1, 7, 8, 9, 0, 1])); // teste 2
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 10, 9, 0, 1])); // teste 3
// console.log(generatePhoneNumber([1, 2, 2, 2, 5, 6, 7, 8, 9, 0, 1])); // teste 4
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])); // teste 5

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let resp = true;
  // condição lineA
  let aux1 = (lineA < lineB + lineC);
  let aux2 = (lineA > Math.abs(lineB - lineC));
  let aux3 = (lineA > 0);
  resp = resp && aux1 && aux2 && aux3;
  // condição lineB
  aux1 = (lineB < lineA + lineC);
  aux2 = (lineB > Math.abs(lineA - lineC));
  aux3 = (lineB > 0);
  resp = resp && aux1 && aux2 && aux3;
  // condição lineC
  aux1 = (lineC < lineA + lineB);
  aux2 = (lineC > Math.abs(lineA - lineB));
  aux3 = (lineC > 0);
  resp = resp && aux1 && aux2 && aux3;
  // Verificação
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
  return aqua + ' copos de água';
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
