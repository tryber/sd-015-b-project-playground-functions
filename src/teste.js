
let string = '8poas 9 sakndk 5 as4'
let numstr = string.match(/\d+/g)
let numbers = []
let soma = 0

for (let index of numstr) {
    numbers.push(parseInt(index))
}

for (let cont in numbers) {
    soma += numbers[cont] 
  }

console.log(numbers)