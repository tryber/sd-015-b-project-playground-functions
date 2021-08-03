function encode(str) {
  string = str.split('')
  let strings = []
  for (letter of string) {
    if (letter === 'a') {
      strings.push('1')
    }
    else if (letter === 'e') {
      strings.push('2')
    }
    else if (letter === 'i') {
      strings.push('3')
    }
    else if (letter === 'o') {
      strings.push('4')
    }
    else if (letter === 'u') {
      strings.push('5')
    }
    else{
      strings.push(letter)
    }

  }
  console.log(strings.join(''));
  return strings.join('')
}
console.log(encode("hi there!"));