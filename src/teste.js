let arrRecebido = [0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 7];
let resultado;
  let continua = true;
  if (arrRecebido.length != 11) {
    resultado = 'Array com tamanho incorreto.';
    continua = false;
  } else if (continua) {
    for (let index1 of arrRecebido) {
      if (index1 < 0 || index1 > 9) {
        resultado = 'não é possível gerar um número de telefone com esses valores';
        continua = false;
      }
    } 
  }
  if (continua) {
    for (let index2 = 0; index2 < 10; index2 += 1) {
      let contador = 0;
      for (let index3 of arrRecebido) {
        if (index2 === index3) {
          contador += 1;
        }
      }
      if (contador > 2) {
        resultado = 'não é possível gerar um número de telefone com esses valores';
        continua = false;
      }
    }
    if (continua) {
      resultado = '(' + arrRecebido[1] + arrRecebido[2] + ') uashdasuhd'
    }
    console.log(resultado)
  }

