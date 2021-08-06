// Desafio 10
function techList(arr, name) {
  let obj = {};
  let arrayDeObj = [];

  if (arr.length > 0) {
    for (const value of arr) {
      obj['tech'] = value;
      obj['name'] = name;  
      //arrayDeObj = obj;
      arrayDeObj.push(obj);
      for (const key in obj) {
        obj.tech = value;
      }
    }
  } else {
    return 'Vazio!';
  }
  return arrayDeObj;
}
//console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'israel'));
// Desafio 11
function generatePhoneNumber(arr) {
  arr.split('-', 3)//.join('');
  return arr
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))
// Desafio 12
function triangleCheck(la, lb, lc) {
  let result = false;

  if ((la < (lb + lc)) && (lb < (la + lc)) && (lc < (la + lb))){
    if ((la > Math.abs(lb - lc)) && (lb > Math.abs(la - lc)) && (lc > Math.abs(la - lb))) {
      result = true;
    } else {
      result;
    }
  } else {
    result;
  }
  return result;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
