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

// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Deivid'));

// Desafio 11

function arrayMaiorQ11(numRandom) {
  if (numRandom.length !== 11) {
    let result = 'Array com tamanho incorreto.';
    return result;
  }
}
function numInvalid(numRandom) {
  if (numRandom < 0 || numRandom > 9) {
    let result = 'não é possível gerar um número de telefone com esses valores';
    return result;
  }
}
function generatePhoneNumber(numRandom) {
  let phoneNumber = [];
  for (let index = 0; index < numRandom.length; index += 1) {
    arrayMaiorQ11(numRandom[index]);
    numInvalid(numRandom[index]);
    // eslint-disable-next-line max-len
    phoneNumber = `(${numRandom[0]}${numRandom[1]}) ${numRandom[2]}${numRandom[3]}${numRandom[4]}${numRandom[5]}${numRandom[6]}-${numRandom[7]}${numRandom[8]}${numRandom[9]}${numRandom[10]}`;
  }
  return phoneNumber;
}
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 2]));
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
