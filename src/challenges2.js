// Desafio 10
  function techList(technologys, name) {
    let objetos = [];
    let objeto = {
        tech: "NomeTech",
        name: "nome",
    }
    let technologysEmOrdem = technologys.sort();
    for (let i in technologysEmOrdem) {
        objeto = {
            tech: technologysEmOrdem[i],
            name: name,
        }
        objetos.push(objeto);
        objeto = 0;
    }
    if (technologys.length === 0){
        return 'Vazio!';
    } else {
        return objetos;
    }
  }


// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(linA, linB, linC) {
  let lineA = linA;
  let lineB = linB;
  let lineC = linC;
  let retorno = Boolean;
  if (lineA < lineB + lineC && lineA > (Math.abs(lineB) - Math.abs(lineC))) {
      retorno = true;
      if (lineB < lineA + lineC && lineC > (Math.abs(lineA) - Math.abs(lineC))) {
          retorno = true;
          if (lineC < lineA + lineB && lineC > (Math.abs(lineA) - Math.abs(lineB))) {
              retorno = true;
          }
      }
  } else {
      retorno = false;
  }
  return retorno;
}

// Desafio 13
function hydrate(drink) {
  let num = drink.match(/\d/g);
  let newNum = []
  for (i in num){
      newNum.push(parseInt(num[i]))
  }
  let total = newNum.reduce(function(acumulador, valorAtual, index, array) {
      return acumulador + valorAtual;
    });
  if (total === 1) {
      return total + " copo de água"
  } else {
      return total + " copos de água"
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
