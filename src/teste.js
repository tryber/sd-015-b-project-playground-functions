function isRepeating(a) {
  let repeatCheck = true;
  let conf = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i of a) {
    conf[i] += 1;
    if (i < 0 || i > 9 || conf[i] >= 3) {
      repeatCheck = false;
    }
  }
  return repeatCheck;
}

function isValid(a) {
  for (let key of a) {
    if (key > 9 || key < 0) {
      return false;
    } return true;
  }
}

function generatePhoneNumber(a) {  
  let test1 = isRepeating(a);
  let test2 = isValid(a);
  if (a.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (test1 === false || test2 === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let telefone = `(${a[0]}${a[1]}) ${a[2]}${a[3]}${a[4]}${a[5]}${a[6]}-${a[7]}${a[8]}${a[9]}${a[10]}`;
  return telefone;
}
// let teste = [0, 1, 4, 4, 4, 5, 6, 7, 8, 9, 0];
let teste = [1, 7, 2, 4, 5, 6, 7, 8, 9, 0, 1];
console.log(generatePhoneNumber(teste));