// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

const mediaDistribuida = () => {
  const sp = 6783643;
  const rj = 3667866;
  const mg = 2922988;
  const es = 2716548;
  const outros = 1984953;
  const somaTotal = sp + rj + mg + es + outros;
  const porcentageSp = (sp * 100) / somaTotal;
  const porcentageRj = (rj * 100) / somaTotal;
  const porcentageMg = (mg * 100) / somaTotal;
  const porcentageEs = (es * 100) / somaTotal;
  const porcentageOutros = (outros * 100) / somaTotal;
  console.log(porcentageSp.toFixed(1));
  console.log(porcentageRj.toFixed(1));
  console.log(porcentageMg.toFixed(1));
  console.log(porcentageEs.toFixed(1));
  console.log(porcentageOutros.toFixed(1));
};

mediaDistribuida();
