// Desafio 10
function techList(arrayTech, name) {
  let arr = arrayTech.sort();
  let arrayTechList = [];

  if (arr.length === 0) {
    return 'Vazio!';
  } for (let index = 0; index < arr.length; index += 1) {
    arrayTechList.push({
      tech: arr[index],
      name,
    });
  }
  return arrayTechList;
}

// Desafio 11
function generatePhoneNumber(a) {
  if (a.length !== 11) {
    return ('Array com tamanho incorreto.');
  }
  for (let index = 0; index <= a.length; index += 1) {
    let vezesQueRepete = 0;
    for (let i = 0; i <= a.length; i += 1) {
      if (a[index] === a[i]) {
        vezesQueRepete += 1;
      } else if (a[i] < 0 || a[i] > 9) {
        return ('não é possível gerar um número de telefone com esses valores');
      }
    }
    if (vezesQueRepete >= 3) {
      return ('não é possível gerar um número de telefone com esses valores');
    }
  }
  a = `(${a[0]}${a[1]}) ${a[2]}${a[3]}${a[4]}${a[5]}${a[6]}-${a[7]}${a[8]}${a[9]}${a[10]}`;
  return (a);
}
(generatePhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1]));

// Desafio 12

function triangleCheck(lineA, lineB, lineC) {
  if ((lineB + lineC > lineA) && lineA > Math.abs(lineB - lineC)) {
    return (true);
  }
  return (false);
}

// Desafio 13
function hydrate(str) {
  /** Source: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994 (Foi usada uma expressao regular para encontrar algo dentro do texto, que no caso foi caractere de dígito) */
  let regex = /\d+/g;
  let matches = str.match(regex);
  let alcoholAmount = 0;
  let waterSingular = 'copo de água';
  let waterPlural = 'copos de água';

  for (let index = 0; index < matches.length; index += 1) {
    alcoholAmount += parseInt(matches[index], 10);
  }
  if (alcoholAmount > 1) {
    return (`${alcoholAmount} ${waterPlural}`);
  }
  return (`${alcoholAmount} ${waterSingular}`);
}
hydrate('1 cerveja');

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
