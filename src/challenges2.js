// Desafio 10
function makeObjectTechList (techList, name) {
  techList.sort();
  let createdObject = [];

  for (let index = 0; index < techList.length; index += 1) {
    console.log(techList[index]);
    let createObject = {tech: techList[index], name: name};
    createdObject.push(createObject);
  }
  return createdObject;
  /**
   * Dica para criar objeto dinâmicamente dada pelo usuário hugomg, em:
   * https://pt.stackoverflow.com/questions/64116/%C3%89-poss%C3%ADvel-criar-um-objeto-dinamicamente-em-js-sem-utilizar-eval
   * Também tive ajuda dos colegas de formação conforme conversa que se iniciou em:
   * https://trybecourse.slack.com/archives/C027T2VU8U8/p1628354184324500
   */
}

function techList(receivedList, receivedName) {
  // seu código aqui
  return (receivedList.length > 0) ? makeObjectTechList(receivedList, receivedName) : 'Vazio!';
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
