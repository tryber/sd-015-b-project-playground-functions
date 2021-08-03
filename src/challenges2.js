// Desafio 10
function techList(array, name) {
let listaObjetos =[]
  if( array != ''){  
    for(let i = 0; i < array.length; i++){
        listaObjetos.push({
          tech: array[i],
          name: name
        })
      }
    listaObjetos.sort(function(a, b) {
      if (a.tech < b.tech){
        return -1;
      } else {
        return 1;
      }
    }) 
  return listaObjetos
  } 
  else {
    let vazio = "Vazio!"
    return vazio
  }
  }
console.log(techList([],"Caique"))
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
