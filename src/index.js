// Desafio 10

function createObjects(ordem, names) {
  let array = [];
  for (let index = 0; index < ordem.length; index += 1) {
    let objects = {
      tech: ordem[index],
      name: names,
    };
    array.push(objects);
  }
  return verifVazio(array)
}

function verifVazio(array) {
  if (array.length > 0) {
    return array;
  }
  return 'Vazio!';
}

function techList(tech, names) {
  let ordem = tech.sort();
  return createObjects(ordem, names);
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'lucas'));
