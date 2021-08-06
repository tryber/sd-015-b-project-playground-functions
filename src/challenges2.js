// Desafio 10
function techList (techList, name) {
let technologies = []
if (techList.length === 0) {
  return 'Vazio!'
} else {
for(let i = 0; i < techList.length; i += 1){
   let objctTech = {
     tech: techList[i],
     name: name
   };
   technologies.push(objctTech);
}
}
  return technologies;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));
// Desafio 11
//arrayNumeros.length - 1 === 11
function generatePhoneNumber(arrayNumeros){
  var estructure = '(ab) cdefg-hijk' 
  if (arrayNumeros.length != 11){
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < arrayNumeros.length; index += 1){
    let repeats = 0;
    for (let index2 = 0; index2 < arrayNumeros.length; index2 += 1){
      if (arrayNumeros[index] === arrayNumeros[index2]){
        repeats += 1;
      }
    }
    if (arrayNumeros[index] < 0 || arrayNumeros[index] > 9 || repeats >= 3){
      return 'não é possível gerar um número de telefone com esses valores'
    }  else {
      if (arrayNumeros.length === 11){
      let first = estructure.replace(/a/, arrayNumeros[0]);
      let second = first.replace(/b/, arrayNumeros[1]);
      let third = second.replace(/c/, arrayNumeros[2]);
      let fourth = third.replace(/d/, arrayNumeros[3]);
      let fifth = fourth.replace(/e/, arrayNumeros[4]);
      let sixth = fifth.replace(/f/, arrayNumeros[5]);
      let seventh = sixth.replace(/g/, arrayNumeros[6]);
      let eighth = seventh.replace(/h/, arrayNumeros[7]);
      let ninth = eighth.replace(/i/, arrayNumeros[8]);
      let tenth = ninth.replace(/j/, arrayNumeros[9]);
      let phoneNumber = tenth.replace(/k/, arrayNumeros[10]);
      return phoneNumber;
    } else {
      return 'Array com tamanho incorreto'
    } 
    }
  }
  
}
//console.log(generatePhoneNumber([1, 1, 3 ,3 ,3, 3 ,4 ,4 ,5,6,7]))
  // Desafio 12
function triangleCheck (lineA, lineB,lineC) {
  if(lineA + lineB > lineC && lineC > Math.abs(lineA - lineB) || lineC + lineB > lineA && lineA > Math.abs(lineC - lineB) || lineA + lineC > lineB && lineB > Math.abs(lineA - lineC)){
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate (input) {

}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck
}
