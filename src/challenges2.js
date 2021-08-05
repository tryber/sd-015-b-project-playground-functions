// Desafio 10
function techList(valor1, valor2) {
  valor1 = valor1.sort();
  let techInfo;
  if (valor1.length > 0) {
    let saida = [];  
    for (let key in valor1) {
      techInfo = {
        tech: valor1[key],
        name: valor2
      };
      saida.push(techInfo);
    }
    return saida;
  } else if (valor1.length === 0) {
    return 'Vazio!';
  }

}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let output;
  if (Math.abs(lineB - lineA) < lineA < lineB + lineC && Math.abs(lineA - lineC) < lineB < lineA + lineC && Math.abs(lineA - lineB) < lineC < lineA + lineB) {
    if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
      output = false;
    } else {
    output = true;
    }
  } else {
    output = false;
  } return output;
}

// Desafio 13
function hydrate(comanda) {
  let quantidade = comanda.match(/\d+/g);
  let coposAgua = 0;
  let output = '';

  for (let key of quantidade) {
    coposAgua += parseInt(key, 10);
  }
  if (coposAgua === 1) {
    output = coposAgua + ' copo de água';
  } else {
    output = coposAgua + ' copos de água';
  }
  return output;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
