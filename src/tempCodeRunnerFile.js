function techList(vetor,name) {
  let obj = {}
  for (index in vetor) {
    obj[index] = {
      tech: vetor[index],
      name: name
    }
  }
  return obj
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"));