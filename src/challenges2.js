// Desafio 10
function techList(array, name) {
  // seu código aqui
  let novaLista = [];
  array.sort();
  if (array.length === 0) {
    return ('Vazio!');
  } else {
    for (let item of array) {
      let objeto = {};
      objeto.tech = item;
      objeto.name = name;
      novaLista.push(objeto);
    }
    return (novaLista);
  }
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  if (array.length !== 11) {
    return ('Array com tamanho incorreto');
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
    return (((lineA < (lineB + lineC)) && (lineA > (Math.abs(lineB-lineC)))) && ((lineB < (lineA + lineC)) && (lineB > (Math.abs(lineA-lineC)))) && ((lineC < (lineB + lineA)) && (lineC > (Math.abs(lineB-lineA)))));
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let separaVirgula = string.split(' ')
  let numeros = [];
  for (let item of separaVirgula) {
    numeros.push(item.match(/\d+/));
  }
  let soma = 0;
  for (let item of numeros) {
    soma += Number(item);
  }
  if (soma > 1) {
    return (soma + ' copos de água');
  } else {
    return (soma + ' copo de água');
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
