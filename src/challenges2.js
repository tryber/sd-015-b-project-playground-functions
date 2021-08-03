// Desafio 10
function techList(names, name) {
  // seu código aqui
  if (names.length > 0) {
    let lista = [];
    names = names.sort();
    for (tecnologia of names) {
      lista.push({ tech: tecnologia, name: name });
    }
    return lista;
  } else {
    return 'Vazio!';
  }
}

// Desafio 11
function generatePhoneNumber(phone) {
  // seu código aqui
  let phoneLength = phone.length;
  let quantidades = {};
  let numero = '';
  if (phoneLength !== 11) {
    return 'Array com tamanho incorreto.';
  } else {
    for (let index = 0; index < phoneLength; index += 1) {
      let algarismoAtual = phone[index];

      if (quantidades[algarismoAtual] === undefined){
        quantidades[algarismoAtual] = 0;
      }

      quantidades[algarismoAtual] += 1;

      if (
        quantidades[algarismoAtual] >= 3 ||
        algarismoAtual > 9 ||
        algarismoAtual < 0
      ) {
        return 'não é possível gerar um número de telefone com esses valores';
      } else {
        if (index === 0) {
          numero += '(';
        }

        numero += algarismoAtual;

        if (index === 1) {
          numero += ') ';
        } else if (index === 6){
          numero += "-";
        }
      }
    }
    return numero;
  }
}
console.log(generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]));
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
