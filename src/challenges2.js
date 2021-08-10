// Desafio 10
let tech = [];
let name = "";
let arrayFinal = [];
function techList(tech, name) {
  let erro = "Vazio!"
  for(i = 0; i < tech.length; i++){
    let objeto = {};
    objeto["tech"] = tech[i];
    objeto["name"] = name;
    arrayFinal.push(objeto);
  }
  arrayFinal.sort(function(a, b) {
    if(a.tech < b.tech) {
      return -1;
    } else {
      return true;
    }
  });
  if(tech.length === 0){
    return erro;
  } else {
    return arrayFinal;
  }
}

// Desafio 11
function generatePhoneNumber() {
  
}

// Desafio 12
function triangleCheck() {
  
}

// Desafio 13
function hydrate() {
  
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
