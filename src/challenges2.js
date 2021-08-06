// Desafio 10
// De acordo com resposta do usuário bfavaretto em
// https://stackoverflow.com/questions/15907052/trying-to-add-multiple-properties-to-javascript-object-using-a-loop
function techList(tech, name) {
  let tecnologiaNome = [];
  tech.sort();
  if (tech.length === 0) {
    tecnologiaNome = 'Vazio!';
  } else {
    for (let i = 0; i < tech.length; i += 1) {
      tecnologiaNome.push({
        tech: tech[i],
        name,
      });
    }
  }
  return tecnologiaNome;
}

// Desafio 11
// Sub-funções do desafio 11

function testa0e9(numeroTelefone) {
  for (let i = 0; i < numeroTelefone.length; i += 1) {
    if ((numeroTelefone[i] < 0) || (numeroTelefone[i]) > 9) {
      return -1;
    }
  }
}

function contaRepetidos(numeroTelefone, repetido, i) {
  let contador = 1;
  for (let j = 0; j < numeroTelefone.length; j += 1) {
    if ((i !== j) && (repetido === numeroTelefone[j])) {
      contador += 1;
    }
  }
  return contador;
}
function respostaContador(contador, n) {
  // Testa
  let numeroTelefoneFormatado;
  if (Math.max.apply(Math, contador) > 2) {
    numeroTelefoneFormatado = 'não é possível gerar um número de telefone com esses valores';
  } else {
    numeroTelefoneFormatado = `(${n[0]}${n[1]}) ${
      n[2]}${n[3]}${n[4]}${n[5]}${n[6]}-${n[7]}${n[8]}${n[9]}${n[10]}`;
  }

  return numeroTelefoneFormatado;
}
function testaRepeticao(numeroTelefone) {
  let repetido;
  let contador = [];
  let numeroTelefoneFormatado;
  for (let i = 0; i < numeroTelefone.length; i += 1) {
    repetido = numeroTelefone[i];
    contador[i] = contaRepetidos(numeroTelefone, repetido, i);
  }
  numeroTelefoneFormatado = respostaContador(contador, numeroTelefone);
  return numeroTelefoneFormatado;
}
function generatePhoneNumber(n) {
  let numeroTelefoneFormatado;
  let teste0e9;
  if (n.length !== 11) {
    numeroTelefoneFormatado = 'Array com tamanho incorreto.';
  } else {
    // Teste do 0 e 9
    teste0e9 = testa0e9(n);
    if (teste0e9 === -1) {
      numeroTelefoneFormatado = 'não é possível gerar um número de telefone com esses valores';
    } else {
      numeroTelefoneFormatado = testaRepeticao(n);
    }
    // Teste da repetição
  }
  return numeroTelefoneFormatado;
}

// Desafio 12
// Sub-função do desafio 12
function checaCondicao(a, b, c) {
  let soma;
  let diferenca;
  let resultado;

  soma = b + c;
  diferenca = Math.abs(b - c);

  if ((a < soma) && (a > diferenca)) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}
function triangleCheck(lineA, lineB, lineC) {
  // A<B+C e A > abs(B-C)
  // B<A+C e B > abs(A-C)
  // C<A+B e C > abs(A-B)
  let checaCadaLado = [];
  let eTriangulo = false;

  checaCadaLado[0] = checaCondicao(lineA, lineB, lineC);
  checaCadaLado[1] = checaCondicao(lineB, lineA, lineC);
  checaCadaLado[2] = checaCondicao(lineC, lineA, lineB);

  if ((checaCadaLado[0] === true) && (checaCadaLado[1] === true) && (checaCadaLado[2] === true)) {
    eTriangulo = true;
  }
  return eTriangulo;
}

// Desafio 13
// Sub-funções do desafio 13
function mensagem(coposDeAgua) {
  let msg;
  if (coposDeAgua === 0) {
    msg = 'Nenhum copo de água';
  } else if (coposDeAgua === 1) {
    msg = '1 copo de água';
  } else {
    msg = `${coposDeAgua} copos de água`;
  }
  return msg;
}
function hydrate(drinks) {
  // Para se extrair o número de uma string,
  // foi utilizada técnica observada em https://www.codegrepper.com/code-examples/javascript/find+integer+in+string+javascript
  let coposDeBebida = drinks.match(/\d+/g);
  let copoDeAgua = [];
  let coposDeAgua = 0;

  if (coposDeBebida !== []) {
    for (let i = 0; i < coposDeBebida.length; i += 1) {
      copoDeAgua[i] = parseInt(coposDeBebida[i], 10);
      coposDeAgua += copoDeAgua[i];
    }
  }
  return mensagem(coposDeAgua);
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
