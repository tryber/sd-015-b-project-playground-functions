//let arr = [2, 15, 7, 15, 9];
// let fizzBuzz = [];
// for (let i = 0; i <= array.length; i += 1) {
//   if (array[i] % 3 === 0) {
//     console.log("fizz");
//   } else if (array[i] % 5 === 0) {
//     console.log("buzz");
//   } else if (array[i] % 3 === 0 && array[i] % 5 === 0) {
//     console.log("fizzBuzz");
//   } else {
//     console.log("bug!")
//   }
//   fizzBuzz.push();
// }
// console.log(fizzBuzz);
let dataset = [2, 8, 4, 8, 6, 4, 7, 8];

let max = Math.max(...dataset);
let count = dataset.filter(x => x === max).length;
// var count = dataset.reduce(function (counter, value) {
//   return counter + (value === max);
// }, 0);
console.log(count);