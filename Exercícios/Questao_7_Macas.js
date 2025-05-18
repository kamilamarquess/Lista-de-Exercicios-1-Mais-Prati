// Este programa calcula o valor total da compra de maçãs.
// Cada maçã custa:
// R$ 0,30 se forem compradas menos de 12
// R$ 0,25 se forem compradas 12 ou mais

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Quantas maçãs você deseja comprar? ", (input) => {
  const quantidade = parseInt(input);

  if (isNaN(quantidade) || quantidade <= 0) {
    console.log("Por favor, digite uma quantidade válida e positiva.");
  } else {
    let precoPorUnidade;

    if (quantidade < 12) {
      precoPorUnidade = 0.30;
    } else {
      precoPorUnidade = 0.25;
    }

    const total = quantidade * precoPorUnidade;
    console.log(`Você comprou ${quantidade} maçã(s).`);
    console.log(`Preço por unidade: R$ ${precoPorUnidade.toFixed(2)}`);
    console.log(`Valor total da compra: R$ ${total.toFixed(2)}`);
  }

  readline.close();
});