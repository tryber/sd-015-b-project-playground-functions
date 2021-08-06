// Desafio 10
function techList() {
  // seu código aqui
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
function hydrate(bebidas) {
  let frase = "1 cachaça, 5 cervejas e 1 copo de vinho";
  let valores = []
  for (index = 0; index < frase.length; index +=1) {
    let valor = parseInt(frase[index])
    console.log(valor)
    if (typeof valor != NaN) 
      valores.push(valor)
  }
  var total = valores.reduce((total, numero) => total + numero, 0);
  console.log(total)
  return total;

}
let agua = hydrate("1 cachaça, 5 cervejas e 1 copo de vinho")
console.log(hydrate('Você deve beber '+ agua  + 'copos de água'))


String recebida:
  "1 cachaça, 5 cervejas e 1 copo de vinho"
String retornada:
  "7 copos de água"
String recebida:
  "1 cachaça, 5 cervejas e 1 copo de vinho"
String retornada:
  "7 copos de água"

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
