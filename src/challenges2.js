// Desafio 10
function techList(vetor, name) {
  let vector = vetor.sort();
  let obj = {};
  let resp = [];
  for (let index in vector) {
    obj[index] = {
      tech: vetor[index],
      name,
    };
    resp.push(obj[index]);
  }
  if (vetor.length > 0) {
    return resp;
  }

  return 'Vazio!';
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
// Desafio 11
function generatePhoneNumber(vetor) {
  if (vetor.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  const erro = 'não é possível gerar um número de telefone com esses valores';
  let ramal = `(${vetor[0]}${vetor[1]})`;
  let numFirst = ` ${vetor[2]}${vetor[3]}${vetor[4]}${vetor[5]}${vetor[6]}`;
  let numLast = `-${vetor[7]}${vetor[8]}${vetor[9]}${vetor[10]}`;
  for (let numero of vetor) {
    let count = 0;
    if (numero < 0) {
      return erro;
    }
    if (numero > 9) {
      return erro;
    }
    for (let index in vetor) {
      if (vetor[index] === numero) {
        count += 1;
        if (count === 3) {
          return erro;
        }
      }
    }
  }
  return ramal + numFirst + numLast;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  }
  if (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) {
    return true;
  }

  return false;
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
