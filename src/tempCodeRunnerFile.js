function generatePhoneNumber(vetor) {
  if (vetor.length!=11) {
    return "Array com tamanho incorreto."
  }
  ramal = '(' + vetor[0] + vetor[1] + ')';
  numFirst = ' '+vetor[2] + vetor[3] + vetor[4] + vetor [5] + vetor[6];
  numLast = '-'+vetor[7]+vetor[8]+vetor[9]+vetor[10];
  for (numero of vetor) {
    let count = 0
    if (numero < 0) {
      return "não é possível gerar um número de telefone com esses valores"
    }
    else if (numero>9) {
      return "não é possível gerar um número de telefone com esses valores"
    }
    for (index in vetor) {
      if (vetor[index] === numero){
        count +=1
        if (count ===3) {
          return "não é possível gerar um número de telefone com esses valores"
        }
      }
    }
  }
  return ramal+numFirst+numLast
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))