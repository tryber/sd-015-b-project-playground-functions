// Desafio 10
//Tentar de novo
function techList(tech, nameParam) {

  let techListing = {

  };

  if (tech.length > 0) {

    techListing = [
      {
      tech: tech[0],
      name: nameParam
     },
     {
      tech: tech[1],
      name: nameParam
     },
     {
      tech: tech[2],
      name: nameParam
     },
     {
      tech: tech[3],
      name: nameParam
     },
    {
      tech: tech[4],
      name: nameParam
    } ]

    return techListing;

  }

  else {
    return "Vazio!"
  }

}

// Desafio 11
function generatePhoneNumber(numbers) {
  for (let unityNumber of numbers) {

      let min = 0;

      if (numbers.length !== 11) {
          return "Array com tamanho incorreto.";
      }

      if (unityNumber > 9 || unityNumber < 0) {
          return "não é possível gerar um número de telefone com esses valores";
      }

      for (let compare of numbers) {
          if (compare === unityNumber) {
              min += 1;
          }
      }
      if (min >= 3) {
          return "não é possível gerar um número de telefone com esses valores";
      }
  }
      return "(" + numbers[0] + numbers[1] + ")" + " " + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + "-" + numbers[7] + numbers[8] + numbers[9] + numbers[10];
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
