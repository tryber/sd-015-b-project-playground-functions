let num = [9, 1, 2, 3, 9, 5, 7]



function maior(num) {
  let maior = num[0];
  for (let key in num) {
    if (maior < num[key]) {
      for (let index in num) {
        if (num[key] > num[index]){
          maior = num[key];
        } else {
          maior = num[index];
        }
      }
    }
  }
  return maior
}

function vezesMaior (num) {
  let contador = 0;
  let index = maior(num)
  for (let key in num) {
    if (index === num[key]) {
      contador =+ 1;
    }
  } return contador
}

console.log(vezesMaior())





// function repeatCount (num) {
//   let contador = 0
//   for (let i in num) {
//     for (let j in num) {
//       if (num[i] === num[j]) {
//         contador =+ 1
//       }
//     }
//   }
//   return contador
// }





// function highestCount() {
//   for 
// }
