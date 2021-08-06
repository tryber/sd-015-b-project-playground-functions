// Desafio 10
function techList(lista, name) {
  let tecnologias = lista.sort();
  let novoObjeto = [];
  if(lista.length) {
    for (let i = 0; i < lista.length; i++) {
      novoObjeto.push({tech: tecnologias[i], name: name});
    }
    return novoObjeto;
  }
  return "Vazio!";
}

// Desafio 11
function verOcorrencias(n) {
  let cont = 0;
  for (let i = 0; i < n.length; i++) {
      cont = n.split(n[i]).length - 1;
      if(cont >= 3) {
        return "não é possível gerar um número de telefone com esses valores";
      }
  }
  return 2;
}

function verTamanhos(n) {
  if(n.length === 11) {
    return 2;
  }
  return 0; 
}

function verMaiorMenor(n) {
  let resultado = 0;
  console.log(n);
  if((Math.max(...n) > 9) || (Math.min(...n) < 0)) {
    resultado = 1;
  } else {
    resultado = 2;
  }
  return resultado;
}
function generatePhoneNumber(numeros) {
  let resultado = "";
  resultado = verTamanhos(numeros);
  if (resultado === 0) {
    return "Array com tamanho incorreto.";
  }
  resultado = verMaiorMenor(numeros);
  if (resultado === 1) {
    return "não é possível gerar um número de telefone com esses valores"
  }
  let listaArrumada = numeros.join("");
  resultado = verOcorrencias(listaArrumada);
  if(resultado === 2) {
    resultado = `(${listaArrumada.slice(0,2)}) ${listaArrumada.slice(2,7)}-${listaArrumada.slice(7)}`; 
  } 
  return resultado; 
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
