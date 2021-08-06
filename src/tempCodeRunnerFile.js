function techList(array, name) {
  let crescente = techs.sort();
  let object = {};
  let obs = [];
  for (let index = 0; index < array.length; index += 0) {
    object.tech = crescente[index];
    object.name = name;
    obs.push(object);
  } return obs;
}

let techs = ["React", "Jest", "HTML", "CSS", "JavaScript"];
let name = "Rodolfo";

console.log(techList(techs, name));