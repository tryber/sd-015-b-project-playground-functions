// Desafio 10
function techList(array, name) {
  let list = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  let sortArray = array.sort();
  for (const keys in sortArray) {
    let objects = {
      tech: sortArray[keys],
      name: name,
    };
    list.push(objects);
  }
  return list;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function generatePhoneNumber(phone) {
  let result = '';
  if (phone.length > 11 || phone.length < 11) {
    result = 'Array com tamanho incorreto.';
  } else {
    result = `(${phone[0]}${phone[1]}) ${phone[2]}${phone[3]}${phone[4]}${phone[5]}${phone[6]}-${phone[7]}${phone[8]}${phone[9]}${phone[10]}`;
    for (let index = 0; index < phone.length; index += 1) {
      let count = 0;
      if (phone[index] > 9 || phone[index] < 0) {
        result = 'não é possível gerar um número de telefone com esses valores';
      }
      for (let index2 = 0; index2 < phone.length; index2 += 1) {
        if (phone[index] === phone[index2]) {
          count += 1;
        }
        if (count > 2) {
          result = 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA >= lineB + lineC
    || lineB >= lineA + lineC
    || lineC >= lineB + lineA) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  let str = string.match(/\d/g, ' ');
  let result;
  let qtdWater = 0;
  for (let i of str) {
    qtdWater += parseInt(i);
  }
  if (qtdWater === 1) {
    result = (qtdWater + ' copo de água');
  } else if (qtdWater > 1) {
    result = (qtdWater + ' copos de água');
  }
  return result;
} console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
