// Desafio 10
function techList(a,name) {
 

 let arrayLenguages = []

  for (let i = 0; i < a.length; i++){
   arrayLenguages.push( a[i]);
  arrayLenguages.sort()
  }

  let arrayOfObjetcs = []

  for (let index = 0; index < arrayLenguages.length; index+=1){
    arrayOfObjetcs[index] = {
      tech: arrayLenguages[index],
      name: name
    }
    }
    
    if (arrayOfObjetcs.length === 0){
      return "Vazio!"
    } else {
     return arrayOfObjetcs
    }
  
  }
techList(["React", "Jest", "HTML", "CSS", "JavaScript"]
,"Lucas")

// Desafio 11
function generatePhoneNumber(a) {


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
