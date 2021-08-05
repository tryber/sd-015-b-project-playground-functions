// Desafio 10
function techList(array, name) {
  let list = [];
  if(array.length == 0) {
    return "Vazio!"
  } else {
    let sortArray = array.sort();
    for (const keys in sortArray){
      let objects ={
        "tech":sortArray[keys],
        "name":name,
      }
      list.push(objects);
    }
    return list;
  }
} console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],
"Lucas"));


// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA >= lineB + lineC || lineB >= lineA + lineC || lineC >= lineB + lineA) {
    return false;
  }
  return true;
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
