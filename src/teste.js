let a = [0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4];
function repeatCount (a) {
    for (let key of a) {
      let counter = 0;
      for (let ind of a) {
        if (ind === key) {
          counter += 1;
          if (counter > 3) {
            return true;
          }
        }
      }
    }
    for (let key of a) {
      if (key > 9 || key < 0) {
        return true;
      }
    }
  }

console.log(repeatCount(a));