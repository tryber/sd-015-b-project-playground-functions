// Desafio 10
function arrayToObjectArray(arr, name) {
  let arrayDeObj = [];

  for (const value of arr) {
    let obj = {};
    obj.tech = value;
    obj.name = name;        
    arrayDeObj.push(obj);
  }
  return arrayDeObj;
}

function techList(arr, name) { 
  let arrayDeObj = arrayToObjectArray(arr, name);

  if (arr.length > 0) {
    arrayDeObj;
  } else {
    return 'Vazio!';
  }
  arrayDeObj.sort(function(a, b,) {
    if(a.tech < b.tech) {
      return -1;
    } else {
      return true;
    }
  });
  return arrayDeObj;
}
// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'israel'));
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
