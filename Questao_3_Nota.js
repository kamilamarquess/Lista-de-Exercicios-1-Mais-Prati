// Este programa classifica a nota de um aluno entre 0 e 10.
// Aprovado:     nota >= 7
// Recuperação:  nota >= 5 e < 7
// Reprovado:    nota < 5

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Digite uma nota de 0 a 10: ", (input) => {
  const nota = parseFloat(input); 

  if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log("Por favor, digite uma nota válida entre 0 e 10.");
  } else if (nota >= 7) {
    console.log("Classificação: Aprovado");
  } else if (nota >= 5) {
    console.log("Classificação: Recuperação");
  } else {
    console.log("Classificação: Reprovado");
  }

  readline.close();
});