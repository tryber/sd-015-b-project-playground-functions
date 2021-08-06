function generatePhoneNumber (arrayNumeros){
    var estructure = '(ab) cdefg-hijk'
    
    for (let index = 0; index < arrayNumeros.length; index += 1){
     var repeats = 0;
      for (let index2 = 0; index2 < arrayNumeros.length; index2 += 1){
        if (arrayNumeros[index] === arrayNumeros[index2]){
          repeats += 1;
        }
      }
      }
  
    for (let i = 0; i < arrayNumeros.length; i += 1) {
      if (arrayNumeros[i] < 0 || arrayNumeros[i] > 9 || repeats >= 3) {
        return 'não é possível gerar um número de telefone com esses valores'
      } else {
        if (arrayNumeros.length === 11){
        let first = estructure.replace(/a/, arrayNumeros[0]);
        let second = first.replace(/b/, arrayNumeros[1]);
        let third = second.replace(/c/, arrayNumeros[2]);
        let fourth = third.replace(/d/, arrayNumeros[3]);
        let fifth = fourth.replace(/e/, arrayNumeros[4]);
        let sixth = fifth.replace(/f/, arrayNumeros[5]);
        let seventh = sixth.replace(/g/, arrayNumeros[6]);
        let eighth = seventh.replace(/h/, arrayNumeros[7]);
        let ninth = eighth.replace(/i/, arrayNumeros[8]);
        let tenth = ninth.replace(/j/, arrayNumeros[9]);
        let phoneNumber = tenth.replace(/k/, arrayNumeros[10]);
        return phoneNumber;
      } else {
        return 'Array com tamanho incorreto'
      } 
      }
    }
    }