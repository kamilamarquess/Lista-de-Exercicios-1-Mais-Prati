// Este programa calcula o fatorial de um número informado pelo usuário

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Digite um número para calcular o fatorial: ", (input) => {
  const numero = parseInt(input);
  let fatorial = 1;

  if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
  } else if (numero < 0) {
    console.log("Fatorial não é definido para números negativos.");
  } else {
    for (let i = 1; i <= numero; i++) {
      fatorial *= i;
    }
    console.log(`O fatorial de ${numero} é ${fatorial}`);
  }

  readline.close();
});