// Desafio 11
 let numeberArray = [1, 2, 3, 4, 1, 6, 7, 8, 9, 0, 1,1]; 

function generatePhoneNumber(array) {
console.log(array);

if (array.length !== 11 ){
  return "Array com tamanho incorreto."
}

for (let index = 0; index < array.length; index =+1) {
  if(array[index] < 0 || array[index] > 9 ) {
  return 'não é possível gerar um número de telefone com esses valores' 
  }

  let count = 1;

  for (let index2 = index+1; index2 < array.length; index2 =+1) {
    if (array[index] === array[index2]){
      count = count +1;
    }
  }

  if (count >= 3) {
    return 'não é possível gerar um número de telefone com esses valores'
  }

  //(12) 34567-8901

 return 'oi'  

}

let phone = `(${numeberArray[0]}${numeberArray[1]}) ${numeberArray[2]}${numeberArray[3]}${numeberArray[4]}${numeberArray[5]}
${numeberArray[6]}-${numeberArray[7]}${numeberArray[8]}${numeberArray[9]}${numeberArray[10]}`
return phone;

  // seu código aqui
}


console.log(generatePhoneNumber(numeberArray));