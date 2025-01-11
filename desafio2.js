const sequenceFibonacci = (number) => {
  const listFibonacci = [0, 1];
  let indexFirst = 0;
  let indexSecond = 1;
  if (number === 0 || number === 1) {
    return `${listFibonacci} e o numero é : ${number}`;
  }
  if (number < 0) {
    return `esse o numero ${number} não faz parte da seguencia de fibonnaci`;
  }
  for (let i of listFibonacci) {
    let sum = listFibonacci[indexFirst] + listFibonacci[indexSecond];
    listFibonacci.push(sum);
    indexFirst += 1;
    indexSecond += 1;
    const findNumber = listFibonacci.find((e) => e === number);
    if (findNumber) {
      return `${listFibonacci} e o numero é : ${number}`;
    } else if (sum > number) {
      return `esse o numero ${number} não faz parte da seguencia de fibonnaci`;
    }
  }
};

console.log(sequenceFibonacci(5));
