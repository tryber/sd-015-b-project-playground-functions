// Desafio 6
function highestCount(numbers) {
    highestNumber = 0;
    cont = 0;
    let finalCont = 0
   for (let index = 0; index < numbers.length; index++){
       if (numbers[index] > highestNumber){
           highestNumber = numbers[index];
       }
   }
   for (let index = 0; index < numbers.length; index++){
        if (numbers[index] === highestNumber){
            cont = cont + 1;
        }
   }
   finalCont = cont;
   console.log(finalCont);
}



  highestCount([9, 1, 2, 3, 9, 5, 7]);
  highestCount([0, 4, 4, 4, 9, 2, 1]);
  highestCount([0, 0, 0]);
  highestCount([-2, -2, -1]);