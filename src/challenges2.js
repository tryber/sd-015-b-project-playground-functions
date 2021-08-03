// Desafio 10
function techList(tech,name) {
  // seu código aqui
  // Criar uma variável chamada results que vai ser um array com vários objetos. Depois disso fazer um for que passa por cada elemento do array recebido (tech) e adiciona à um objeto, junto com duas chaves: uma delas sendo a tech em si e a outra chave sendo o nome da pessoa.
  let result = [];
  // Simples comandinho para deixar em ordem alfabética!
  tech.sort();

  // For que coloca tudo em objetos!
  for (i = 0; i < tech.length; i += 1) {
    result.push({ tech: tech[i] });
    result[i]['name'] = name;
  }

  // Caso o array tiver elementos, retorna o resultado, senão retorna vazio.
  if (tech.length > 0) {
    return result;
  } else {
    return 'Vazio!';
  }
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  // Começar com uma variável que cria o DDD com espaço, depois usar um for para gerar o resto dos números e um if dentro do for. Além disso, vou precisar fazer alguns if's no começo e retornar um resultado já caso um if seja sucedido.
  
  if (array.length != 11) { return "Array com tamanho incorreto." }
  for (i = 0; i < array.length; i += 1) {
    let repeats = 1;
    for (i2 = i+1; i2 < array.length; i2 += 1) {
      if (array[i] === array[i2]) {
        repeats += 1;
      }
    }
    if (array[i] < 0 || array[i] > 9 || repeats >= 3) {
      return "não é possível gerar um número de telefone com esses valores"
    }
  }

  let phoneNumber = '(' + array[0] + array[1] + ')' + ' ';

  for (i = 2; i < array.length; i += 1) {
    phoneNumber += array[i];
    if (i === 6) {
      phoneNumber += '-';
    }
  }

  return phoneNumber;

}

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

console.log(generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]))