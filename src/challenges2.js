// Desafio 10
function techList(array, name) {
  let list = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  let sortArray = array.sort();
  for (const keys in sortArray) {
    let objects = {
      tech: sortArray[keys],
      name: name,
    };
    list.push(objects);
  }
  return list;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto';
  }
  let count = 0;
  let error = false;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 9 || array[i] < 0) {
      error = true;
      break;
    }
    count = 0;
    for (let numbers in array) {
      if (array[numbers] === array[i]) {
        count += 1;
      }
    }
    if (count >= 3) {
      error = true;
      break;
    }
  }
  if (error) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return ('(' + array[0] + array[1] + ') '
  + array[2] + array[3] + array[4] + array[5] + array[6]
  + '-'
  + array[7] + array[8] + array[9] + array[10] );
}
generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]);

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA >= lineB + lineC ||
    lineB >= lineA + lineC ||
    lineC >= lineB + lineA) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate() {
  // codigo aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
