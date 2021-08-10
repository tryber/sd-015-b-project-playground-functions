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

  // Desafio 11
function generatePhoneNumber(array) {
  let listaDeNumeros = []
  let ver = false
  let erro = "não é possível gerar um número de telefone com esses valores"
  let number = 0
  for(let i = 0; i < array.length; i++){
    let count = 0
    for(let o = 0; o < array.length; o++){
      if ( array[i] == array[o]){
        count += 1
      }
      if (count >= 3 || array[i] < 0 || array[i] > 9 || array.length > 11){
      ver = true 
      }
    }
  }
  if (ver == true){
      return erro
  } else {
    number = "(" + array[0] + array[1]+ ")" + " " + array[2] + array[3]+ array[4] + array[5] + "-" + array[6] + array[7] + array[8] + array[9] 
    return number 
  }
  
}
console.log(generatePhoneNumber([1,2,3,4,5,9,7,8,9,9]))
// Desafio 12
function triangleCheck() {
  // seu código aquis
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
