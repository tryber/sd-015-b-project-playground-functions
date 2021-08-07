var pessoas = [
    {
      nome: "Matheus",
    idade: 29
  },
  {
      nome: "Pedro",
    idade: 18
  },
  {
      nome: "Maria",
    idade: 40
  },
  {
      nome: "Alan",
    idade: 63
  }
];
pessoas.sort(function(a, b,) {
  if(a.nome < b.nome) {
    return -1;
  } else {
    return true;
  }
});

console.log(pessoas);