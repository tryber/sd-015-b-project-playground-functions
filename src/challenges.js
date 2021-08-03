// Desafio 1
function compareTrue(a,b) {
  // seu código aqui
  if (a && b) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  return (base * height) / 2;

}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let word = '';
  let result = [];

  for (i = 0; i <= string.length; i += 1) {
    if (string[i] === ' ' || i === string.length) {
      result.push(word);
      word = '';
    } else {
      word += string[i];
    }
  }

  return result;
}

// Desafio 4
function concatName(stringArray) {
  // seu código aqui
  // Vou precisar criar uma variável que adiciona o último item da string e o primeiro item da string, não preciso de for para isso
  let string = '';
  string += stringArray[stringArray.length-1], string += ', ', string += stringArray[0];
  return string
}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  // Preciso criar as variáveis winPoints para traduzir a quantidade de vitórias em vezes 3. Depois, só somar winPoints com ties e retornar o resultado.
  let winPoints = wins * 3;
  return winPoints + ties;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  // Criar um for que recebe o maior valor em uma variável, e no final do for com um if ele abre outro for que calcula a quantidade de vezes que foi repetido.
  let highestNumber = Math.max(...array);
  let repeat = 0;

  for (number of array) {
    if (number === highestNumber) {
      repeat += 1;
    }
  }
  
  return repeat;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
  // Escrever uma função para descobrir qual das variáveis entre cat1 e cat2 está mais próxima do número que está em mouse. Caso a distância seja a mesma, eles trombam.
  // Tem uma maneira bem mais fácil de fazer isso com for mas queria testar essa maneira que fiz.
  let dCat1 = 0;
  let dCat2 = 0;

  if (cat1 > mouse) {
    // for diminuindo para cat 1
    for (i = cat1; i > mouse; i -= 1) {
      dCat1 += 1;
    }
  } else {
    // for aumentando para cat 1
    for (i = cat1; i < mouse; i += 1) {
      dCat1 += 1;
    }
  }
  
  if (cat2 > mouse) {
    // for diminuindo para cat 2
    for (i = cat2; i > mouse; i -= 1) {
      dCat2 += 1;
    }
  } else {
    // for aumentando para cat 2
    for (i = cat2; i < mouse; i += 1) {
      dCat2 += 1;
    }
  }

  console.log(dCat1, dCat2)

  if (dCat1 > dCat2) {
    return 'cat2';
  } else if (dCat2 > dCat1) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }

}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  // Basicamente um for que divide do 2 até o número atual e caso o resultado da divisão for um número inteiro, ele retorna um resultado diferente.
  let result = [];

  for (i = 0; i < array.length; i += 1) {
    if (Number.isInteger(array[i] / 3) && Number.isInteger(array[i] / 5)) {
      result.push('fizzBuzz')
    } else if (Number.isInteger(array[i] / 3)) {
      result.push('fizz')
    } else if (Number.isInteger(array[i] / 5)) {
      result.push('buzz')
    } else {
      result.push('bug!')
    }
  }

  return result;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let result = '';
  let code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }

  // Um for que checa cada letra, e outro for dentro do for que vai ser um for in que chega cada chave do objeto, e compara a chave para a letra. Se a letra for a mesma, ela transplanta a tradução. Se não tiver nenhuma letra que combina, ela apenas retorna a letra da string.
  for (i = 0; i < string.length; i +=1) {
    for (key in code) {
      if (code.hasOwnProperty(string[i])) {
        if (key === string[i]) {
          result += code[key];
        }
      } else {
        result += string[i];
        break;
      }
    }
  }

  return result;
}
function decode(string) {
  // seu código aqui
  // seu código aqui
  let result = '';
  let code = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  }

  for (i = 0; i < string.length; i +=1) {
    for (key in code) {
      if (code.hasOwnProperty(string[i])) {
        if (key === string[i]) {
          result += code[key];
        }
      } else {
        result += string[i];
        break;
      }
    }
  }

  return result;
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

console.log(splitSentence('foguete'));
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(footballPoints(14,8));
console.log(highestCount([0, 0, 0]));
console.log(catAndMouse(1,0,2));
console.log(fizzBuzz([2, 15, 7, 9, 45]))
console.log(encode("this is a test to see if it works!"))
console.log(decode("th3s 3s 1 t2st t4 s22 3f 3t w4rks!"))