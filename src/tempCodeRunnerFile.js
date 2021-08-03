function fizzBuzz(vetor) {
  let vec = []
  for (number of vetor) {
    if (number % 3 ===0 && number % 5 ===0) {
      vec.push("fizzBuzz")
    }
    else if (number % 3 ===0) {
      vec.push("fizz")
    }
    else if (number % 5 ===0) {
      vec.push("buzz")
    }
    
    else {
      vec.push("bug!")
    }
  }
  return vec
}
console.log(fizzBuzz([2, 15, 7, 9, 45],));