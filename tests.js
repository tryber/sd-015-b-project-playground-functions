let encodedString = '';
let string = 'hi there!';  

for (let i in string) {
  switch (string[i]) {
    case 'a':
      encodedString += '1';
      break;
    case 'e':
      encodedString += '2';
      break;
    case 'i':
      encodedString += '3';
      break;
    case 'o':
      encodedString += '4';
      break;
    case 'u':
      encodedString += '5';
      break;
    default:
      encodedString += string[i];
      break;
  }
}

console.log(encodedString);