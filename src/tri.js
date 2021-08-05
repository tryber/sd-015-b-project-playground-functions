function hydrate(string) {
  string = string.replace(/\D/g, '');
  let takeWaterCup = 0;
  for (index = 0; index < string.length; index++) {
    let waterCup = parseInt(string[index], 10);
    takeWaterCup = takeWaterCup + waterCup;
  }

  switch (takeWaterCup) {
    case 1:
      return `${takeWaterCup} copo de água`;
      break;

    default:
      return `${takeWaterCup} copos de água`;
  }
}

hydrate('1 cachaça, 2 hidromeis, 5 cervejas');
