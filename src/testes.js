// Desafio 11
function generatePhoneNumber(numbers) {
  let phoneNumber = '(xx) xxxxx-xxxx';
  for (let i = 0; i < numbers.length; i += 1) {
    phoneNumber = phoneNumber.replace('x', numbers[i]);
    if (numbers[i] < 0 || numbers[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto';
  }
  return phoneNumber;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1];

console.log(generatePhoneNumber(numbers));
