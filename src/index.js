// Desafio 8
function divisorTest(dividend, divider) {
  return dividend % divider === 0;
}

function ifFizzBuzz(dividend, string) {
  if (divisorTest(dividend, 15)) {
    return string.push('fizzBuzz');
  }
}

function ifFizz(dividend, string) {
  if (divisorTest(dividend, 3) && !divisorTest(dividend, 5)) {
    return string.push('fizz');
  }
}

function ifBuzz(dividend, string) {
  if (divisorTest(dividend, 5) && !divisorTest(dividend, 3)) {
    return string.push('buzz');
  }
}

function ifBug(dividend, string) {
  if (!divisorTest(dividend, 15)) {
    return string.push('bug!');
  }
}

function fizzBuzz(a) {
  let string = [];
  for (let i = 0; i < a.length; i += 1) {
    (ifFizzBuzz(a[i], string));
    (ifFizz(a[i], string));
    (ifBuzz(a[i], string));
    (ifBug(a[i], string));
  }
  return string;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
