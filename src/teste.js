// Desafio 10
function techList(tech, name) {
  let newArray = [];
  let techSort = tech.sort();

  for (let index = 0; index < techSort.length; index += 1) {
    let objList = {
      tech: techSort[index], 
      name,
    };
    
    newArray.push(objList);
}
  return newArray;
}
  console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));