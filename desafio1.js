const sum = () => {
  let INDICE = 13;
  let soma = 0;
  let K = 0;
  while (K < INDICE) {
    K += 1;
    soma += K;
  }

  return soma;
};

console.log(sum());
