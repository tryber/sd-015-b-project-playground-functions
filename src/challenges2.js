// Desafio 10
function techList() {    

}
techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas')
// Desafio 11
function generatePhoneNumber(array) {
  if(array.length === 10){
  }
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(string) {
  let text = ( string.replace(/[^\d]+/g, ' ') );
  let numeros = text.split('');
  let soma = 0
  for(let i = 0; i < numeros.length; i++){
    for(let j = 0; j < numeros[i]; j++) {
      soma ++
    }
  } if (soma != 1){
    return soma + " copos de água"
  } else if (soma = 1) {
    return soma + " copo de água"
  } 
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
