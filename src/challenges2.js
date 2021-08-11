// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let obejtos = [];
  
  tech.sort();

  for (index = 0; index < tech.length; index += 1) {
    obejtos.push({
      name: name,
      tech: tech[index],
    })
  }
  if (tech.length === 0) {
    return "Vazio!"
  }
  return obejtos;
}

// Desafio 11
function generatePhoneNumber(numero) {
  // seu código aqui
  if (numero.length != 11) {
    return "Array com tamanho incorreto."
  }
  for (index = 0; index < numero.length; index += 1) {
    if (numero[index] < 0 || numero[index] > 9) {
      return "não é possível gerar um número de telefone com esses valores"
    } 
    let contador = 0;
    for (segundoIndex = 0; segundoIndex < numero.length; segundoIndex += 1) {
      if (numero[index] === numero[segundoIndex]) {
        contador += 1;
      }
      if (contador >= 3) {
        return "não é possível gerar um número de telefone com esses valores"
      }
    }
  }
  numero.splice(0, 0, "(");
  numero.splice(3, 0, ") ");
  numero.splice(9, 0, "-");
  return numero.join("")
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let valoresDoTriangulo = [lineA, lineB, lineC];
  valoresDoTriangulo.sort((a, b) => a - b)

  if (lineB + lineC > lineA && lineA > Math.abs(lineB - lineC)) {
     if (lineC > lineA + lineB) {
       return false;
     } else {
       return true;
     }
  } else {
    return false;
  }

  }

// Desafio 13
function hydrate(bebidas) {
  // seu código aqui
  let quantidadeDeBebidas = 0;
  let umCopo = "1 copo de água"
  let maisDeUmCopo = " copos de água"
  for (index = 0; index < bebidas.length; index += 1) {
    if (parseFloat(bebidas[index]) < 10 && parseFloat(bebidas[index]) >= 1) {
      quantidadeDeBebidas += parseFloat(bebidas[index])
    }
  }
  if (quantidadeDeBebidas === 1) {
    return umCopo;
  } else {
    return quantidadeDeBebidas + maisDeUmCopo;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
