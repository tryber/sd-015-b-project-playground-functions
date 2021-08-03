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
function triangleCheck() {
  // seu código aqui
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
