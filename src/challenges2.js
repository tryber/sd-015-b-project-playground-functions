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
function generatePhoneNumber(numbers) {
  // seu código aqui
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
