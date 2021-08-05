// Desafio 8
function divisorTest(dividend, divider) {
  return dividend % divider === 0;
}

function ifFizzBuzz(dividend, divider) {
  if (divisorTest(dividend, divider) === true) {
    return 'fizzBuzz';
  }
}

function ifFizz(dividend, divider) {
  if (divisorTest(dividend, divider) === true) {
    return 'fizz';
  }
}

function ifBuzz(dividend, divider) {
  if (divisorTest(dividend, divider) === true) {
    return 'buzz';
  }
}

function ifBug(dividend, divider) {
  if (divisorTest(dividend, divider) === false) {
    return 'bug!';
  }
}

function fizzBuzz(a) {
  let resultado = [];
  for (let i = 0; i < a.length; i += 1) {
    resultado.push(ifFizzBuzz(a[i], 15));
    break;
    resultado.push(ifFizz(a[i], 3));
    resultado.push(ifBuzz(a[i], 5));
    resultado.push(ifBug(a[i], 15));
  }
  return resultado;
}
console.log(fizzBuzz([15, 15]));
