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
