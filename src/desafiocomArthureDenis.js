let arr = [7, 7, 8, 9, 5, 4, 4, 4, 8, 7];

function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < array.length; index++) {
    if (array[index] < 0 || array[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  for (let index = 0; index < array.length; index++) {
    let control = 0;

    for (let indice = 0; indice < array.length; index++) {
      if (array[index] === array[indice]) {
        control++;
      }
    }

    if (control >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

console.log(generatePhoneNumber(arr));
