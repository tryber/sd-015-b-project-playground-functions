// Desafio 10
function techList(array, name) {
  // seu código aqui
  let novaLista = [];
  array.sort();
  if (array.length === 0) {
    return ('Vazio!');
  }
  for (let item of array) {
    let objeto = {
      tech: '',
      name: '',
    };
    objeto.tech = item;
    objeto.name = name;
    novaLista.push(objeto);
  }
  return (novaLista);
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function checa(ladoA, ladoB, ladoC) {
  let checaSeMenor = ladoA < (ladoB + ladoC);
  let checaSeMaior = ladoA > Math.abs(ladoB - ladoC);
  return (checaSeMenor && checaSeMaior);
}

function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  return (checa(lineA, lineB, lineC) && checa(lineB, lineA, lineC) && checa(lineC, lineB, lineA));
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let separaVirgula = string.split(' ');
  let numeros = [];
  for (let item of separaVirgula) {
    numeros.push(item.match(/\d+/));
  }
  let soma = 0;
  for (let item of numeros) {
    soma += Number(item);
  }
  if (soma > 1) {
    return (`${soma} copos de água`);
  }
  return (`${soma} copo de água`);
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
