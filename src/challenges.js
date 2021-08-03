// Desafio 1
function compareTrue(boolean_1, boolean_2) {
  if((boolean_1 && boolean_2) === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(phrase) {
  split_phrase = phrase.split(" ");
  return split_phrase;
}

// Desafio 4
function concatName(name_array) {
  return_string = name_array[name_array.length - 1].concat(", ", name_array[0]);
  return return_string;
}

// Desafio 5
function footballPoints(wins, ties) {
  total_points = (wins * 3) + ties;
  return total_points;
}

// Desafio 6
function highestCount(numbers_array) {
  let highest_number = Number.NEGATIVE_INFINITY;
  let counter = 0;
  for(number of numbers_array) {
    if(number > highest_number) {
      highest_number = number;
    }
  }
  for (number of numbers_array) {
    if(number === highest_number) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let d_cat1 = Math.abs(cat1 - mouse);
  let d_cat2 = Math.abs(cat2 - mouse);
  if (d_cat1 < d_cat2) {
    return "cat1";
  } else if (d_cat2 < d_cat1) {
    return "cat2";
  } else if (d_cat2 === d_cat1) {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(numbers_array) {
  let return_array = [];
  for(number of numbers_array) {
    if(((number % 3) === 0) && ((number % 5) === 0)) {
      return_array.push("fizzBuzz");
    } else if((number % 3) === 0) {
      return_array.push("fizz");
    } else if ((number % 5) === 0) {
      return_array.push("buzz");
    } else {
      return_array.push("bug!");
    }
  }
  return return_array;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
