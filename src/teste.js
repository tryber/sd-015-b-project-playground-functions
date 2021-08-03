function teste(texto) {
  // seu código aqui
  let novoTexto = ''
  for(let letra of texto){
    if(letra=='a'){
      novoTexto += 1
    }else if(letra=='e'){
      novoTexto += 2
    }else if(letra=='i'){
      novoTexto += 3
    }else if(letra=='o'){
      novoTexto += 4
    }else if(letra=='u'){
      novoTexto += 5
    }else{
      novoTexto += letra
    }
  }
  console.log(novoTexto)
}
encode('oi')
