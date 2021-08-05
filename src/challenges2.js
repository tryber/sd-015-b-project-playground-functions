// Desafio 10
function techList(list, user) {
  let orderedList = list.sort();
  let newObject = [];

  if (list.length === 0) {
    return 'Vazio!';
  } else {
    for (let i = 0; i < list.length; i += 1) {
      newObject.push({
        tech: orderedList[i],
        name: user,
      });
    }
    return newObject;
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
