// Este programa lê três valores (A, B e C) que representam os lados de um triângulo.
// Ele verifica se esses lados realmente formam um triângulo, com base na regra:
//    A < B + C  &&  B < A + C  &&  C < A + B
//
// Se os lados formarem um triângulo, o programa classifica como:
// - Equilátero: todos os lados iguais
// - Isósceles: dois lados iguais
// - Escaleno: todos os lados diferentes

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para perguntar e coletar os três lados
function perguntarLados() {
  readline.question("Digite o lado A: ", (a) => {
    readline.question("Digite o lado B: ", (b) => {
      readline.question("Digite o lado C: ", (c) => {
        const A = parseFloat(a);
        const B = parseFloat(b);
        const C = parseFloat(c);

        // Verifica se todos os valores são válidos e positivos
        if (isNaN(A) || isNaN(B) || isNaN(C) || A <= 0 || B <= 0 || C <= 0) {
          console.log("Por favor, digite apenas valores positivos válidos.");
        } 
        // Verifica se os lados formam um triângulo
        else if (A < B + C && B < A + C && C < A + B) {
          if (A === B && B === C) {
            console.log("Triângulo Equilátero: todos os lados são iguais.");
          } else if (A === B || A === C || B === C) {
            console.log("Triângulo Isósceles: dois lados são iguais.");
          } else {
            console.log("Triângulo Escaleno: todos os lados são diferentes.");
          }
        } else {
          console.log("Os valores informados **não formam** um triângulo.");
        }

        readline.close();
      });
    });
  });
}

perguntarLados();