// Desafio 10
function techList(arrRecebido, name) {
  arrRecebido = arrRecebido.sort();
  let listaOrdenada;
  let resultado = [];
  let objeto;
  if (arrRecebido.length === 0) {
    resultado = 'Vazio!';
  } else {
    for (let index of arrRecebido) {
      objeto = {
        tech: index,
        name: name,
      }
      resultado.push(objeto);
    }
  }
  return resultado;
}

// Desafio 11
function generatePhoneNumber(arrRecebido) {
  let resultado;
  let continua = true;
  if (arrRecebido.length != 11) {
    resultado = 'Array com tamanho incorreto.';
    continua = false;
  } else if (continua) {
    for (let index1 of arrRecebido) {
      if (index1 < 0 || index1 > 9) {
        resultado = 'não é possível gerar um número de telefone com esses valores';
        continua = false;
      }
    }
  }
  if (continua) {
    for (let index2 = 0; index2 < 10; index2 += 1) {
      let contador = 0;
      for (let index3 of arrRecebido) {
        if (index2 === index3) {
          contador += 1;
        }
      }
      if (contador > 2) {
        resultado = 'não é possível gerar um número de telefone com esses valores';
        continua = false;
      }
    }
  }
  if (continua) {
    resultado = '(' + arrRecebido[0] + arrRecebido[1] + ') ' + arrRecebido[2] + arrRecebido[3] + arrRecebido[4] + arrRecebido[5] + arrRecebido[6] + '-' + arrRecebido[7] + arrRecebido[8] + arrRecebido[9] + arrRecebido[10]
  }
  return resultado;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let resultado = true;
  if (lineA > lineB + lineC) {
    resultado = false;
  } else if (lineB > lineA + lineC) {
    resultado = false;
  } else if (lineB > lineB + lineA) {
    resultado = false;
  }
  return resultado;
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
