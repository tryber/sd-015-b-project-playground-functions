// Desafio 10
function techList(tec, name) {
  function bigger(a, b) {
    if (a < b) {
      return -1;
    } else {
      return 1;
    }
  }
  if (tec.length < 1) {
    return 'Vazio!'
  } else {
    let sortedTec = tec.sort(bigger);
    let result = [];
    for (let k in sortedTec) {
      languages = {
        tech: sortedTec[k],
        name: name,
      };
      result.push(languages)
    }
    return result
  }
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
