// Desafio 10
function techList(arrayTech, name) {
  let newTechArray = arrayTech.sort();
  let techObject = [];
  if (newTechArray.length === 0){
    return 'Vazio!';
  } else {
    for (let i = 0; i < newTechArray.length; i++) {
      techObject.push({'tech': newTechArray[i], 'name': name});
    }
  }
  return techObject;
}


// Desafio 11
function generatePhoneNumber(arrayPhone) {
  let phoneNumber = "";

  if (arrayPhone.length != 11) {
    return "Array com tamanho incorreto."
  } 
  for (let i = 0; i < arrayPhone.length; i++) {
    let repeticoes = [];
    if (arrayPhone[i] < 0 || arrayPhone[i] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    for (let j = 0; j < arrayPhone.length; j++){
      if (arrayPhone[i] === arrayPhone[j]){
        repeticoes.push(arrayPhone[j]);
      }
    }
    
    if (repeticoes.length >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    }

    if (i === 0) {
      phoneNumber = phoneNumber + "(";
    } else if (i===2) {
      phoneNumber = phoneNumber + ") ";
    } else if (i===7) {
      phoneNumber = phoneNumber + "-";
    }
    phoneNumber = phoneNumber + arrayPhone[i];
    
  } return phoneNumber;
} 
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC && lineA < Math.abs(lineB - lineC)){
    return true;
  } else if (lineB > lineC + lineA && lineB < Math.abs(lineC - lineA)){
    return true;
  } else if (lineC > lineA + lineB && lineC < Math.abs(lineA - lineB)){
    return true;
  } if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)){
    return true;
  } else if (lineB < lineC + lineA && lineB > Math.abs(lineC - lineA)){
    return true;
  } else if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)){
    return true;
  }else {
    return false;
  }
}

// Desafio 13
function hydrate(stringHy) {
  let splitHy = stringHy.split(" ");
  let numberHy = 0;

  for (let i = 0; i < splitHy.length; i++){
    let convert = parseInt(splitHy[i]);
    if (!Number.isNaN(convert)) {
      numberHy = numberHy + convert;
    }
  } 
  if (numberHy === 1) {
    return "1 copo de água";
  }
  return numberHy + " copos de água";
} 

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
