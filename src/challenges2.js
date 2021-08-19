// Desafio 10
function techList(a,name) {
  function OrdenaArray (a, b) {
    if (a.tech > b.tech) {
      return 1;
    }
  }
 let arrayOfObjetcs = []

  for (let i = 0; i < a.length; i++){
   arrayOfObjetcs.push( { 
      tech: a[i],
      name: name
    },)
  }

  if (a.length > 0){
return  arrayOfObjetcs.sort(OrdenaArray)
  } else {
 return "Vazio!"
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
