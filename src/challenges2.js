// Desafio 10
function techList(range, name) {
  // seu código aqui
  let afterList = [];

  if (range.length === 0){
    return "Vazio!";
  }
  range.sort();
  for (let tech of range){
    afterList.push({ tech, name });
  }
  return afterList;
}

// Desafio 11
function generatePhoneNumber(telefone) {
  // seu código aqui
  
  if (telefone.length != 11){
    return "Array com tamanho incorreto.";
  }

  for (let numero of telefone){
    if (numero < 0 || numero > 9){
      return "não é possível gerar um número de telefone com esses valores";
    }
  }

  for (let numero of telefone){
    let contagem = 0;
    for (let numeroVerificado of telefone){
      if (numeroVerificado === numero){
        contagem ++;
      }
      if (contagem >= 3){
        return "não é possível gerar um número de telefone com esses valores";
      }
  }   
}
  // // Esse trecho do codigo foi reproduzido a partir da Fernanda Michetti.
  // Segue o link: https://github.com/tryber/sd-015-b-project-playground-functions/tree/fernanda-michetti-playground-functions
  
  let numero =
    "(" +
    telefone[0] +
    telefone[1] +
    ")" +
    " " +
    telefone[2] +
    telefone[3] +
    telefone[4] +
    telefone[5] +
    telefone[6] +
    "-" +
    telefone[7] +
    telefone[8] +
    telefone[9] +
    telefone[10] ;
    
  return numero;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)){
    return true;
} else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)){
    return true;
} else if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)){
    return true;
} else {
  return false;
}
}
// Desafio 13
function hydrate(fitness) {
  let numbers = fitness.match(/\d+/g);
  let waterCups = 0;
  
  for (index = 0; index < numbers.length; index += 1) {
    waterCups += parseInt(numbers[index]);
  }
  if (waterCups > 1) {
    return waterCups + ' copos de água';
  } else {
    return waterCups + ' copo de água';
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
