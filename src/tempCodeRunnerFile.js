function triangleCheck(lineA,lineB,lineC) {
  if (lineA < lineB+lineC && lineA > Math.abs(lineB-lineC)) {
    return true
  }
  else if (lineB < lineA+lineC && lineB > Math.abs(lineA-lineC)) {
    return true
  }
  else if (lineC < lineB+lineA && lineC > Math.abs(lineB-lineA)) {
    return true
  }
  else {
    return false
  }
}
console.log(triangleCheck(10, 14, 8));