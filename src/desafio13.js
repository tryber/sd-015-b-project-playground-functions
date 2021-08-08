// Desafio 13
function hydrate(comanda) {
  let comandaSaida ='';
  for (let index = 0; index < comanda.length; index += 1) {
    comandaSaida = comanda.replace(/\D/g, '');
  }

  let totalAgua = 0;

  for (let index = 0; index < comandaSaida.length; index += 1) {
    totalAgua += parseInt(comandaSaida[index])
  }
  return totalAgua;
}
console.log(hydrate('3 caip, 2 chops, 2 vinhos'));
