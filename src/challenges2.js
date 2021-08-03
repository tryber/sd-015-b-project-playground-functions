// Desafio 10
function techList(techs, name) {
  // seu código aqui
  if (techs.length > 0) {
    let objList = [];
    techs.sort();

    for (const tech of techs) {
      let obj = {};

      obj.tech = tech;
      obj.name = name;

      objList.push(obj);
    }

    return objList;
  } else {
    return 'Vazio!';
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
