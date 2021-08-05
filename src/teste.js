let array = [1, -5, 10, 9]


for (let index of array) {
    if (index < 9) {
      console.log('não é possível gerar um número de telefone com esses valores')
    } else {
        console.log('ok')
    }
  }