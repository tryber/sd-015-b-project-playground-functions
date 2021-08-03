function splitSentence(string) {
  let array = [];
  let word = '';
  console.log(string.length);
  for (let index in string) {
    if (string[index] === ' ') {
      array.push(word);
      word = '';
    } else if (parseInt(index) === string.length - 1) {
      word += string[index];
      array.push(word);
    } else {
      word += string[index];
    }
  }

  console.log(array);
  return array;
}
splitSentence('vamo que vamo');