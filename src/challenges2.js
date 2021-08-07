// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  array = array.sort();
  let resultado = [];
  for (let key of array) {
    let newObject = {};
    newObject.tech = key;
    newObject.name = name;
    resultado.push(newObject);
  }
  return resultado;
}

// Desafio 11
function repeatCount (a) {
  for (let key of a) {
    let counter = 0;
    for (let ind of a) {
      if (ind === key) {
        counter += 1;
        if (counter >= 3) {
          return true;
        }
      }
    }
  }
  for (let key of a) {
    if (key > 9 || key < 0) {
      return true;
    }
  }
}

function generatePhoneNumber(a) {  
  let test = repeatCount(a);
  if (a.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  if (test === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let telefone = '('+a[0]+a[1]+') '+a[2]+a[3]+a[4]+a[5]+a[6]+'-'+a[7]+a[8]+a[9]+a[10];
  return telefone;
}

// Desafio 12
function triangleCheckBigger (a, b, c) {
  if (a < (b + c) && b < (a + c) && c < (a + b)) {
    return true;
  } return false;
}

function triangleCheckSmaller (a, b, c) {
  if (a > Math.abs(b - c) && b > Math.abs(a - c) && c > Math.abs(a - b)) {
    return true;
  } return false;
}

function triangleCheck(lineA, lineB, lineC) {
  let bigger = triangleCheckBigger(lineA, lineB, lineC);
  let smaller = triangleCheckSmaller(lineA, lineB, lineC);
  if (bigger === true && smaller === true) {
    return true;
  } return false;
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
