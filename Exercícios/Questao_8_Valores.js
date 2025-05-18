// Este programa lê dois valores diferentes e os exibe em ordem crescente.

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Digite o primeiro valor: ", (input1) => {
  readline.question("Digite o segundo valor: ", (input2) => {
    const valor1 = parseFloat(input1);
    const valor2 = parseFloat(input2);

    if (isNaN(valor1) || isNaN(valor2)) {
      console.log("Por favor, digite valores numéricos válidos.");
    } else if (valor1 === valor2) {
      console.log("Os valores devem ser diferentes.");
    } else {
      // Ordena e exibe em ordem crescente
      if (valor1 < valor2) {
        console.log(`Ordem crescente: ${valor1}, ${valor2}`);
      } else {
        console.log(`Ordem crescente: ${valor2}, ${valor1}`);
      }
    }

    readline.close();
  });
});
