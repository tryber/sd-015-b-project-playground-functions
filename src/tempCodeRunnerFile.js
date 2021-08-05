function itemCounter(arr) {
  let items = {};
  let index;
  let value;

  for (index in arr) {
    value = arr[index];
    if (typeof items[value] === 'undefined') {
      items[value] = 1;
    } else {
      items[value] += 1;
    }
  }
  return items;
}

console.log(itemCounter([1, 1, 1, 2, 3, 5, 6, 6, 6, 7, 10]));
