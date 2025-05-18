// Este programa tem como objetivo verificar se um número é par ou ímpar

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Digite um número inteiro: ", (input) => {
  const numero = parseInt(input);

  if (isNaN(numero)) {
    console.log("Por favor, digite um número inteiro válido.");
  } else if (numero % 2 === 0) {
    console.log("Este número é par.");
  } else {
    console.log("Este número é ímpar.");
  }

  readline.close();
});