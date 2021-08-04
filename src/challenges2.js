// Desafio 10
function techList(technologies, name) {
  // seu código aqui
  let newList = [];
  technologies.sort();
  for (let tech in technologies) {
    let object = {
      tech: '',
      name: '',
    };
    object.tech = technologies[tech];
    object.name = name;
    newList.push(object);
  };
  if (newList.length < 1) {
    return 'Vazio!';
  } return newList;
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
