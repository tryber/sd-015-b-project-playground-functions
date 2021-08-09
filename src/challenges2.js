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
  telephone.forEach((element) => {
    number = number.replace('x', element);
  });
  return number;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sideA = Math.abs(lineA < lineB + lineC);
  let sideB = Math.abs(lineB < lineA + lineC);
  let sideC = Math.abs(lineC < lineA + lineB);

  if (sideA && sideB && sideC) {
    return true;
  }
  return false;
}

// Desafio 13
// Li os 2 métodos para converter em inteiro e fiquei na dúvida qual usar. Acabei optando pelo Number.parseInt.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
function hydrate(string) {
  let numberOfString = string.match(/[1-9]/g);
  let water = 0;
  for (let quantity of numberOfString) {
    water += Number.parseInt(quantity);
  }
  if (water === 1) {
    return `${water} copo de água`;
  }
  return `${water} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
