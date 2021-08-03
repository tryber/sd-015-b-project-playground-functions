// Desafio 10
function techList(techNames, names) {
  let finalPhrase = [];
  if (techNames.length === 0){
    return "Vazio!"
  }
  else{
    for(let index in techNames){
      techNames.sort();
      let info = {
          tech: techNames[index],
          name: names
        }
      finalPhrase.push(info)
      }
    return finalPhrase;
  }
}

// Desafio 11
function generatePhoneNumber(numbers) {
  function arrayLengthValid(){
    if(numbers.length !== 11){
      return false
    }
  }
  function arrayNumbersValid(){
    let numbers = [2 ,2 ,3 , 5];
    let contador = 0;
    for(let index in numbers){
      if (numbers[index] == numbers[index + 1]){
        contador += 1;
        }
      }
        
      
      console.log(contador);
      if (numbers[index] > 9 || numbers[index] < 0 || contador > 2){
        return false
      }
    }
  }

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if(lineA < (lineB + lineC) && lineA > (Math.abs(lineB-lineC))){
    return true;
  }
  else{
    return false;
  }
}

  


// Desafio 13
function hydrate(drinks) {
  let numberOfDrinks = drinks.match(/[0-9]+/g)
  totalWater = 0;
  for(let index in numberOfDrinks){
    let numberDrinks = parseInt(numberOfDrinks[index]);
    totalWater += numberDrinks;
  }
  if (totalWater == 1){
    return totalWater + " copo de água"
  }
  else{
    return totalWater + " copos de água"
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
