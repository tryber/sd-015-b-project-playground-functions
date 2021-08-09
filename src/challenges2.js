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
      name: name
    };
    
    newArray.push(objList);
    
}
  return newArray;

}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11 ){
    return "Array com tamanho incorreto."
  }
  
  for (let index = 0; index < array.length; index +=1) {
    if(array[index] < 0 || array[index] > 9 ) {
    return 'não é possível gerar um número de telefone com esses valores' 
    }
  
    let count = 0;
  
    for (let index2 = index ; index2 < array.length; index2 +=1) {
      if (array[index] === array[index2]){
        count = count +1;
      }
    }
  
    if (count === 3) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
    
  }
  phone = "("+array.slice(0,2).join("")+") "+array.slice(2,7).join("")+"-"+array.slice(7,11).join("");
  
  return phone
  
}

// Desafio 12
function triangleCheck() { 
    // seu código aqui
}
// Desafio 13
function hydrate(string) {
  theNum = string.match( /\d+/g );
  
  let newArray = theNum.map((index) => Number(index));
  
  const total = newArray.reduce((total, currentElement) => total + currentElement);

  if (total < 2) {
  return total + ' copo de água';
} else {
  return total + ' copos de água';
}
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};