// Desafio 10
function techList(a,name) {
 let arrayOfObjetcs = []

  for (let i = 0; i < a.length; i++){
   arrayOfObjetcs.push( { 
      tech: a[i],
      name: name
    },)
  }

  if (a.length > 0){
console.log( arrayOfObjetcs.sort())
  } else {
 console.log("Vazio!")
  }
  
}
techList(["React", "Jest", "HTML", "CSS", "JavaScript"]
,"Lucas")

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
