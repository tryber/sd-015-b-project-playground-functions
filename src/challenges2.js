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
  // seu código aqui
}
//console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

//let numeberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
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
  
    //(12) 34567-8901
  
  }
  
let phone = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}
  ${numberArray[6]}-${numberArray[7]}${array[8]}${array[9]}${array[10]}`
  return phone
  // seu código aqui
}
//console.log(generatePhoneNumber([1, 2, 3, 1, 5, 6, 7, 8, 9, 0, 9 ]))

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