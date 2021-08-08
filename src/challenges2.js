// Desafio 10

function techList(vetorTech, name) {
  let objeto = [];
  if (vetorTech.length <= 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < vetorTech.length; index += 1) {
    objeto.push({
      tech: vetorTech[index],
      name,
    });
  }
  return objeto.sort(function (a, b) {
    if (a.tech < b.tech) {
      return -1;
    }
    return true;
  });
}
// Desafio 11

function generatePhoneNumber(telefone) {
  if (telefone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < telefone.length; index += 1) {
    if (telefone[index] < 0 || telefone[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let comparador = '';
  let soma = 0;
  for (let index = 0; index < telefone.length; index += 1) {
    comparador = telefone[index];
    soma = 0;
    for (let secondIndex = 0; secondIndex < telefone.length; secondIndex += 1) {
      if (comparador === telefone[secondIndex]) {
        soma += 1;
        if (soma >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }
  let ddd = '';
  for (let index = 0; index < 2; index += 1) {
    ddd += telefone[index];
  }
  let prefixo = '';
  for (let index = 2; index < 7; index += 1) {
    prefixo += telefone[index];
  }
  let numero = '';
  for (let index = 7; index < 11; index += 1) {
    numero += telefone[index];
  }
  return `(${ddd}) ${prefixo}-${numero}`;

  //  return `(${telefone[0]}${telefone[1]}) ${telefone[2]}${telefone[3]}${telefone[4]}${telefone[5]}${telefone[6]}-${telefone[7]}${telefone[8]}${telefone[9]}${telefone[10]}`
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB > lineC && lineB + lineC > lineA && lineC + lineA > lineB) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(frase) {
  let vetorNumeros = frase.match(/\d+/g);
  let soma = 0;
  for (let index = 0; index < vetorNumeros.length; index += 1) {
    soma += parseInt(vetorNumeros[index]);
  }
  if (soma <= 1) {
    return `${soma} copo de água`;
  }
  return `${soma} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
