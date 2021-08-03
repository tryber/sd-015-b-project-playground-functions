// Desafio 10
let listaTecnologias = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let nome = 'Daniel';
function techList(lista, nome) {
  // seu código aqui

  // Coloca o tamanho do array em uma variável para comparação
  let tamanhoArray = lista.length;
  // console.log(tamanhoArray);

  // Compara o array, Se Vazio, retorna a mensagem
  if (tamanhoArray === 0)
  {
    // console.log('Vazio'); // [DEBUG]
    return 'Vazio!';

  } else {
    // Variável auxiliar que ordena os elementos
    let aux = lista.sort();
    // Variável onde o resultado da ordenação do Array será armazenado, com o nome ao final
    let result = [];
    for (let index of aux)
    {
      // Dá um push do conteúdo do index para dentro da variável result
      result.push( {tech: index, name: nome} );
    }
    // Função Retorna o resultado ordenado
    return result;
  }
}

techList(listaTecnologias, nome);

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
