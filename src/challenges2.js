// Desafio 10
function techList(tech, name) {
  let sortTechnologies = tech.sort();
  let result = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }

  for (let index = 0; index < sortTechnologies.length; index += 1) {
    let technologiesByName = {
      tech: sortTechnologies[index],
      name: name
    }
    result.push(technologiesByName);
  }
  return result;
}

// Desafio 11
function generatePhoneNumber(arrayOfNumber) {
  let ddd = '';
  let prefix = '';
  let suffix = '';

  if (arrayOfNumber.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  /** 
   * Consultei o repositório da Aline Siqueira para resolver essa parte.
   * link: https://github.com/tryber/sd-015-b-project-playground-functions/pull/13/commits/83c59e051f22b9f1c13b5eb29568ae463a8a7f3d
   */
  for (let index = 0; index < arrayOfNumber.length; index += 1) {
    let aux = 0;
    for (let index2 = 0; index2 < arrayOfNumber.length; index2 += 1) {
      if (arrayOfNumber[index] === arrayOfNumber[index2]) {
        aux += 1;
      }
    }
    if (arrayOfNumber[index] < 0 || arrayOfNumber[index] > 9 || aux >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  for (let index = 0; index < arrayOfNumber.length; index += 1) {
    if (index <= 1) {
      ddd += arrayOfNumber[index];
    } else if (index <= 6) {
      prefix += arrayOfNumber[index];
    } else {
      suffix += arrayOfNumber[index];
    }
  }
  return '(' + ddd + ')' + ' ' + prefix + '-' + suffix;
}


// Desafio 12
function triangleCheck() {
  if (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB)) {
    return true;
  } else {
    return false;
  }
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
