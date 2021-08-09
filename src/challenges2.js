// Desafio 10
function techList(tech, name) {
   let arr = tech.sort();
   let saida = []
   let obj = new Object;
   for (let key of arr){
     obj.tech = key,
     obj.name = name
     saida.push(obj);
   }
     return saida;
  }
console.log(techList(["React","Jest","HTML", "CSS", "JavaScript"], "Lucas"));

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
