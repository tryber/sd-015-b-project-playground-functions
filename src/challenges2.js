// Desafio 10
function techList(nomeTecnologia, nomePessoa) {
  let techList = [];
  nomeTecnologia.sort();
  for (let index = 0; index < nomeTecnologia.length; index += 1){
    let objeto = {
      nome: nomePessoa,
      tecnologia: nomeTecnologia[index],
    };
    techList.push(objeto);
  }
  if (techList.length <= 1){
    return 'Vazio!';
  }
return techList;
}

// valida tamanho
function tamanhoInvalido(phoneNumber){
  let validacao = true;
  if (phoneNumber.length !== 11){
    validacao = false;
  }
  return validacao;
}

// valida < 0 ; > 9
function validaNumeros(phoneNumber){
  let validacao = true;
  for (let index = 0; index < phoneNumber.length; index++){
    if ((phoneNumber[index] < 0) || (phoneNumber[index] > 9)){
      validacao = false;
    }
  }
  return validacao;
}

// valida repeticao de 3 seguidos
function validaRepeticao(phoneNumber){
  let validacao = true;
  let guardaNumero = 0;
  for (let index = 0; index < phoneNumber.length; index++){
    guardaNumero = phoneNumber[index];
    if ((guardaNumero === phoneNumber[index+1]) && (guardaNumero === phoneNumber[index+2])){
      validacao = false;
    }
  }
  return validacao;
}

// monta o numero
function montaNumero(phoneNumber){
  let numero = [];
  let numeroFinal = '';
  numero.push('(');
  for (let index = 0; index < phoneNumber.length; index += 1) {
    if (index === 1) {
      numero.push(phoneNumber[index] + ') ');
    } else if (index === 6) { 
      numero.push(phoneNumber[index] + '-');
    } else {
      numero.push(phoneNumber[index])
    }
  }
numeroFinal = numero.join('');
return numeroFinal;
}  

//Desafio 11
function generatePhoneNumber(phoneNumber) {
  if (!tamanhoInvalido(phoneNumber)) {
    return 'Array com tamanho incorreto';
  }
  if (!validaNumeros(phoneNumber)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (!validaRepeticao(phoneNumber)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return montaNumero(phoneNumber);
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