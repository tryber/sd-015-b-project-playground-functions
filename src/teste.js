let str = '1 cachaça';
str = str.replace(/\D+/g, '');
console.log(str);
function getNumbers (a) {
  let numbersArray = [];
  for (let key of a) {
    numbersArray.push([key]);
  }
  return numbersArray;
}

function hydrate(str) {
  let numbers = getNumbers(str);
  let soma = 0;
  for (let key of numbers) {
    soma += Number([key]);
}
  if (soma === 1) {
    return `${soma} copo de água`;
  } return `${soma} copos de água`;
}
console.log(hydrate(str));
