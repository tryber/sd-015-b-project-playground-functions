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
function generatePhoneNumber() {
  // seu código aqui
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

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"))