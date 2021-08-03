// Desafio 10
function techList(arr, name) {
  // seu código aqui
  let sortedArray = arr.sort();
  let objectTech = {};
  let arrayTech = [];

  if (arr.length > 0) {
    for (let tech of sortedArray) {
      objectTech['name'] = name;
      objectTech['tech'] = tech;
      arrayTech.push(objectTech);
      objectTech = {};
    }
    return arrayTech;
  } else {
    return 'Vazio!';
  }
}

// Desafio 11
function generatePhoneNumber(arr) {
  // seu código aqui
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else {
    for (let index in arr) {
      if (arr[index] < 0) {
        return 'não é possível gerar um número de telefone com esses valores';
      } else if (arr[index] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let somaAB = lineA + lineB;
  let somaAC = lineA + lineC;
  let somaBC = lineB + lineC;

  let subAB = Math.abs(lineA - lineB);
  let subAC = Math.abs(lineA - lineC);
  let subBC = Math.abs(lineB - lineC);

  if (
    lineA > somaBC ||
    lineA < subBC ||
    lineB > somaAC ||
    lineB < subAC ||
    lineC > somaAB ||
    lineC < subAB
  ) {
    return false;
  } else {
    return true;
  }
}

// Desafio 13
function hydrate(str) {
  // seu código aqui
  for (let index in str) {
    for (let nextIndex in str) {
    }
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
