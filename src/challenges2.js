// Desafio 10
function techList(names, name) {
  // seu código aqui
  if (names.length > 0) {
    let lista = [];
    names = names.sort();
    for (tecnologia of names) {
      lista.push({ tech: tecnologia, name: name });
    }
    return lista;
  } 
  return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(phone) {
  // seu código aqui
  let phoneLength = phone.length;
  let quantidades = {};
  let numero = '';
  if (phoneLength !== 11) {
    return 'Array com tamanho incorreto.';
  } else {
    for (let index = 0; index < phoneLength; index += 1) {
      let algarismoAtual = phone[index];

      if (quantidades[algarismoAtual] === undefined) {
        quantidades[algarismoAtual] = 0;
      }

      quantidades[algarismoAtual] += 1;

      if (
        quantidades[algarismoAtual] >= 3 ||
        algarismoAtual > 9 ||
        algarismoAtual < 0
      ) {
        return 'não é possível gerar um número de telefone com esses valores';
      } else {
        if (index === 0) {
          numero += '(';
        }

        numero += algarismoAtual;

        if (index === 1) {
          numero += ') ';
        } else if (index === 6) {
          numero += '-';
        }
      }
    }
    return numero;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let checks = 0;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  } else if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let coposAgua = 0;
  for (caractere of string){
    if (!isNaN(parseInt(caractere))){
      coposAgua += parseInt(caractere);
    }
  }

  if (coposAgua > 1){
    return coposAgua + " copos de água";
  } else{
    return coposAgua + " copo de água";
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
