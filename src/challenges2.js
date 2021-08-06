// Desafio 10
function techList(par1, name) {
  let array = [];

  if (par1.length === 0) {
    return 'Vazio!';
  }
  for (let tech of par1.sort()) {
    array.push({ tech, name });
  }
  return array;
}

// Desafio 11 Crie uma função chamada `generatePhoneNumber` que receba uma array com 11 números e retorne um número de telefone, respeitando parênteses, traços e espaços.

/* Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], `generatePhoneNumber` deverá retornar `(12) 34567-8901`.

- Se a função receber um array com tamanho diferente de 11, a mesma deve retornar `"Array com tamanho incorreto."`.

- Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, `generatePhoneNumber` deverá retornar a string `"não é possível gerar um número de telefone com esses valores"`. */
function generatePhoneNumber(numerosTelefone) {
  if (numerosTelefone < 11) {
    return 'Array com tamanho incorreto'
  };
  else if (numerosTelefone)
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
