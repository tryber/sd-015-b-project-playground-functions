// Desafio 10
function techList(array, name) {
  // seu código aqui
  let arrayDeObjetos = [];
  let arraySort = array.sort();
  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < arraySort.length; index += 1) {
    let lista = {
      tech: arraySort[index], name: name,
    };
    arrayDeObjetos.push(lista);
  }
  return arrayDeObjetos;
}

// Desafio 11
function generatePhoneNumber(numero) {
  // seu código aqui
  let resultado;
  let concat = '(' + numero[0] + numero[1] + ') ' + numero[2] + numero[3] + numero[4] + numero[5] + numero[6] + '-' + numero[7] + numero[8] + numero[9] + numero[10];
  let numeroTeste = Object.create(null);
  for (let index of numero) {
    if (!numeroTeste[index]) {
      numeroTeste[index] = 1;
    } else {
      numeroTeste[index] += 1;
    }
  }
  if (numero.length === 11) {
    for (let index = 0; index < numero.length; index += 1) {
      if (numero[index] < 0 || numero[index] > 9 || numeroTeste[index] >= 3) {
        resultado = 'não é possível gerar um número de telefone com esses valores';
        break;
      } else {
        resultado = concat;
      }
    }
  } else {
    resultado = 'Array com tamanho incorreto.';
  }
  return resultado;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
