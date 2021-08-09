// Desafio 10
function techList(arr, name) {
  // seu código aqui
  if(arr.length === 0){
  return'Vazio!';
   }
  let ar = arr.sort();
 let saida = []; 
 
 for (let key of ar){
  let obj = new Object;
   obj.tech = key,
   obj.name = name  
   saida.push(obj);  
 }
   return saida;
}
techList(["React","Jest","HTML", "CSS", "JavaScript"], "Lucas");

/*techList([{tech: "React",
name: "Lucas"},{tech: "Jest",
name: "Lucas"},{tech: "HTML",
name: "Lucas"},{tech: "CSS",
name: "Lucas"},{tech: "JavaScript",
name: "Lucas"}]);
*/
// Desafio 11
function generatePhoneNumber(arr) {
  if(arr.length != 11){
    console.log("Array com tamanho incorreto.")
  }
  // seu código aqui
}
generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]);

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
