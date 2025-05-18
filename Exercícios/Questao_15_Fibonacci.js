// Objetivo do programa:
// Este programa gera e imprime os primeiros 10 números da sequência de Fibonacci
// utilizando um loop for. A sequência de Fibonacci começa com 0 e 1, e cada número
// subsequente é a soma dos dois anteriores.

function gerarFibonacci(n) {
  let fibonacci = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      fibonacci.push(0);
    } else if (i === 1) {
      fibonacci.push(1);
    } else {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
  }

  // Imprime a sequência
  console.log("Sequência de Fibonacci:");
  for (let i = 0; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
  }
}

// Gera os primeiros 10 números da sequência de Fibonacci
gerarFibonacci(10);
