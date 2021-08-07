// Desafio 10
function techList(array, name) {
  let arrayTech = [];
  for (let index2 = 0; index2 < array.length; index2 += 1) {
    arrayTech.push(array[index2]); 
    arrayTech.sort()
  };
  if (arrayTech.length === 0) {
    return "Vazio!";
  }
  else {
    let newArrayObject = [];
    for (let index = 0; index < arrayTech.length; index += 1) {
      newArrayObject[index] = {
        tech: arrayTech[index],
        name: name
      };
    };
    return newArrayObject;
  }
};

// Desafio 11
function generatePhoneNumber(array) {
  let numbers = array;
  let countRepeatedNumber = 0;
  let countNumber = 0;
  let removeComma = '';
  let toString = '';
  let ddd = '';
  let part1 = '';
  let part2 = '';
  let stringFormated = '';

  if (numbers.length !== 11) {
    return ('Array com tamanho incorreto.');
  }

  for (let index in numbers){
    let verificaNum = numbers[index];
    for (let index2 in numbers) {
      if (verificaNum === numbers[index2]) {
        countNumber += 1;
      }
    }
    if (countNumber > countRepeatedNumber) {
      countRepeatedNumber = countNumber;
    }
    countNumber = 0;
    
    if (numbers[index] < 0 || numbers[index] > 9 || countRepeatedNumber > 2) {
      return ("não é possível gerar um número de telefone com esses valores");
    }
  }

  removeComma = numbers.join();
  toString = removeComma.replace(/\,/g, '');

  ddd = toString.slice(0, 2);
  part1 = toString.slice(2, 7);
  part2 = toString.slice(7, 11);

  stringFormated = `(${ddd}) ${part1}-${part2}`;

   return stringFormated;
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
