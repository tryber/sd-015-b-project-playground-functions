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
function generatePhoneNumber() {
  // seu codigo
} 

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA >= lineB + lineC 
    || lineB >= lineA + lineC 
    || lineC >= lineB + lineA) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  let str = string.match(/\d/g, ' ');
  let result;
  let qtdWater = 0;
  for (let i of str) {
    qtdWater += parseInt(i);
  }
  if (qtdWater === 1) {
    result = (qtdWater + ' copo de água');
  } else if (qtdWater > 1) {
    result = (qtdWater + ' copos de água');
  }
  return result;
} console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
