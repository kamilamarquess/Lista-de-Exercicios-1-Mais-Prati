// Este pprograma solicita ao usuário 5 números e calcular a soma total utilizando um loop for.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];
let contador = 0;

function perguntarNumero() {
  if (contador < 5) {
    rl.question(`Digite o ${contador + 1}º número: `, (input) => {
      const numero = parseFloat(input);

      if (isNaN(numero)) {
        console.log('Entrada inválida. Digite um número válido.');
        perguntarNumero(); // repete a pergunta se a entrada for inválida
      } else {
        numeros.push(numero);
        contador++;
        perguntarNumero(); // chama a próxima entrada
      }
    });
  } else {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
      soma += numeros[i];
    }
    console.log(`A soma total dos números é: ${soma}`);
    rl.close();
  }
}

perguntarNumero();
