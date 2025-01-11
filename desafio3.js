const jsonData = require("./DadosDistribuidora.json");
const calculateBillBigger = () => {
  let maiorValorDoDia = jsonData[0];
  jsonData.forEach((e) => {
    if (maiorValorDoDia.valor < e.valor) {
      maiorValorDoDia = e;
    }
  });
  return `O maior valor do dia do mes foi com o valor: ${maiorValorDoDia.valor} `;
};

const calculateBillSmaller = () => {
  let menorValorDoDia = jsonData[0];
  jsonData.forEach((e) => {
    if (menorValorDoDia.valor > e.valor) {
      menorValorDoDia = e;
    }
  });
  return `O menor valor do dia do mes foi no dia foi com um valor: ${menorValorDoDia.valor} `;
};

const calculateMedia = () => {
  const billBigger = [];
  let sum = 0;
  let media = 0;
  jsonData.forEach((e) => {
    sum += e.valor;
  });
  media = sum / jsonData.length;
  jsonData.forEach((e) => {
    if (e.valor > media) {
      billBigger.push(e);
    }
  });
  return `O numero de dias no mês que o valor de faturamento diário foi superior a média mensal foi de : ${billBigger.length}`;
};

console.log(calculateBillSmaller());
console.log(calculateBillBigger());
console.log(calculateMedia());
