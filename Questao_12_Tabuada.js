// Solicita ao usuário um número e exibir sua tabuada de 1 a 10 utilizando um loop for.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicita o número ao usuário
rl.question('Digite um número para ver sua tabuada: ', (input) => {
  const numero = parseFloat(input);

  if (isNaN(numero)) {
    console.log('Por favor, digite um número válido.');
  } else {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }

  rl.close();
});
