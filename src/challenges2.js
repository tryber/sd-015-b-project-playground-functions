// Desafio 10
function compare(obj1, obj2) {
  let techA = obj1.tech;
  let techB = obj2.tech;

  let compara = 0;
  if (techA > techB) {
    compara = 1;
  } else if (techA < techB) {
    compara = -1;
  }
  return compara;
}

function techList(array, nome) {
  let arrayObj = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let key in array) {
    arrayObj[key] = { tech: array[key], name: nome };
  }
  return arrayObj.sort(compare);
}

// Desafio 11
function generatePhoneNumber(array) { 
  
}

// Desafio 12
function triangleCheck() { 

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
