// Desafio 10
function techList(namesTech, name) {
  if (namesTech.length === 0) {
    return 'Vazio!';
  }
  let namesTechArray = [];
  let listOrden = namesTech.sort();
  for (let index = 0; index < namesTech.length; index += 1) {
    namesTechArray.push({ tech: listOrden[index], name });
  }
  return namesTechArray;
}

// Desafio 11

// function arrayMaiorQ11(numRandom) {
//   if (numRandom.length !== 11) {
//     return 'Array com tamanho incorreto.';
//   }
// }
// function numInvalid(numRandom) {
//   if (numRandom < 0 || numRandom > 9) {
//     return 'não é possível gerar um número de telefone com esses valores';
//   }
// }
function generatePhoneNumber(numRandom) {
  let phoneNumber = [];
  if (numRandom.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let correntNumber of numRandom) {
    if (correntNumber < 0 || correntNumber > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for(index = 0; index < numRandom.length; index += 1) {
    let count = 0;
    for (let num of numRandom) {
      if (num === numRandom[index]) {
        count += 1;
      }
      if (count >= 3) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
  }
  for (let index = 0; index < numRandom.length; index += 1) {
  // eslint-disable-next-line max-len
    phoneNumber = `(${numRandom[0]}${numRandom[1]}) ${numRandom[2]}${numRandom[3]}${numRandom[4]}${numRandom[5]}${numRandom[6]}-${numRandom[7]}${numRandom[8]}${numRandom[9]}${numRandom[10]}`;
  }
  return phoneNumber;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 2, 8, 8, 8, 3, 2]));

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
