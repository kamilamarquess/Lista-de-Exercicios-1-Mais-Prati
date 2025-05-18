// Este programa recebe números decimais do usuário até que ele digite 0 e, em seguida, calcular a média aritmética desses números.
//Exs.: Substitua a vírgula por um ponto. Ex.: 1.70 no lugar de 1,70


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let soma = 0;
let quantidade = 0;

function perguntarNumero() {
  rl.question('Digite um número decimal (ou 0 para encerrar): ', (input) => {
    const numero = parseFloat(input);

    // Verifica se é um número válido
    if (isNaN(numero)) {
      console.log('Valor inválido. Digite um número decimal.');
      return perguntarNumero();
    }

    // Se for 0, encerra a entrada
    if (numero === 0) {
      if (quantidade === 0) {
        console.log('Nenhum número válido foi digitado.');
      } else {
        const media = soma / quantidade;
        console.log(`A média aritmética dos números digitados é: ${media.toFixed(2)}`);
      }
      return rl.close();
    }

    // Acumula soma e quantidade
    soma += numero;
    quantidade++;

    perguntarNumero(); // chama novamente até digitar 0
  });
}

perguntarNumero();
