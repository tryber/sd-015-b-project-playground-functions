// Desafio 10
function techList(techNames, names) {
  let finalPhrase = [];
  if (techNames.length === 0){
    return "Vazio!"
  }
  else{
    for(let index in techNames){
      techNames.sort();
      let info = {
          tech: techNames[index],
          name: names
        }
      finalPhrase.push(info)
      }
    return finalPhrase;
  }
}

// Desafio 11
function generatePhoneNumber(numbers) {
  if(numbers.length !== 11){
    return "Array com tamanho incorreto."
  }
  else{
    for(let index in numbers){
      if(numbers[index] < 0){
        return "não é possível gerar um número de telefone com esses valores"
        break;
      }
      else{
        
      }
    }
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if(lineA < (lineB + lineC) && lineA > (Math.abs(lineB-lineC))){
    return true;
  }
  else{
    return false;
  }
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
