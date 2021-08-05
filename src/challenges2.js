// Desafio 10
function techList(tecnologias, name) {
  // seu código aqui
  if (tecnologias.length === 0){
    return 'Vazio!'
  } else {
    tecnologias.sort();
  }

  let nameTecnologias = [];

  for (let index = 0; index < tecnologias.length; index += 1){
    let objNemaTecnologias = {
      tech: tecnologias[index],
      name: name
    }
    nameTecnologias.push(objNemaTecnologias);
  }
  return nameTecnologias
}

// Desafio 11
function generatePhoneNumber(numTelefone){
  // seu código aqui  
  if (numTelefone.length != 11){
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < numTelefone.length; index += 1){
    let numerosRepetidos = 0;
    for (let index2 = 0; index2 < numTelefone.length; index2 += 1){
      if (numTelefone[index] === numTelefone[index2]){
        numerosRepetidos += 1;
      }
    }
    if (numTelefone[index] < 0 || numTelefone[index] > 9 || numerosRepetidos >= 3){
      return 'não é possível gerar um número de telefone com esses valores'
    }  
  }
  let numeroTelefone = '';
    for (let index = 0; index < numTelefone.length; index += 1){
      if (index === 0){
        numeroTelefone += '(' + numTelefone[index];
      } else if (index === 1){
        numeroTelefone += numTelefone[index] + ') ';
      } else if (index === 6){
        numeroTelefone += numTelefone[index] + '-';
      } else{
        numeroTelefone += numTelefone[index];
      }
    }
  return numeroTelefone;
}


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB%lineC)){
    return true
  } else if (lineB < (lineA + lineC) && lineB > Math.abs(lineA%lineC)){
    return true
  } else if (lineC < (lineA + lineA) && lineC > Math.abs(lineA%lineB)){
    return true
  }
   else {
    return false
  }
}

// Desafio 13
function hydrate(stringFrase) {
  // seu código aqui
  let stringNumeros = stringFrase.match(/\d/g);
  let somaNumerosInteiros = 0;
  let stringFraseRetorno = '';

  for (let index = 0; index < stringNumeros.length; index += 1){
    somaNumerosInteiros += parseInt(stringNumeros[index]);
  }
  stringFraseRetorno = ('String recebida: ' + stringFrase + ' String retornada: ' + somaNumerosInteiros + ' copos de água');
  return stringFraseRetorno
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};