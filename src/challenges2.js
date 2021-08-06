// Desafio 10
function techList (techList, nome) {
  let technologies = techList;
  let output = [];
  for (let i = 0; i < techList.length; i += 1) {
  if(techList !== '') {
    output.push(
      [{tech: techList[i],
       name: nome,
      }, 
    ])
  } else { return 'Vazio'}
} return output
}
// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],
// "Artur"))

// Desafio 11
//arrayNumeros.length - 1 === 11
function generatePhoneNumber (arrayNumeros) {
  let estructure = '(ab) cdefg-hijk'
  
  for (let i = 0; i < arrayNumeros.length; i += 1) {
    if (arrayNumeros.length === 11) {
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

console.log(generatePhoneNumber([3, 1, 9, 9, 1, 4, 6, 1, 7, 5]))

  // Desafio 12
function triangleCheck (lineA, lineB,lineC) {
  if(lineA + lineB > lineC && lineC > Math.abs(lineA - lineB) || lineC + lineB > lineA && lineA > Math.abs(lineC - lineB) || lineA + lineC > lineB && lineB > Math.abs(lineA - lineC)){
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate () {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck
}
