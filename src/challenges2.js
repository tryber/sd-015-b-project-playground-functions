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
function checaRange(array) {
  let check = false;
  for (let item of array) {
    if (item < 0 || item > 9) {
      check = true;
    }
  }
  return (check);
}

function geraRepeticao(array) {
  let objeto = {};
  for (let item of array) {
    if (objeto[`${item}`] >= 1) {
      objeto[`${item}`] += 1;
    } else {
      objeto[`${item}`] = 1;
    }
  }
  return (objeto);
}

function checaRepeticao(objeto) {
  let check = false;
  for (let item in objeto) {
    if (objeto[`${item}`] >= 3) {
      check = true;
      break;
    }
  }
  return (check);
}

function imprimeNumero(array) {
  let numeroFinal = '(';
  let contador = 0;
  for (let item of array) {
    if (contador === 1) {
      numeroFinal += item;
      numeroFinal += ') ';
    } else if (contador === 6) {
      numeroFinal += item;
      numeroFinal += '-';
    } else {
      numeroFinal += item;
    }
    contador += 1;
  }
  return (numeroFinal);
}

function generatePhoneNumber(array) {
  // seu código aqui
  let objetoDoArray = geraRepeticao(array);
  if (array.length !== 11) {
    return ('Array com tamanho incorreto.');
  }
  if (checaRange(array) || checaRepeticao(objetoDoArray)) {
    return ('não é possível gerar um número de telefone com esses valores');
  }
  return (imprimeNumero(array));
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
