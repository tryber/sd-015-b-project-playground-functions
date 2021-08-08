/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let techAux = tech.sort();
  let recebe = [];

  if (techAux.length === 0) {
    return 'Vazio!';
  }

  for (let i = 0; i < techAux.length; i += 1) {
    let listObject = {
      tech: techAux[i],
      name: name
    };
    recebe.push(listObject);
  }
  return recebe;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  // seu código aqui

  let aux = 0;
  let cont = -1;
  let numeroTelefone = '(';

  if (numbers.length !== 11) { // verificando se o array é maior que 11
    return 'Array com tamanho incorreto.';
  }

  for (let key in numbers) {

    if (numbers[key] < 0 || numbers[key] > 9) {// verificando se tem numbers menor que zero OU maior que 9
      return 'não é possível gerar um número de telefone com esses valores';
    }
    aux = 0;

    for (let index in numbers) {// verificando se tem mais que 2 numbers repitidos
      if (numbers[key] === numbers[index]) {
        aux += 1;
        if (aux > 2) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }

    cont += 1; // condição para colocar () e - .
    if (cont === 2) {
      numeroTelefone += ') ';
    }
    if (cont === 7) {
      numeroTelefone += '-';
    }
    numeroTelefone += numbers[key];
  }
  return numeroTelefone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    if (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)) {
      return true;
    }
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(phrase) {
  // seu código aqui
  let reg = /\d+/g;
  let qtd = [];
  let aux = 0;
  let beberAgua = phrase.match(reg);
  for (key in beberAgua) {
    qdt = qtd.push(parseInt(beberAgua[key]));
  }
  for (index in qtd) {
    aux += qtd[index];
  }
  if (aux < 2) {
    return aux + ' copo de água';
  } else {
    return aux + ' copos de água';
  }

}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
