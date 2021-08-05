let array = [1, 2, -3, 4, 0, 6, 7, 8, 9, 9, 0];
let resultado = '';
if (array.length !== 11) {
  console.log('não é possível gerar um número de telefone com esses valores');
}
let teste = [];
for (let index = 0; index < 11; index += 1) {
  teste.push(array[index]);
}

for (let index = 0; index < 11; index += 1) {
  if (array[index] < 0 || array[index] > 10 || array.sort()[index] === array.sort()[index + 2]) {
    console.log('não é possível gerar um número de telefone com esses valores');
    break;
  } else if (index === 0) {
    resultado += `(${teste[index]}`;
  } else if (index === 2) {
    resultado += `) ${teste[index]}`;
  } else if (index === 7) {
    resultado += `-${teste[index]}`;
  } else {
    resultado += teste[index];
  }
}
console.log(resultado);
