// Desafio 10
function techList(array, name) {
  // seu código aqui
    let list = [];
    array.sort();
  
    if (array.length === 0) {
      return "Vazio!";
    }
    for (let key in array) {
      array[key] = {
        tech: array[key],
        name: name,
      };
      list.push(array[key]);
    }
    return list;
  }


// Desafio 11
function generatePhoneNumber(numeroDeTelefone) {
  // seu código aqui
  let cont4 = 0;
  let cont8 = 0;
  let cont2 = 0;
  let cont1 = 0;
  let cont0 = 0;
  let cont3 = 0;
  let cont5 = 0;
  let cont6 = 0;
  let cont7 = 0;
  let cont9 = 0;
if(numeroDeTelefone.length !== 11){
  return "Array com tamanho incorreto."
}
for(let index = 0; index < numeroDeTelefone.length; index += 1){
  if(numeroDeTelefone[index] < 0 | numeroDeTelefone[index] > 9){
    return "não é possível gerar um número de telefone com esses valores"
  }
  }
  for(let index = 0; index < numeroDeTelefone.length; index += 1){
  if(numeroDeTelefone[index] == 4){
    cont4 +=1;
  }
  if(numeroDeTelefone[index] == 8){
    cont8 += 1;
  }
  if(numeroDeTelefone[index] == 2){
    cont2 += 1;
  }
  if(numeroDeTelefone[index] == 1){
    cont1 += 1;
  }
  if(numeroDeTelefone[index] == 0){
    cont0 += 1;
  }
  if(numeroDeTelefone[index] == 3){
    cont3 += 1;
  }
  if(numeroDeTelefone[index] == 5){
    cont5 += 1;
  }
  if(numeroDeTelefone[index] == 6){
    cont6 += 1;
  }
  if(numeroDeTelefone[index] == 7){
    cont7 += 1;
  }
  if(numeroDeTelefone[index] == 9){
    cont9 += 1;
  }
}
  if(cont4 >= 3){
    return "não é possível gerar um número de telefone com esses valores";
}
if(cont8 >= 3){
  return "não é possível gerar um número de telefone com esses valores";
}
if(cont2 >= 3){
  return "não é possível gerar um número de telefone com esses valores";
}
if(cont1 >= 3){
  return "não é possível gerar um número de telefone com esses valores";
}
if(cont0 >= 3){
  return "não é possível gerar um número de telefone com esses valores";
}
if(cont3 >= 3){
  return "não é possível gerar um número de telefone com esses valores";
}
if(cont5 >= 3){
  return "não é possível gerar um número de telefone com esses valores";
}
if(cont6 >= 3){
  return "não é possível gerar um número de telefone com esses valores";
}
if(cont7 >= 3){
  return "não é possível gerar um número de telefone com esses valores";
}
if(cont9 >= 3){
  return "não é possível gerar um número de telefone com esses valores";
}

return "(" + numeroDeTelefone[0] + numeroDeTelefone[1] + ") " + numeroDeTelefone[2] + numeroDeTelefone[3] + numeroDeTelefone[4] + numeroDeTelefone[5] + numeroDeTelefone[6] + "-"  + numeroDeTelefone[7] + numeroDeTelefone[8] + numeroDeTelefone[9] + numeroDeTelefone[10];
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
