// Desafio 10
// receber array tecnologias e nome da pessoa
// criar um objeto para cada tecnologia com o nome da pessoa
function techList(array, name) {
  array.sort();
  let tecnologias = [];
  if (array == false){
    tecnologias = 'Vazio!';
  }
  for(let valores of array){
    tecnologias.push({tech: valores, name: name})
  }
return tecnologias;
}
//Desafio 11

function generatePhoneNumber(array) {
  let output = '';
  //let base = 3;
  if (array.length != 11) {
    output = 'Array com tamanho incorreto.';
  }
  function quantidadeRepetida(array) {
    let contador = 0;
    let repetido = 0;
    let repetições = 1;
    for (let i = 0; i < array.length; i += 1){
        for (let j = 0; j < i; j += 1){
            if (array[i] === array[j]){
                contador += 1;
            }
            if (repetido  < contador){
                repetido = contador;
                repetições += 1;
            }
        }
      contador = 0;
    }
    return  repetições 
   
  }
  
  for (let index = 0; index < array.length; index += 1) {
    if (array.length != 11) {
      output = 'Array com tamanho incorreto.';
    } else if (quantidadeRepetida(array) >= 3){
      output = 'não é possível gerar um número de telefone com esses valores';
      break
    }  else if (array[index] < 0 || array[index] > 9){
      output = 'não é possível gerar um número de telefone com esses valores';
      break
    } else {
      output = '(' + array[0] + array[1] + ')' + ' ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10] 
    }

  }
  return output
  
}
// Desafio 12

function triangleCheck(lineA, lineB, lineC) {
  let output = '';
  if (((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))) || ((lineB < lineC + lineA) && (lineB > Math.abs(lineC - lineA))) || ((lineC < lineA + lineB) && (lineC > Math.abs(lineA - lineB)))){
    output = true;
  } else {
    output = false;
  }
 return output
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
