function highestCount(vetor) {
  let count = 0
  let maior = -10000;
  for (number of vetor){
    if (number>maior) {
      maior = number
    }
  }
  
  for (number of vetor) {
    if (number === maior) {
      count +=1
    }
  }
  return count
}
console.log(highestCount([1, 9, 2, 3, 9, 5, 7]));