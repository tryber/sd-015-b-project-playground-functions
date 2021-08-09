// Desafio 10
function techList(techName, name) {
  // seu código aqui
  let bankOfSkill = [];
  let changeSort = techName.sort();

  if (techName.length === 0) return 'Vazio!';

  for (let index = 0; index < changeSort.length; index += 1) {
    bankOfSkill.push({ tech: changeSort[index], name });
  }
  return bankOfSkill;
}

// Desafio 11
function rangeFone(getRange) {
  if (getRange.length !== 11) return 'Array com tamanho incorreto.';
}
function incorrectFone(params) {
  let msgErro = 'não é possível gerar um número de telefone com esses valores';
  for (let index = 0; index < params.length; index += 1) {
    if (params[index] < 0 || params[index] > 9) return msgErro;
  }
}

function countFone(params) {
  let msgErro = 'não é possível gerar um número de telefone com esses valores';
  let numberFone2 = params;
  let count;
  for (let index = 0; index < params.length; index += 1) {
    count = 0;
    for (let main = 0; main < numberFone2.length; main += 1) {
      if (params[index] === numberFone2[main]) count += 1;
    }
    if (count >= 3) return msgErro;
  }
}
function verifica(params) {
  return rangeFone(params) || incorrectFone(params) || countFone(params);
}
function foneNumbers(numberFone) {
  let ddd = `(${numberFone[0]}${numberFone[1]})`;
  let fone01 = `${numberFone[2]}${numberFone[3]}${numberFone[4]}${numberFone[5]}${numberFone[6]}`;
  let fone02 = `${numberFone[7]}${numberFone[8]}${numberFone[9]}${numberFone[10]}`;
  let fone = `${ddd} ${fone01}-${fone02}`;
  return fone;
}
function generatePhoneNumber(numberFone) {
  let phoneDDD = verifica(numberFone);
  if (phoneDDD) return phoneDDD;
  return foneNumbers(numberFone);
}
console.log(generatePhoneNumber([1, 2, 2, 4, 5, 5, 2, 8, 9, 0, 1]));
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return lineA < (lineC + lineB) && lineB < (lineA + lineC) && lineC < (lineA + lineB);
}

// Desafio 13
function sumnumber(numbersSum) {
  let sumArray = 0;
  for (let index = 0; index < numbersSum.length; index += 1) {
    let num = parseInt(numbersSum[index], 10);
    sumArray += num;
  }
  return sumArray;
}
function hydrate(getDrinck) {
  // recebe a strig
  let regex = /\d+/g;
  let arrayNumber = sumnumber(getDrinck.match(regex));
  if (arrayNumber === 1) return `${arrayNumber} copo de água`;
  return `${arrayNumber} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
