// Desafio 10
function techList(array, string) {
  let resposta;
  if (array.length === 0) {
    resposta = 'Vazio!';
  } else {
    let arrOrd = array.sort();
    resposta = [];
    for (let index of arrOrd) {
      resposta.push({
        tech: index,
        name: string,
      });
    }
  }
  return resposta;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12

function triangleCheck(linha1,linha2,linha3) {
  let resposta;
  if(linha1 < linha2 + linha3 && linha1 > Math.abs(linha2 - linha3)) {
     resposta = true;
  } else {
     resposta = false;
  }
  return resposta
}

// Desafio 13
function hydrate(string) {
  let numero = string.replace(/[^0-9]/g, '');
  let numeroCopos = 0;
  for (let number of numero) {
    number = Number(number);
    numeroCopos += number;
  }
  if (numeroCopos > 1) {
    return `${numeroCopos} copos de água`;
  }
  if (numeroCopos === 1) {
    return `${numeroCopos} copo de água`;
  }
}


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
