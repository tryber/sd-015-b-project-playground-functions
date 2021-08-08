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



// Desafio 11
// '(' + [0] + [1] + ')' + ' ' + [2] + [3] + [4] + [5] + [6] + '-' + [7] + [8] + [9] + [10] 
function generatePhoneNumber(array) {
  let output = '';
  function quantidadeRepetida(input) {
    let repetido = 0;
    let contador = 0;
    for (let i in input){
        for (let j in input){
            if (input[i] === input[j]){
                repetido = input[i]
            }
        }
    }
    for (let key in input){
        if (input[key] === repetido)
        contador += 1;
    }
    
    return  contador
  }
  for (let index = 0; index < array.length; index += 1) {
    if (quantidadeRepetida(array) >= 3){
      output = 'não é possível gerar um número de telefone com esses valores';
      // output = 'não é possível gerar um número de telefone com esses valores'
    } else if (array.length > 11 || array.length < 11) {
      output = 'Array com tamanho incorreto';
      break
    } else if (array[index] < 0 || array[index] > 9){
      output = 'não é possível gerar um número de telefone com esses valores';
      break
    } else {
      output = '(' + array[0] + array[1] + ')' + ' ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10] 
    }
  }
  return output
}
let teste = [1, 2, 3, 4, 5, 6, 7, 18, 9, 0, 1]
console.log(generatePhoneNumber(teste));
// Desafio 12
// a + b > c &&
function triangleCheck(lineA, lineB, lineC) {
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
