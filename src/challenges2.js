// Desafio 10
function techList(arrayDeNomes, name) {
  let array = [];
  let arrayNomes = arrayDeNomes.sort();
  if (arrayNomes.length === 0) {
    return 'Vazio!';
  } else {
    for (let index = 0; index < arrayNomes.length; index += 1) {
      array.push(
        (objeto = {
          tech: arrayNomes[index],
          name: name,
        })
      );
    }
  }
  return array;
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return "Array com tamanho incorreto.";
  }

  for (let index = 0; index < array.length; index += 1) {
    let contador = 0;
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        contador += 1;
      }
    }
    if (array[index] < 0 || array[index] > 9 || contador >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }

  let numeroPronto = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
  return numeroPronto;
  // seu código aqui
}

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
