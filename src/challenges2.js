// Desafio 10
function techList(tech, nameParam) {
  let techListing = []
  let techSort = tech.sort()

  if (tech.length > 1) {
    for (let index = 0; index < tech.length; index += 1) {
      let addList = techSort[index]

      techListing.push({
        tech: addList,
        name: nameParam
      })
    }
    return techListing;
  }
  
  else {
    return "Vazio!"
  }
}

// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11 || numbers === []) {
      return "Array com tamanho incorreto.";
  }

  else {
      for (let unityNumber of numbers) {

      let min = 0;

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
}
return "(" + numbers[0] + numbers[1] + ")" + " " + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + "-" + numbers[7] + numbers[8] + numbers[9] + numbers[10];
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC) && lineB < lineA + lineC && lineB > Math.abs(lineA - lineC) && lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) {
      return true;
  }
  else {
      return false;
  }
}

// Desafio 13
function hydrate(alcoholic) {
  let numberFinder = /\d+/g;
  let numbers = alcoholic.match(numberFinder);
  let sum = 0;

  for (let counter = 0; counter < numbers.length; counter += 1) {
      sum = sum + parseInt(numbers[counter]);
  }
  
  if (sum === 1) {
    return sum + " copo de água";
  }
  else {
    return sum + " copos de água";
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
