
//  // Desafio 8
// // function fizzBuzz (numbers) {
// //   let myArray = [] ; 
// //   const rules = {
// //       div3: 'fizz',
// //       div5: 'buzz',
// //       div3And5: 'fizzBuzz',
// //       none: 'bug!',
// //       } 
// //   for (let i = 0; i < numbers.length; i += 1){
// //     if(numbers % 3 === 0 && numbers[i] % 5 === 0){
// //      myArray.push(rules.div3And5);
// //     }else if (numbers[i] % 3 !== 0 && numbers[i] % 5 === 0){
// //      myArray.push(rules.div5)
// //     } else if (numbers[i] % 5 !== 0 && numbers[i] % 3 === 0){
// //      myArray.push(rules.div3)
// //     } else {myArray.push(rules.none)}
// //   }
// //   return myArray
// //   }







// function fizzBuzz(numberArray){
//     let resposta = [];
//     function div3And5(numberArray){
//     for(let index of numberArray){
//       if (numberArray[index] % 3 === 0 && numberArray[index] % 5 === 0){
//           resposta.push('fizzBuzz')
//       }
//     }
//     }
//     function div3(numberArray){
//       for(let index of numberArray){
//         if (numberArray[index] % 3 === 0 && numberArray[index] % 5 !== 0){
//             resposta.push('fizz')
//         }
//       }
//       }
  
//   function div5(numberArray){
//     for(let index of numberArray){
//       if (numberArray[index] % 3 !== 0 && numberArray[index] % 5 === 0){
//           resposta.push('buzz')
//       }
//     }
//     }
//     function none(numberArray){
//       for(let index of numberArray){
//         if (numberArray[index] % 3 !== 0 && numberArray[index] % 5 !== 0){
//             resposta.push('bug!')
//         }
//       }
//       }
    
//         return resposta;
//   }
//   const numberArray = [20,0,15,30,50]
//   console.log(fizzBuzz(numberArray));




//   function fizzBuzz (numbers){
//     var answer = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//       if(numbers[i] % 3 === 0 && numbers[i] % 5 === 0){
//           answer.push('fizzBuzz')
//         } else if(numbers[i] % 3 === 0 && numbers[i] % 5 !== 0){
//           answer.push('fizz')
//         } else if(numbers[i] % 3 !== 0 && numbers[i] % 5 === 0){
//           answer.push('buzz')
//         } else {
//           answer.push('bug!')
//         }
//         return answer;
//     }
//     }
    
//     console.log(fizzBuzz([7, 9]))




function fizzBuzz (numbers){
    let answer = []

  for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0){
      answer.push('fizzBuzz');
    } else{
      if (numbers[index] % 3 === 0){
        answer.push('fizz');
      } else if (numbers[index] % 5 === 0){
        answer.push('buzz');
      } else {
        answer.push('bug!');
      }
    }
  }
  return answer;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));