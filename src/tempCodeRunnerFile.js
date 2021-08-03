function techList(array, name) {
  const newArray = [];
  for (const technologyName of array) {
    const techObject = {
      tech: technologyName,
      name: `${name}`,
    };
    newArray.push(techObject);
  }
  console.log(newArray.length);
  return newArray;
}
techList([], 'Zé');