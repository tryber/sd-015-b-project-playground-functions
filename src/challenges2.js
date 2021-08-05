// Desafio 10
function techList(wantToLearn, name) {
  let list = []
  wantToLearn.sort()
  for (let index = 0; index < wantToLearn.length; index += 1) {
    let object = {}
    object["tech"] = (wantToLearn[index])
    object["name"] = (name)
    list.push (object)
  } 
  if (wantToLearn.length > 0) {
    return list;
  } else {
    return "Vazio!"
  }
}
  
 console.log (techList([], "Lucas"))

// Desafio 11
function generatePhoneNumber(array) {
  function check(array) {
    if (array.length !== 11) {
      return false
    };
  }
  function check2(array) {
    let check = 0
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] > 9 || array[index] < 0) {
        check = false
      } 
    } return check;
  } 
  function check3(array) {
    let count = 0
    for (let index = 1; index < 10; index += 1) {
      for (let i = 0; i <= array.length; i += 1){
        if (index === array[i]) {
          count += 1
        }
      } if (count >= 3) {
        count = false
        break
      } else {
        count = 0
      }
    } return count
  }
  let phoneNumber = "(" + array[0] + array[1] + ")" + array[2] + array[3] + array[4] + array[5] + array[6] + "-" + array[7] + array[8] + array[9] + array[10]
  if (check(array) === false) {
    return "Array com tamanho incorreto."
  } else if (check2(array) === false || check3(array) === false) {
    return "não é possível gerar um número de telefone com esses valores"
  } else {
    return phoneNumber
  }
}; 
  


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > lineB - lineC && lineB < lineA + lineC && lineB > lineA - lineC && lineC < lineB + lineA && lineC > lineB - lineA) {
    return true;
  } else {
    return false;
  }
};

// Desafio 13

function hydrate(string) {
  let regex = /\d+/g;
  let result = string.match(regex);
  for (let index = 0; index < result.length; index += 1) {
    result[index] = parseInt(result[index]);
  };
  let coposDeAgua = 0;
  for (let index = 0; index < result.length; index += 1) {
    coposDeAgua += result[index];
  };
  if (coposDeAgua === 1) {
    return coposDeAgua + " copo de água"
  } else {
  return coposDeAgua + " copos de água"
  }
};

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
