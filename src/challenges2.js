// Desafio 10
function techList(tech, name) {
  if (tech.length <= 0){
    return 'Vazio!'
  }
  let newArray = [];
  let techSort = tech.sort();

  for (let index = 0; index < techSort.length; index += 1) {
    let objList = {
      tech: techSort[index], 
      name,
    };
    
    newArray.push(objList);
    
}
  return newArray;
  // seu código aqui
}
//console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));


// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}
// Desafio 13
function hydrate(string) {
  // seu código aqui
  
  //thenum = string.match( /\d+/g );
  
  //valores = [int(val) for val in thenum]

}
//console.log(hydrate(' 1cachaça, 5 cervejas e  1copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};