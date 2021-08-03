function techList(array, name) {
  // seu código aqui
  let novaLista = [];
  if(array.length == 0){
    console.log ("Vazio!");
  } else {
    for (let item of array) {
      let objeto = {};
      objeto['tech'] = item;
      objeto['name'] = name;
      novaLista.push(objeto);
    }
    console.log (novaLista);
  }
}
let lista = ['JavaScript', 'HTML']
techList(lista, "Rodrigo")
