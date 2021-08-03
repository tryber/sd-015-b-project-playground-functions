let array = [0, 4, 4, 4, 9, 2, 1];

function moreFrequentNumber(array) {
  let numbers = [];

  for (let index of array) {
    cont = checkNumber(numbers, index);
    if(cont === 0) {
      numbers.push(index);
    }
  }
  return checkRepeated(numbers, array);
}
function checkNumber(array, n) {
 let cont = 0;
  for (let number of array) {
    if (n === number) {
      cont += 1;
    }
  }
  return cont;
}
function checkRepeated(numerosParaChecar, vetorDeNumerosOriginal) {
  let moreFrequent = 0;
  let moreFrequentRep = 0;
  for (let i in numerosParaChecar) {
    let rep = checkNumber(vetorDeNumerosOriginal, numerosParaChecar[i]);
    if (rep > moreFrequentRep) {
      moreFrequent = numerosParaChecar[i];
      moreFrequentRep = rep;
    }
  }
  return moreFrequent;
}
console.log(moreFrequentNumber(array));