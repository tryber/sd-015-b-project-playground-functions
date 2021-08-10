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
  let erroCount = "não é possível gerar um número de telefone com esses valores"
  let erroLen = "Array com tamanho incorreto."
  let number = 0
  for(let i = 0; i < array.length; i++){
    let count = 0
    for(let o = 0; o < array.length; o++){
      if ( array[i] == array[o]){
        count += 1
      }
      if (count >= 3 || array[i] < 0 || array[i] > 9){
      ver = true 
      }
    }
} if (array.length != 11) {
    return erroLen

}
  if (ver == true){
      return erroCount
  } else {
    number = "(" + array[0] + array[1]+ ")" + " " + array[2] + array[3]+ array[4] + array[5] + array[6] + "-" + array[7] + array[8] + array[9] + array[10] 
    return number 
  }
  
}

// Desafio 12
function triangleCheck(line1, line2, line3) {
  let ver = 0
  let soma1 = line1 + line2
  let soma2 = line2 + line3
  let soma3 = line1 + line3
  let dif1 = Math.abs(line1-line2)
  let dif2 = Math.abs(line3-line2)
  let dif3 = Math.abs(line1-line3)
    if(line1 > soma2 || line1 < dif2){
      ver = false
    } else if (line2 > soma3 || line2 < dif3){
      ver = false
    } else if (line3 > soma1 || line3 < dif1){
      ver = false
    } else {
      ver = true
    }
  return ver
  }
// Desafio 13
function hydrate(string){

}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
