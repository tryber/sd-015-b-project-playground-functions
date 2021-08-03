// Desafio 10
function techList(wantToLearn, name) {
  let list = []
  wantToLearn.sort()
  for (let index = 0; index < wantToLearn.length; index += 1) {
    let object = {}
    object["tech"] = (wantToLearn[index])
    object["name"] = (name)
    list.push (object)
  } 
  if (wantToLearn.length > 0) {
    return list;
  } else {
    return "Vazio!"
  }
}
  
 console.log (techList([], "Lucas"))

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > lineB - lineC && lineB < lineA + lineC && lineB > lineA - lineC && lineC < lineB + lineA && lineC > lineB - lineA) {
    return true;
  } else {
    return false;
  }
};

// Desafio 13
function hydrate() {
  
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
