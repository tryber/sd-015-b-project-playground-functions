// Desafio 10
function techList(tech, name) {
  if (tech.length > 0) {
    let techAndName = [];
    tech.sort();
    for (let index = 0; index < tech.length; index += 1) {
      let store = {};
      store.name = name;
      store.tech = tech[index];
      techAndName.push(store);
    }
    return techAndName;
  }
  return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(telephone) {
  if (telephone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < telephone.length; index += 1) {
    let repeatNumber = 0;
    for (let index2 = 0; index2 < telephone.length; index2 += 1) {
      if (telephone[index] === telephone[index2]) {
        repeatNumber += 1;
      }
    }
    if (telephone[index] < 0 || telephone[index] > 9 || repeatNumber >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let number = '(xx) xxxxx-xxxx';
  telephone.forEach(element => {
    number = number.replace('x', element);
  });
  return number;
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
