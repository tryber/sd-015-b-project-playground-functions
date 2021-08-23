// Desafio 10
function techList(array, name) {
  let techs = [];
  if (array.length === 0) {
    return "Vazio!";
  } 
  let ordernedArray = array.sort();
  for (let keys in ordernedArray) {
    let objects = {
      tech: ordernedArray[keys],
      name: name,
    };
    techs.push(objects);
  }
  return techs;

}

// Desafio 11
function generatePhoneNumber(numbers) {
  let result = '';
  if (numbers.length < 11 || numbers.length > 11) {
    result = 'Array com tamanho incorreto.';
  } else {
    result = `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
    for (let index = 0; index < numbers.length; index += 1) {
      let equalNumbers = 0;
      if (numbers[index] > 9 || numbers[index] < 0) {
        result = 'não é possível gerar um número de telefone com esses valores';
      }
      for (let index2 = 0; index2 < numbers.length; index2 += 1) {
        if (numbers[index] === numbers[index2]) {
          equalNumbers += 1;
        }
        if (equalNumbers > 2) {
          result = 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA >= lineB + lineC || lineB >= lineA + lineC || lineC >= lineA + lineB) {
    return false;
  } else {
    return true;
  }
}

// Desafio 13
function hydrate(str) {
  let numbers = /\d+/g;
  let glassOfWater = str.match(numbers);
  let soma = 0;
  for (let index = 0; index < glassOfWater.length; index++){
      soma += parseInt(glassOfWater[index]);        
  }
  if (soma === 1) {
        return (soma + ' copo de água');
  }   else {
          return(soma + ' copos de água');
      }    
} 

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
