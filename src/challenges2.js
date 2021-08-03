// Desafio 10
function techList(arrTech, name) {
    
  let arrAns = [];
  let arrMan = arrTech.sort();

  if (arrMan.length > 0){
      for (let i = 0; i < arrMan.length; i += 1){
          arrAns.push({tech: arrMan[i],
                       name: name});
  }
      return arrAns;
  } else {return 'Vazio!'}
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
