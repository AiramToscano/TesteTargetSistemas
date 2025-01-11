const inverterString = (name) => {
  const nameInverter = [];
  for (let i = name.length; i >= 0; i--) {
    nameInverter.push(name[i]);
  }
  return nameInverter.join("");
};

console.log(inverterString("airam"));
