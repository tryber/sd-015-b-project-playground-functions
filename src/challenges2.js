// Desafio 10
// funcao .sort retirada da documentacao: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function techList(array,name) {
  let listaSaida = [];
  if(array.length === 0){
    return "Vazio!"
  }

  else {
    for (let tech in array) {
    array.sort();
    obj = {
      tech: "NomeTech",
      name: name
      }
    obj.tech = array[tech];
    listaSaida.push(obj);
    }
  }
  return listaSaida;
  // return listaSaida;
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(array) {

  // seu código aqui
  // verifica se o array tem tamanho diferente de 11;
if(array.length !== 11){
return  "Array com tamanho incorreto.";
  }
  // verifica se algum numero e maior que 9, menor que 0 ou repete mais que 3 vezes;
for(i = 0 ; i < array.length ; i += 1){
  let countRepeat = 0;
  for(r = 0 ; r <array.length ; r += 1){
    if (array[i] === array[r]){
      // let countRepeat = 0;
      countRepeat += 1;
    }
    else if (array[i] < 0 || array[i] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }  
  }
  if (countRepeat >= 3) {
    return "não é possível gerar um número de telefone com esses valores";
  }
}
let phoneNumber = "(" + array[0]+array[1]+") "+array[2]+array[3]+array[4]+array[5]+array[6]+"-"+array[7]+array[8]+array[9]+array[10];
return phoneNumber;  
}

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  if (lineA < lineB+lineC && lineB< lineA+lineC && lineC< lineA+lineB) {
    return true;
  }
  else if(lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA-lineC) && lineC > Math.abs(lineA-lineB)) {
    return true;
  }
  else {
    return false;
  }
  // seu código aqui
}

// Desafio 13
// regularExpression e string.match retirada de explicacoes deste video: https://www.youtube.com/watch?v=pfkkdzeyx6U&ab_channel=AllThingsJavaScript%2CLLC
function hydrate(string) {
  let regularExpression = /\d+/g;
  let numbers = string.match(regularExpression)
  let result = 0; 
  for (i = 0 ; i < numbers.length ; i += 1) {
    result += parseInt(numbers[i])
    
  }
  if (result > 1){
  return result +" copos de água"
  }
  else {
  return result +" copo de água"
  }
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
