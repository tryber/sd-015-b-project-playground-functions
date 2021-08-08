// Desafio 10
function techList(tech, name) {
  let techLists = [];
  tech.sort(); // .sort() para ordenar os elementos da lista.
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let itemList of tech) {
    techLists.push({ // .push() para acrescentar os novos objetos na lista.
      tech: itemList,
      name,
    });
  }
  return techLists;
}

// Desafio 11
function generatePhoneNumber(n) {
  let phoneNumberConc = `(${n[0]}${n[1]}) ${n.slice(2, 7).join('')}-${n.slice(7, 11).join('')}`;
  let num;
  if (n.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (num of n) {
    let count = 0;
    for (let second = 0; second < n.length; second += 1) {
      if (num === n[second]) {
        count += 1;
      }
      if (count >= 3 || num < 0 || num > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return phoneNumberConc;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumAB = (lineA + lineB);
  let sumBC = (lineB + lineC);
  let sumAC = (lineA + lineC);
  let subAB = Math.abs(lineA - lineB);
  let subBC = Math.abs(lineB - lineC);
  let subAC = Math.abs(lineA - lineC);
  let result;
  if (lineA < sumBC && lineA > subBC) {
    result = true;
  } else if (lineB < sumAC && lineB > subAC) {
    result = true;
  } else if (lineC < sumAB && lineC > subAB) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 13
function hydrate(string) {
  let howManyGlasses = string.replace(/[^0-9]/g, ''); // fonte https://pt.stackoverflow.com/questions/3719/como-obter-apenas-os-n%C3%BAmeros-de-uma-string-em-javascript
  // A expressão [^ 0-9] é usada para encontrar qualquer caractere que NÃO seja um dígito. Os dígitos entre colchetes podem ser quaisquer números ou extensão de números de 0 a 9. Dica: Use a expressão [0-9] para encontrar qualquer caractere entre os colchetes que seja um dígito. E g é de global, ou seja está fazendo uma pesquisa global por números.
  let sum = 0;
  for (let i = 0; i < howManyGlasses.length; i += 1) {
    sum += parseInt(howManyGlasses[i], 10); // parseInt função que analisa uma string e retorna seu valor como um número inteiro.
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
