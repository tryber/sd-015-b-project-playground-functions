// Desafio 10
function techList(array, name) {
  let newArray = []
  let string = 'Vazio!'
  if(array.length === 0){
    return string;
  }
  let sortedArray = array.sort();
  for(count = 0; count < sortedArray.length; count ++){
    let obj = {
      tech: sortedArray[count],
      name: name, 
    };
    newArray.push(obj);
  }

  return newArray;
}  

techList(["React", "Jest", "HTML", "CSS", "JavaScript"],
"Lucas")




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
