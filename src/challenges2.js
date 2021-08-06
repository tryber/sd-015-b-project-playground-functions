// Desafio 10
// Crie uma função de Lista de Tecnologias
function techList(arrayTech, name) {
  let objTechs;
  let pushArray = [];

  if (arrayTech.length < 1) {
    return 'Vazio!';
  } for (let i in arrayTech) {
    arrayTech.sort();
    objTechs = { tech: arrayTech[i], name: name };
    pushArray.push(objTechs);
  }
  return pushArray;
}
// Desafio 11
// Crie uma função de Número de Telefone
function generatePhoneNumber(arrayNumeros) {
  let contador = 0;
  let strigArray = '';
  if (arrayNumeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  } for (let i in arrayNumeros) {
    if (arrayNumeros[i] < 0 || arrayNumeros[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    } for (let i2 in arrayNumeros) {
      if (arrayNumeros[i] === arrayNumeros[i2]) {
        contador += 1;
        if (contador > 2) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    } contador = 0;
  } arrayNumeros.splice(0, 0, '(');
  arrayNumeros.splice(3, 0, ')');
  arrayNumeros.splice(4, 0, ' ');
  arrayNumeros.splice(10, 0, '-');
  strigArray = arrayNumeros.join('');
  return strigArray;
}
// Desafio 12
// Crie uma função de Condição de existência de um triângulo.
function triangleCheck(lineA, lineB, lineC) {
  let dif1 = Math.abs(lineB - lineC);
  let dif2 = Math.abs(lineA - lineC);
  let dif3 = Math.abs(lineA - lineB);
  if (lineA > dif1 && lineB > dif2 && lineC > dif3) {
    return true;
  } return false;
}
// Desafio 13
// Crie uma função de boas vindas ao Bar da Trybe!
function hydrate(stringBebida) {
  let numeroBebidas = stringBebida.match(/[1-9]/g);
  let somaBebidas = 0;
  for (let i in numeroBebidas) {
    somaBebidas += parseInt(numeroBebidas[i]);
  }
  if (somaBebidas <= 1) {
    return somaBebidas + ' copo de água';
  } return somaBebidas + ' copos de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
