let a = 10;
let b = 14;
let c = 8;

function triangleCheckBigger (a, b, c) {
  if (a < (b + c) && b < (a + c) && c < (a + b)) {
    return true;
  } return false;
}

function triangleCheckSmaller (a, b, c) {
  if (a > Math.abs(b - c) && b > Math.abs(a - c) && c > Math.abs(a - b)) {
    return true;
  } return false;
}

function triangleCheck(lineA, lineB, lineC) {
  let bigger = triangleCheckBigger(lineA, lineB, lineC);
  let smaller = triangleCheckSmaller(lineA, lineB, lineC);
  if (bigger === true && smaller === true) {
    return true;
  } return false;
} 

console.log(triangleCheck(a, b, c));
