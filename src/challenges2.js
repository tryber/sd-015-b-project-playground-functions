// Desafio 10
/* resposta */

function imprimi(arrayNomes, nome) {
  let array = [];
  for (let index = 0; index < arrayNomes.length; index += 1) {
    let objeto = {
      tech: arrayNomes[index],
      name: nome,
    };
    array.push(objeto);
  }
  return array;
}
function techList(arrayDeNomes, name) {
  let arrayNomes = arrayDeNomes.sort();
  let nome = name;
  if (arrayNomes.length === 0) {
    return 'Vazio!';
  }
  return imprimi(arrayNomes, nome);
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return "Array com tamanho incorreto.";
  }

  for (let index = 0; index < array.length; index += 1) {
    let contador = 0;
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        contador += 1;
      }
    }
    if (array[index] < 0 || array[index] > 9 || contador >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }

  let numeroPronto = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
  return numeroPronto;
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let linhaA = Math.abs(lineA);
  let linhaB = Math.abs(lineB);
  let linhaC = Math.abs(lineC);
  let resultado = "";
  
  if ((linhaA < linhaB + linhaC) && (linhaB < linhaA + linhaC) && (linhaC < linhaA + linhaB)) {
    return true;
  } return false;
  // seu código aqui
}

// Desafio 13
function hydrate(string) {
  let frase = string.replace(/\D/g, '');
  let resultado = 0;

  for (let index = 0; index < frase.length; index += 1) {
    resultado = resultado + parseInt(frase[index]);
  }
  if (resultado <= 1) {
    return resultado + ' copo de água';
  }
  return resultado + ' copos de água';
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
