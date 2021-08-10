// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(phone) {
  if (phone.length !== 11) return 'Array com tamanho incorreto.';
  phone.forEach(el => {
    if (el < 0 || el > 9) return 'não é possível gerar um número de telefone com esses valores';
  });

  let numberPhone = `(${phone[0]}${phone[1]}) ${phone[3]}${phone[4]}${phone[5]}${phone[6]}-${phone[7]}${phone[8]}${phone[9]}${phone[10]}`;
  return numberPhone;
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
