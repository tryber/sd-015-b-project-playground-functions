// Desafio 10
function techList(array, name) {
  // seu código aqui
  array.sort();
  let skills = {};
  let array2 = [];
  for(let list = 0; list >= 0 && list < array.length; list += 1){
    skills = {
      tech: array[list],
      name: name
    }
    array2.push(skills);
  }
  if(array.length === 0){
    return "Vazio!";
  } else{
  return array2;
}
}

console.log(techList([], "Lucas"));

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui 
  let repCounter = 0;
  let number1 = '';
  let number2 ='-'
  let ddd = '(';
  if (array.length < 11 || array.length > 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let numberWriter = 0; numberWriter < array.length; numberWriter += 1) {
    for (let repetition = 0; repetition < array.length; repetition += 1) {
      if (array[numberWriter] === array[repetition]) {
        repCounter += 1;
      }
      if (repCounter >= 3 || array[repetition] > 9 || array[repetition] < 0) {
        return 'não é possível gerar um número de telefone com esses valores'
      }
    }
    repCounter = 0;
    if (numberWriter <= 1) {
      ddd += array[numberWriter];
    }
    if (numberWriter > 1 && numberWriter < 7) {
      number1 += array[numberWriter];
    }
    if (numberWriter > 6) {
      number2 += array[numberWriter];
    }
  }
  ddd += ') ';
  return ddd + number1 + number2;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA + lineB > lineC && Math.abs(lineA - lineB) < lineC && lineC + lineB > lineC && Math.abs(lineC - lineB) < lineA && lineA + lineC > lineB && Math.abs(lineA - lineC) < lineB) {
    return true;
  } else {
    return false;
  }
}  

console.log(triangleCheck(10, 8, 7));

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let number = string.match(/\d+/g).map(Number);
  let cups = 0;
  for (let numberSearch = 0; numberSearch < number.length; numberSearch += 1) {
    cups += number[numberSearch];
  }
  if (cups === 1) {
    return cups + ' copo de água'
  } else {
    return cups + ' copos de água'
  }
}

console.log(hydrate("10 cervejas"));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
