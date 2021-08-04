// Desafio 10
function techList(arrayTech, name) {
  let list = [];
  let obj = {};
  for (let index = 0; index < arrayTech.length; index += 1) {
    obj.tech = arrayTech[index];
    obj.name = name;
    list.push(obj);
    obj = {};
  }
  list.sort(function (a, b) {
    if (a.tech < b.tech) {
      return -1;
    } return true;
  });
  if (list.length > 0) {
    return list;
  } return 'Vazio!';
}

let arrayTech = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let name = 'Amanda';
console.log(techList(arrayTech, name));

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
