// Desafio 10
function techList(arrTech, name) {
    
  let arrAns = [];
  let arrMan = arrTech.sort();

  if (arrMan.length > 0){
      for (let i = 0; i < arrMan.length; i += 1){
          arrAns.push({tech: arrMan[i],
                       name: name});
  }
      return arrAns;
  } else {return 'Vazio!'}
  }

// Desafio 11

function checkNumber(number){
  let contRepeat = 0;
  for (let i in number){
      if (number[i] < 0) {
          return 0;
          break;
      }
  }
  for (let i in number){
      if (number[i] > 9) {
          return 1;
          break;
      }
  }
  number = number.sort();
  let nRepeat = 0;
  let nRepeatQ = 0;
  for (let i = 1; i < number.length; i += 1){
      if (number[i] === number[i-1]){
          contRepeat += 1;
          if (contRepeat > 2){
              nrepeat = number[i];
              for (let j in number){
                  if (nrepeat == number[j]){
                      nRepeatQ += 1;
                  }
              }
              if (nRepeatQ >= 3) {
                  return 2;
                  break;
              }
          }
      }
  }
  return 3;
}

function generatePhoneNumber(telNumber) {
  if (telNumber.length === 11 && checkNumber(telNumber) == 3) {
      let numberFormated;
      numberFormated = telNumber.join('');
      numberFormated = numberFormated.replace(/(\d{0})(\d{2})(\d{5})(\d{4})/,"$1($2) $3-$4");
      return numberFormated;

      //Uso do replace tirado do blog da Trybe https://blog.betrybe.com/javascript/javascript-replace/
  } else if (telNumber.length !== 11){
      return "Array com tamanho incorreto.";
  }else if(checkNumber(telNumber) === 0) {
      return "não é possível gerar um número de telefone com esses valores";
  } else if (checkNumber(telNumber) === 1) {
      return "não é possível gerar um número de telefone com esses valores";
  } else if (checkNumber(telNumber) === 2){
      return "não é possível gerar um número de telefone com esses valores";
  } 
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
