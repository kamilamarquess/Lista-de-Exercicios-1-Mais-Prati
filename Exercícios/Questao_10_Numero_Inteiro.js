// Objetivo do programa:Este programa tem como objetivo ler um número inteiro fornecido pelo usuário e exibi-lo 10 vezes no console.
// Importa o módulo readline para ler dados do terminal

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicita o número ao usuário
rl.question('Digite um número inteiro: ', (input) => {
  const numero = parseInt(input);

  if (isNaN(numero)) {
    console.log('Por favor, digite um número inteiro válido.');
  } else {
    for (let i = 0; i < 10; i++) {
      console.log(`${i + 1}: ${numero}`);
    }
  }

  rl.close();
});
