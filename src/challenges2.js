// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
    let phoneNumber = '';
  
    if (array.length !== 11) {
      return 'Array com tamanho incorreto.';
    }
  
    for (let index = 0; index < array.length; index++) {
      let control = 0;
  
      for (let indice = 0; indice < array.length; indice++) {
        if (array[index] === array[indice]) {
          control++;
        }
      }
  
      if (control >= 3 || array[index] < 0 || array[index] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    for (let index = 0; index < array.length; index++) {
      switch (index) {
        case 0:
          phoneNumber += `(${array[index]}`;
          break;
  
        case 1:
          phoneNumber += `${array[index]}) `;
          break;
  
        case 6:
          phoneNumber += `${array[index]}-`;
          break;
  
        default:
          phoneNumber += `${array[index]}`;
      }
    }
  
    return phoneNumber;
  }

  console.log(generatePhoneNumber('12345678901'));
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
