// Desafio 10
function techList(tech, nameParam) {

  let techListing = {

  };

  if (tech.length > 0) {

    techListing = [
      {
      tech: tech[0],
      name: nameParam
     },
     {
      tech: tech[1],
      name: nameParam
     },
     {
      tech: tech[2],
      name: nameParam
     },
     {
      tech: tech[3],
      name: nameParam
     },
    {
      tech: tech[4],
      name: nameParam
    } ]

    return techListing;

  }

  else {
    return "Vazio!"
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
