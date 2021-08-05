let array = [6, 1, 9, 8, 2, 0, 4, 1, 3, 6, 2];

if (array.length !== 11) {
  console.log('Array com tamanho incorreto.');
}
let teste = [];
let resultado = '';
for (let index = 0; index < 11; index += 1) {
  teste.push(array[index]);
}
teste.sort();

for (let index = 0; index < array.length; index += 1) {
  if (teste[index] === teste[index + 2]) {
    console.log('não é possível gerar um número de telefone com esses valores');
  }
  if (teste[index] < 0) {
    console.log('não é possível gerar um número de telefone com esses valores');
  }
  if (teste[index] > 9) {
    console.log('não é possível gerar um número de telefone com esses valores');
  }
}

resultado = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;

console.log(resultado);
