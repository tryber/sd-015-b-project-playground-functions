/* eslint-disable no-new-object */
/* eslint-disable prefer-destructuring */
let techs = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let o = new Object();
o.tech = techs[0];
o.name = 'Lucas';
let p = new Object();
p.tech = techs[1];
p.name = 'Lucas';
let resposta = [o, p];
console.log(resposta);

function sortArray (array) {
  array.sort();
  return array;
}

console.log (sortArray(techs))