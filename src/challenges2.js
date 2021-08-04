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
function generatePhoneNumber(arrayPhone) {
  if (arrayPhone.length !== 11) {
    console.log('Array com tamanho incorreto.');
  } 
  if {
    for (let num of arrayPhone) {
      if (num < 0 || num > 9) {
        return console.log('Não é possível gerar um número de telefone com esses valores');
      } let stringPhone = arrayPhone.join('');
      let resultado = stringPhone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      console.log(resultado);
    }
  }
}

let arrayPhone = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
generatePhoneNumber(arrayPhone);

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
