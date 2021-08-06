// Desafio 10
function techList(tecnologias, name) {
  let nameTecnologias = [];
  if (tecnologias.length === 0) {
    return 'Vazio!';
  }
  tecnologias.sort();
  for (let index = 0; index < tecnologias.length; index += 1) {
    let objNemaTecnologias = {
      tech: tecnologias[index],
      name,
    };
    nameTecnologias.push(objNemaTecnologias);
  }
  return nameTecnologias;
}

// Desafio 11
function generatePhoneNumber(numTelefone) {
  if (numTelefone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < numTelefone.length; index += 1) {
    let numerosRepetidos = 0;
    for (let index2 = 0; index2 < numTelefone.length; index2 += 1) {
      if (numTelefone[index] === numTelefone[index2]) {
        numerosRepetidos += 1;
      }
    }
    if (numTelefone[index] < 0 || numTelefone[index] > 9 || numerosRepetidos >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let numeroTelefone = '';
  for (let index = 0; index < numTelefone.length; index += 1) {
    if (index === 0) {
      numeroTelefone += `(${numTelefone[index]}`;
    } else if (index === 1) {
      numeroTelefone += `${numTelefone[index]}) `;
    } else if (index === 6) {
      numeroTelefone += `${numTelefone[index]}-`;
    } else {
      numeroTelefone += (numTelefone[index]);
    }
  }
  return numeroTelefone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > (lineB + lineC) && lineA > Math.abs(lineB % lineC)) {
    return false;
  }
  if (lineB > (lineA + lineC) && lineB > Math.abs(lineA % lineC)) {
    return false;
  }
  if (lineC > (lineA + lineB) && lineC > Math.abs(lineA % lineB)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(stringFrase) {
  let stringNumeros = stringFrase.match(/\d/g);
  let somaNumerosInteiros = 0;
  for (let index = 0; index < stringNumeros.length; index += 1) {
    somaNumerosInteiros += parseInt(stringNumeros[index]);
  }
  if (somaNumerosInteiros > 1) {
    return `${somaNumerosInteiros} copos de água`;
  }
  return `${somaNumerosInteiros} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
