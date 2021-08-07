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
        return 2;
      }
  }
  return 3;
}

function verTamanhos(n) {
  if(n.length === 11) {
    return 3;
  }
  return 0; 
}

function verMaiorMenor(n) {
  let resultado = 0;
  if((Math.max(...n) > 9) || (Math.min(...n) < 0)) {
    resultado = 1;
  } else {
    resultado = 3;
  }
  return resultado;
}
function generatePhoneNumber(numeros) {
  let resultado = [];
  let resultadoFinal = "";
  resultado.push(verTamanhos(numeros));
  resultado.push(verMaiorMenor(numeros));
  let listaArrumada = numeros.join("");
  resultado.push(verOcorrencias(listaArrumada));
  let resultadosPossiveis = ["Array com tamanho incorreto.", "não é possível gerar um número de telefone com esses valores", "não é possível gerar um número de telefone com esses valores"];
  resultadoFinal = `(${listaArrumada.slice(0,2)}) ${listaArrumada.slice(2,7)}-${listaArrumada.slice(7)}`;
  for (let i = 0; i < resultado.length; i += 1) {
    if(resultado[i] === i) {
      return resultadosPossiveis[i];
    }
  }
  return resultadoFinal; 
}

// Desafio 12
// a < b+c && a> Math.abs(b-c)
function medidas (x,y,z) {
  let a = ((x < y+z) && (x > Math.abs(y-z)));
  let b = ((y < x+z) && (y > Math.abs(x-z)));;
  let c = ((z < y+x) && (z > Math.abs(y-x)));;
  return (a===b===c);
}
function triangleCheck(lineA, lineB, lineC) {
  return medidas(lineA, lineB, lineC);
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
