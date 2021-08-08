// Desafio 10
function techList(names, name) {
  // seu código aqui
  if (names.length > 0) {
    let lista = [];
    names = names.sort();
    for (tecnologia of names) {
      lista.push({ tech: tecnologia, name });
    }
    return lista;
  }
  return 'Vazio!';
}

// Desafio 11
function validaTamanho(numero) {
  // Verifica se o número tem exatamente 11 algarismos.
  if (numero.length !== 11) {
    return false;
  }
return true
}

function validaRepeticao(phone) {
  // Verifica se algum número se repete mais de três vezes.
  for (algarismo of phone) {
    let quantidade = phone.filter((x) => x === algarismo).length;
    if (quantidade >= 3) {
      return false;
    }
  } 
  return true;
}

function validaAlcance(array) {
  // Verifica se os números estão entre 0 e 9.
  if (array.filter((x) => x < 0 || x > 9).length > 0) {
    return false;
  } 
  return true;
}

function formataPhone(numero){
  //Adiciona parênteses e traço no telefone.
  numero.splice(0, 0, "(");
  numero.splice(3, 0, ") ");
  numero.splice(9, 0, "-");
  return numero.join("");
}

function validaPhone(phone){
  if(!validaTamanho(phone)){
    return "Array com tamanho incorreto.";
  }
  else if (!validaAlcance(phone) || !validaRepeticao(phone)){
    return "não é possível gerar um número de telefone com esses valores"
  }
  return true;
}

function generatePhoneNumber(phone) {
  // seu código aqui

  if (validaPhone(phone).length > 0){
    return validaPhone(phone);
  }

  let numero = formataPhone(phone);

  return numero;
}
generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]);
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let checks = 0;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  }
  if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let coposAgua = 0;
  for (caractere of string) {
    if (!isNaN(parseInt(caractere))) {
      coposAgua += parseInt(caractere);
    }
  }

  if (coposAgua > 1) {
    return `${coposAgua} copos de água`;
  }
  return `${coposAgua} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
