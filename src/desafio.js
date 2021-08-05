// let numero = [];

// function generatePhoneNumber(arr) {
//   let phoneNumber = '(' + arr[0] + arr[1] + ') ';
//   let controle = [];

//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] < 0 || arr[index] > 9) {
//       console.log(
//         'não é possível gerar um número de telefone com esses valores'
//       );
//       // return 'não é possível gerar um número de telefone com esses valores';
//     } else if (arr.length !== 11) {
//       console.log('arr com tamanho incorreto.' + 'Verificação correta');
//       // return 'arr com tamanho incorreto.';
//     }

//     phoneNumber = phoneNumber + arr[index];
//     controle.push(arr[index]);

//     switch (controle.length) {
//       case 5:
//         phoneNumber = phoneNumber + '-';
//         break;
//     }
//   }

//   console.log(phoneNumber);
//   return phoneNumber;
// }

// generatePhoneNumber(numero);

// let vetor = [8, 8, 7, 7, 7];
// let bla = 0;

// vetor.filter(function (positionInarr, comparePositions) {
//   if (vetor) console.log('bla');
//   bla++;
// });

// console.log(newVetor);

let arr = [];

for (let index = 0; index < arr.length; index++) {
  let control = arr;

  if (arr[index] < 0 || arr[index] > 9) {
    console.log('não é possível gerar um número de telefone com esses valores');
    // return 'não é possível gerar um número de telefone com esses valores';
  } else if (control.length !== 11) {
    console.log('arr com tamanho incorreto.' + 'Verificação correta');
    console.log('oi');
    console.log(arr);
    // return 'arr com tamanho incorreto.';
  }

  // phoneNumber = phoneNumber + arr[index];
  // controle.push(arr[index]);
}
