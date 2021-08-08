// Desafio 10
// funcao .sort retirada da documentacao: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function techList(array, name) {
  let listaSaida = [];
  if (array.length === 0) {
    return 'Vazio!';
  }

  for (let tech in array) {
    array.sort();
    let obj = {
      tech: 'NomeTech',
      name,
    };
    obj.tech = array[tech];
    listaSaida.push(obj);
  }

  return listaSaida;
  // return listaSaida;
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(x) {
  // seu código aqui
  // verifica se o array tem tamanho diferente de 11;
  if (x.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  // verifica se algum numero e maior que 9, menor que 0 ou repete mais que 3 vezes;
  for (let i = 0; i < x.length; i += 1) {
    let countRepeat = 0;
    for (let r = 0; r < x.length; r += 1) {
      if (x[i] === x[r]) {
      // let countRepeat = 0;
        countRepeat += 1;
      } else if (x[i] < 0 || x[i] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    if (countRepeat >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let number = `(${x[0]}${x[1]}) ${x[2]}${x[3]}${x[4]}${x[5]}${x[6]}-${x[7]}${x[8]}${x[9]}${x[10]}`;
  return number;
}

// Desafio 12
function triangleCheck(lA, lB, lC) {
  if (lA < lB + lC && lB < lA + lC && lC < lA + lB) {
    return true;
  }
  if (lA > Math.abs(lB - lC) && lB > Math.abs(lA - lC) && lC > Math.abs(lA - lB)) {
    return true;
  }

  return false;

  // seu código aqui
}

// Desafio 13
// regularExpression e string.match retirada de explicacoes deste video: https://www.youtube.com/watch?v=pfkkdzeyx6U&ab_channel=AllThingsJavaScript%2CLLC
function hydrate(string) {
  let regularExpression = /\d+/g;
  let numbers = string.match(regularExpression);
  let result = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    result += parseInt(numbers[i], 10);
  }
  if (result > 1) {
    return `${result} copos de água`;
  }

  return `${result} copo de água`;

  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
