// Desafio 1
function compareTrue(param1, param2) {
  let compareTrue2 = false;
  if (param1 === true && param2 === true) {
    compareTrue2 = true;
  } else {
    compareTrue2 = false;
  }
  return compareTrue2;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(valor) {
  let split = valor.split(' ');
  return split;
}

// Desafio 4
function concatName(valor) {
  let virgulaEspaco = ', ';
  let concatNames = valor[valor.length - 1] + virgulaEspaco + valor[0];
  return concatNames;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(valor) {
  let hitCounts = 0;
  let number = Math.max(...valor);
  for (let key of valor) {
    if (number === key) {
      hitCounts += 1;
    }
  }
  return hitCounts;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let position = 0;
  let position2 = 0;
  if (mouse > cat1 && mouse > cat2) {
    position = mouse - cat1;
    position2 = mouse - cat2;
  } else if (mouse < cat1 && mouse < cat2) {
    position = cat1 - mouse;
    position2 = cat2 - mouse;
  } else if (mouse < cat1 && mouse > cat2) {
    position = cat1 - mouse;
    position2 = mouse - cat2;
  } else {
    position = mouse - cat1;
    position2 = cat2 - mouse;
  }

  if (position === position2) {
    return 'os gatos trombam e o rato foge';
  } else if (position < position2) {
    return 'cat1';
  } else if (position2 < position) {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let fizbuz = [];
  for (let show of array) {
    if (show % 3 === 0 && show % 5 === 0) {
      fizbuz.push('fizzBuzz');
    }
    else if (show % 3 === 0) {
      fizbuz.push('fizz');
    }
    else if (show % 5 == 0) {
      fizbuz.push('buzz');
    }
    else {
      fizbuz.push('bug!');
    }
  }
  return fizbuz;
}

// Desafio 9
function encode(valor) {
  let split = valor.split('');
  let juncao2 = [];
  let retorno = '';
  for (let show of split) {
    if (show === 'a') {
      juncao2.push(1);
    }
    else if (show === 'e') {
      juncao2.push(2);
    }
    else if (show === 'i') {
      juncao2.push(3);
    }
    else if (show === 'o') {
      juncao2.push(4);
    }
    else if (show === 'u') {
      juncao2.push(5);
    }
    else {
      juncao2.push(show);
    }
  }
  return juncao2.join('', retorno);
  
}


function decode(valor) {
  let split = valor.split("");
  let juncao = [];
  let retorno = "";
  for (let show of split) {
    if (show === '1') {
      juncao.push('a');
    }  else if (show === '2') {
      juncao.push('e');
    }  else if (show === '3') {
      juncao.push('i');
    }  else if (show === '4') {
      juncao.push('o');
    }  else if (show === '5') {
      juncao.push('u');
    }  else {
      juncao.push(show);
    }
  }
  return juncao.join('', retorno);
  
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
