// Desafio 10
function techList(namesTech, name) {
       
  let namesTechObjt = [];
  let ordemNamesTech = namesTech.sort();
                
  for (let i = 0; i < namesTech.length; i += 1){
      let techObjt = {tech: ordemNamesTech[i], name: name}  
      namesTechObjt.push(techObjt);
  }
  if (namesTech.length === 0){
        return 'Vazio!'
  }
        
     
return namesTechObjt
}    

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(LineaA, LineaB, LineaC) {

  if ((LineaA < LineaB + LineaC && LineaA > Math.abs(LineaB -LineaC)) 
  ||(LineaB < LineaA + LineaC && LineaB > Math.abs(LineaA -LineaC)) 
  ||(LineaC < LineaA + LineaB && LineaC > Math.abs(LineaA -LineaB))){
  
  return true
  }
  else{ 
  
    return false
  }
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
