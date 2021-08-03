// Desafio 10
function techList(arr, name) {
  let aux = arr.sort();
  let resp = [];
  for (let i of aux) {
    resp.push({tech: i, name: name});
  }
  return resp;
}

let arr = ["React", "Jest", "HTML", "CSS", "JavaScript"];
let name = 'André'
console.log(techList(arr, name));

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
