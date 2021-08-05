let arr = [2, 15, 7, 15, 9];
let fizzBuzz = [];
for (let i = 0; i <= arr.length; i += 1) {
  if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
    return ("fizz");
  } else if (arr[i] % 5 === 0) {
    return ("buzz");
  } else if (arr[i] % 3 === 0) {
    return ("fizzBuzz");
  } else {
    return ("bug!")
  }
  fizzBuzz.push();
  return fizzBuzz;

}
// divisivel por 3 = fizz
// divisivel por 5 = buzz
// divisivel por 3 e 5 = fizzBuzz primeiro pq ja é eliminatorio
// não for divisivel nem por 5 nem por 3 =  bug! else 